"use client";

import Collection from "@/components/profile/Collection";
import EditButton from "@/components/profile/EditButton";
import ProfileButton from "@/components/profile/ProfileButton";
import AddNewItemButton from "@/components/wishlist/AddNewItemButton";
import WishlistItem from "@/components/wishlist/WishlistItem";
import type { WishlistItemData } from "@/lib/api/items";
import { Pen, UserRoundPlus } from "lucide-react";
import { useState } from "react";

type WishlistClientViewProps = {
  items: WishlistItemData[];
};

export default function WishlistClientView({ items }: WishlistClientViewProps) {
  const [editMode, setEditMode] = useState(false);

  return (
    <>
      <div className="mt-4">
        <ProfileButton icon={UserRoundPlus} />
        <EditButton
          icon={Pen}
          onClick={() => setEditMode((current) => !current)}
        />
      </div>

      {/* ADDING COLLECTIONS */}
      <div className="hidden w-full flex-row items-start justify-start gap-3">
        <Collection collectionName="Collection 1" imgUrl="https://i.pinimg.com/736x/2e/39/bf/2e39bf32c46527a51c1f3c3fa571d5ae.jpg" />
        <Collection collectionName="Collection 2" imgUrl="https://i.pinimg.com/736x/2e/39/bf/2e39bf32c46527a51c1f3c3fa571d5ae.jpg" />
      </div>

      <div className="mt-6 grid w-full grid-cols-3 gap-4">
        <AddNewItemButton />
        {items.map((item) => (
          <WishlistItem
            key={item.id}
            id={item.id}
            imgUrl={item.item_img}
            itemUrl={item.item_url}
            editMode={editMode}
          />
        ))}
      </div>
    </>
  );
}
