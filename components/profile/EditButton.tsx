import { LucideIcon } from "lucide-react";

type EditButtonProps = {
    icon: LucideIcon;
    onClick: () => void;
};

export default function EditButton({
    icon: Icon,
    onClick
}: EditButtonProps) {
    return (
        <button
            className="bg-red-900 text-white p-3 m-1 rounded-[10px] transition duration-200 hover:bg-red-950 active:scale-95"
            onClick={onClick}
        >
            <Icon strokeWidth={3} className="w-5 h-5 text-white" />
        </button>
    );
}
