import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function DELETE(request: Request) {
    const body = (await request.json()) as {
        id: string;
    };

    const cookieStore = await cookies();
    const tokenCookie = cookieStore.get("auth_token");
    const parsedCookie = tokenCookie ? JSON.parse(tokenCookie.value) : null;
    const extractedToken = parsedCookie.access_token;

    try {
        const response = await fetch(`http://localhost:8000/items/${body.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${extractedToken}`,
            },
            cache: "no-store",
        });

        if (!response.ok) {
            const errorText = await response.text();

            return NextResponse.json(
                { message: errorText || "Deletion failed" },
                { status: response.status }
            );
        }

        return NextResponse.json({ message: "Deleted successfully" });
    } catch (e) {
        return NextResponse.json(
            { message: `There was an error deleting this item: ${e}` },
            { status: 500 }
        );
    }
}
