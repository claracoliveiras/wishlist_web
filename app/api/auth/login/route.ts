import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const AUTH_COOKIE_NAME = "auth_token";
const USERNAME_COOKIE_NAME = "auth_username";
const AUTH_COOKIE_MAX_AGE = 60 * 60;

export async function POST(request: Request) {
  const body = (await request.json()) as {
    username: string;
    password: string;
  };
  
  const formBody = new URLSearchParams();
  formBody.set("username", body.username);
  formBody.set("password", body.password);

  const backendResponse = await fetch("http://localhost:8000/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: formBody.toString(),
    cache: "no-store",
  });

  const token = await backendResponse.text();

  if (!backendResponse.ok) {
    return NextResponse.json(
      { message: token || "Login failed" },
      { status: backendResponse.status }
    );
  }

  if (!token) {
    return NextResponse.json(
      { message: "Login response did not include a token" },
      { status: 502 }
    );
  }

  const cookieStore = await cookies();
  cookieStore.set(AUTH_COOKIE_NAME, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: AUTH_COOKIE_MAX_AGE,
  });
  
  cookieStore.set(USERNAME_COOKIE_NAME, body.username, {
    httpOnly: false,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: AUTH_COOKIE_MAX_AGE,
  });

  return NextResponse.json({ message: "Login successful" });
}
