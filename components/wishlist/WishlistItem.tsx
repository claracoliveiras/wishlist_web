type WishlistItemProps = {
  imgUrl: string
};

export default function WishlistItem({
    imgUrl
}: WishlistItemProps) {
    return (
        <button className="group w-full h-[16vw] overflow-hidden rounded-[20px]">
            <div className="relative w-full h-full">
                <img className="w-full h-full object-cover" src={imgUrl} alt="" />
                <div className="absolute inset-0 bg-black/0 transition duration-200 group-hover:bg-black/25" />
            </div>
        </button>
    );
}

