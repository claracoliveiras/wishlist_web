"use client";

import { Plus } from "lucide-react";
import { useState } from "react";
import AddingPopUp from "./AddingPopUp";

export default function AddNewItemButton() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <button onClick={() => setIsOpen(true)} className="group relative flex h-[16vw] w-full items-center justify-center overflow-hidden rounded-[20px] bg-gray-100">
                <Plus strokeWidth={3} className="relative z-10 h-8 w-8 text-red-900" />
                <div className="absolute inset-0 bg-black/0 transition duration-200 group-hover:bg-black/10" />
            </button>

            {
                isOpen && (<AddingPopUp onClose={() => setIsOpen(false)}/>)
            }
            
        </div>
        
    );
}