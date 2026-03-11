"use client";

import { createItem } from "@/lib/api/items";
import { FormEvent, useState } from "react";

type AddingPopUpProps = {
    onClose: () => void;
};

export default function AddingPopUp({ onClose } : AddingPopUpProps) {
    const [item_url, setUrl] = useState("");
    const [item_img, setImg] = useState("");
    
    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        try {
            await createItem({ item_url, item_img });
        } catch (e) {
            throw new Error(`Error: ${e}`); 
        }
    }

    return <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
            <h2 className="text-xl font-semibold">Add new item</h2>
            <p className="mt-2 text-sm text-gray-600">
              Input item image and url to create a new wishlist item.
            </p>
            <br/>

            <form onSubmit={handleSubmit}>
                <label className="mb-4 block">
                    <span className="mb-2 block text-sm font-medium text-gray-700">
                        Item image URL
                    </span>
                    <input
                        type="text"
                        placeholder="Enter the URL for the item image"
                        value={item_img}
                        onChange={(e) => setImg(e.target.value)}
                        required
                        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none transition focus:border-gray-500"
                    />
                </label>

                <label className="mb-4 block">
                    <span className="mb-2 block text-sm font-medium text-gray-700">
                        URL
                    </span>
                    <input
                        type="text"
                        placeholder="Enter the URL you would like to be redirected to"
                        value={item_url}
                        onChange={(e) => setUrl(e.target.value)}
                        required
                        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none transition focus:border-gray-500"
                    />
                </label>
                <div className="mt-6 flex justify-end gap-2">
                <button
                    type="button"
                    onClick={onClose}
                    className="rounded-lg border px-4 py-2"
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    className="rounded-lg bg-red-900 px-4 py-2 text-white"
                >
                    Add
                </button>
                </div>
            </form>

            
          </div>
        </div>
}