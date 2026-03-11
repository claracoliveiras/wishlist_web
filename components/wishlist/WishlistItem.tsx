"use client"

import { DeleteButton } from "./DeleteButton";

type WishlistItemProps = {
  id: string,
  imgUrl: string,
  itemUrl: string,
  editMode?: boolean
};

export default function WishlistItem({
    id,
    imgUrl,
    itemUrl,
    editMode = false
}: WishlistItemProps) {
    return (
        <div
            className="group w-full h-[16vw] overflow-hidden rounded-[20px]"
            onClick={() => {
                if (!editMode) {
                    window.open(itemUrl, "_blank");
                }
            }}
        >
            <div className="relative w-full h-full">
                <img className="w-full h-full object-cover" src={imgUrl} alt="" />
                <div className="absolute inset-0 bg-black/0 transition duration-200 group-hover:bg-black/25" />
                {editMode && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 text-lg font-semibold text-white">
                        <DeleteButton id={id} />
                    </div>
                )}
            </div>
        </div>
    );
}
