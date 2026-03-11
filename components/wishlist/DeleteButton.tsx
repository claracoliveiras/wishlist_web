"use client";

import { deleteItem } from "@/lib/api/items";
import { Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import type { MouseEvent } from "react";

type DeleteButtonProps = {
    id: string;
}

export function DeleteButton({ id } : DeleteButtonProps) {
    const router = useRouter();

    async function handleDelete() {
        await deleteItem({ id });
        router.refresh();
    }

    return (
        <button
            onClick={(e: MouseEvent<HTMLButtonElement>) => {
                e.stopPropagation();
                void handleDelete();
            }}
            className="bg-red-900 text-white p-3 m-1 rounded-[10px] transition duration-200 hover:bg-red-950 active:scale-95"
        >
            <Trash strokeWidth={3} className="w-5 h-5 text-white" />
        </button>
    );
}
