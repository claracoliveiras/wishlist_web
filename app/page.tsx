import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import LoginForm from "@/components/auth/LoginForm";

export default async function Home() {
  const cookieStore = await cookies();
  const username_cookie = cookieStore.get("auth_username");

  if (username_cookie?.value) {
    redirect(`/${encodeURIComponent(username_cookie.value)}`);
  }

  return <LoginForm />;
}
