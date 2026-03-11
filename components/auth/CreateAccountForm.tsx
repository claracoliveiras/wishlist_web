"use client";

import { signUpUser } from "@/lib/api/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function CreateAccountForm() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [bannerPicture, setBannerPicture] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (step === 1) {
      setStep(2);
      return;
    }

    setError("");
    setLoading(true);

    try {
      await signUpUser({
        username,
        email,
        password,
        profile_picture: profilePicture,
        banner_picture: bannerPicture,
      });
      router.push("/");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-10">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
      >
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">Create Account</h1>
          <p className="mt-1 text-sm text-gray-600">
            {step === 1
              ? "Set up your Wishy account to start building your wishlist."
              : "Add the images for your public profile."}
          </p>
        </div>

        {step === 1 ? (
          <>
            <label className="mb-4 block">
              <span className="mb-2 block text-sm font-medium text-gray-700">
                Username
              </span>
              <input
                type="text"
                placeholder="Choose a username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none transition focus:border-gray-500"
              />
            </label>

            <label className="mb-4 block">
              <span className="mb-2 block text-sm font-medium text-gray-700">
                Email
              </span>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none transition focus:border-gray-500"
              />
            </label>

            <label className="mb-6 block">
              <span className="mb-2 block text-sm font-medium text-gray-700">
                Password
              </span>
              <input
                type="password"
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={8}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none transition focus:border-gray-500"
              />
            </label>
          </>
        ) : (
          <>
            <label className="mb-4 block">
              <span className="mb-2 block text-sm font-medium text-gray-700">
                Profile picture URL
              </span>
              <input
                type="url"
                placeholder="https://example.com/profile.jpg"
                value={profilePicture}
                onChange={(e) => setProfilePicture(e.target.value)}
                required
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none transition focus:border-gray-500"
              />
            </label>

            <label className="mb-6 block">
              <span className="mb-2 block text-sm font-medium text-gray-700">
                Banner URL
              </span>
              <input
                type="url"
                placeholder="https://example.com/banner.jpg"
                value={bannerPicture}
                onChange={(e) => setBannerPicture(e.target.value)}
                required
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none transition focus:border-gray-500"
              />
            </label>
          </>
        )}

        {error ? <p className="mb-4 text-sm text-red-600">{error}</p> : null}

        <div className="flex gap-3">
          {step === 2 ? (
            <button
              type="button"
              onClick={() => setStep(1)}
              className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
            >
              Back
            </button>
          ) : null}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:bg-gray-400"
          >
            {loading
              ? "Creating Account..."
              : step === 1
                ? "Continue"
                : "Create Account"}
          </button>
        </div>

        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link href="/" className="font-semibold text-red-900 transition hover:text-red-950">
            Log in
          </Link>
        </p>
      </form>
    </main>
  );
}
