"use client";

import { HeartPlus } from "lucide-react";
import { useState } from "react";
import AddingPopUp from "./AddingPopUp";

export default function ProfileAddButton() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <button className="bg-red-900 text-white p-3 m-1 rounded-[10px] transition duration-200 hover:bg-red-950 active:scale-95" onClick={() => setIsOpen(true)}>
                <HeartPlus strokeWidth={3} className="w-5 h-5 text-white" />
            </button>

            {
                isOpen && (<AddingPopUp onClose={() => setIsOpen(false)}/>)
            }
            
        </div>
        
    );
}