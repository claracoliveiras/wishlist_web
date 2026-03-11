import ProfileHeader from "@/components/profile/ProfileHeader";
import WishlistClientView from "@/components/wishlist/WishlistClientView";
import { listItems } from "@/lib/api/items";

export default async function Page({
  params,
}: {
  params: Promise<{ username: string }>
}) {
  const { username } = await params;
  const items = await listItems(username);

  return (
    <div className="mx-auto my-6 flex w-[50vw] flex-col items-center justify-center">
      <ProfileHeader username={username} />
      <WishlistClientView items={items} />
    </div>
  );
}
