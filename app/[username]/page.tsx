import { cookies } from "next/headers";
import Link from "next/link";
import ProfileHeader from "@/components/profile/ProfileHeader";
import WishlistClientView from "@/components/wishlist/WishlistClientView";
import { listItems } from "@/lib/api/items";
import { getUserProfile } from "@/lib/api/profile";

export default async function Page({
  params,
}: {
  params: Promise<{ username: string }>
}) {
  const { username } = await params;
  const cookieStore = await cookies();
  const loggedInUsername = cookieStore.get("auth_username")?.value;
  const viewedProfile = await getUserProfile({ username });
  const loggedInProfile = loggedInUsername
    ? await getUserProfile({ username: loggedInUsername })
    : null;
  const items = await listItems(username);
  const canManageItems = loggedInProfile?.id === viewedProfile.id;

  return (
    <div className="mx-auto my-6 flex w-[50vw] flex-col items-center justify-center">
      <div className="mb-4 flex w-full items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="h-3 w-3 rounded-full bg-red-700" />
          <span className="text-xl font-semibold text-gray-900">Wishy</span>
        </div>

        {loggedInProfile ? (
          <div className="flex items-center gap-3">
            <img
              src={loggedInProfile.profile_picture}
              alt={`${loggedInProfile.username} profile`}
              className="h-10 w-10 rounded-full object-cover"
            />
            <p className="text-sm font-medium text-gray-800">
              Hello,{" "}
              <Link
                href={`/${encodeURIComponent(loggedInProfile.username)}`}
                className="font-semibold text-red-900 transition hover:text-red-950"
              >
                {loggedInProfile.username}
              </Link>
              !
            </p>
          </div>
        ) : (
          <div className="flex items-center gap-2 text-sm font-medium text-gray-800">
            <span>Welcome!</span>
            <Link
              href="/"
              className="font-semibold text-red-900 transition hover:text-red-950"
            >
              Log in
            </Link>
          </div>
        )}
      </div>

      <ProfileHeader profile={viewedProfile} />
      <WishlistClientView items={items} canManageItems={canManageItems} />
    </div>
  );
}
