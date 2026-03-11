import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const body = (await request.json()) as {
        item_url: string;
        item_img: string;
    };

    const cookieStore = await cookies();
    const tokenCookie = cookieStore.get("auth_token");
    const parsedCookie = tokenCookie ? JSON.parse(tokenCookie.value) : null;
    const extractedToken = parsedCookie.access_token;

    const formBody = new URLSearchParams();
    formBody.set("item_url", body.item_url);
    formBody.set("item_img", body.item_img);

    console.log(extractedToken);
    console.log("AUTH HEADER", `Bearer ${extractedToken}`);


    try {
        await fetch("http://localhost:8000/items", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${extractedToken}`
        },
        body: JSON.stringify({
            item_url: body.item_url, // or your actual source fields
            item_img: body.item_img,
        }),
        cache: "no-store"
    });
        return NextResponse.json({ message: "Created successfully" });
    } catch (e) {
        return NextResponse.json({ message: `There was an error creating this item: ${e}` });
    }
}