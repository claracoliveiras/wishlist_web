import { LucideIcon } from "lucide-react";

type ProfileButtonProps = {
    icon: LucideIcon;
};

export default function ProfileButton({
    icon: Icon
}: ProfileButtonProps) {
    return (
        <button className="bg-red-900 text-white p-3 m-1 rounded-[10px] transition duration-200 hover:bg-red-950 active:scale-95">
            <Icon strokeWidth={3} className="w-5 h-5 text-white" />
        </button>
    );
}
