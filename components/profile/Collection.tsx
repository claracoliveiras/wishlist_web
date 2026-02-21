type CollectionProps = {
    imgUrl: string,
    collectionName: string
};

export default function Collection({
    imgUrl,
    collectionName
}: CollectionProps) {
    return (
        <button className="w-[8vw] flex flex-col items-start">
        <div className="relative w-full h-[8vw] overflow-hidden rounded-[20px] group">
            <img className="w-full h-full object-cover" src={imgUrl} alt="" />
            <div className="absolute inset-0 bg-black/0 transition duration-200 group-hover:bg-black/25" />
        </div>
        <p className="mt-2 text-sm font-[600] text-black leading-tight">
  {collectionName}
</p>
        </button>
    );
}
