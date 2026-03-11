import { NextResponse } from "next/server";
import { getBackendUrl } from "@/lib/backend-url";

export async function POST(request: Request) {
  const body = (await request.json()) as {
    username: string;
    email: string;
    password: string;
    profile_picture: string;
    banner_picture: string;
  };

  const backendResponse = await fetch(getBackendUrl("/users"), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: crypto.randomUUID(),
      username: body.username,
      email: body.email,
      password: body.password,
      profile_picture: body.profile_picture,
      banner_picture: body.banner_picture,
    }),
    cache: "no-store",
  });

  const data = await backendResponse.json().catch(() => null);

  if (!backendResponse.ok) {
    return NextResponse.json(
      { message: data?.detail ?? data?.message ?? "Sign up failed" },
      { status: backendResponse.status }
    );
  }

  return NextResponse.json(data, { status: backendResponse.status });
}
