export type CreateItemRequest = {
    item_url: string;
    item_img: string;
}

export type CreateItemResponse = {
    message?: string;
}

export async function createItem(payload: CreateItemRequest): Promise<CreateItemResponse> {
    const res = await fetch("/api/items/create", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (!res.ok) {
        throw new Error(data.message ?? "Creation failed");
    }

    return data;
}