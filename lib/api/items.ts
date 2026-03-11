export type CreateItemRequest = {
    item_url: string;
    item_img: string;
}

export type DeleteItemRequest = {
    id: string;
}

export type CreateItemResponse = {
    message?: string;
}

export type DeleteItemResponse = {
    message?: string;
}

export type WishlistItemData = {
    id: string;
    item_img: string;
    item_url: string;
};

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

export async function deleteItem(payload: DeleteItemRequest): Promise<DeleteItemResponse> {
    const res = await fetch("/api/items/delete", {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (!res.ok) {
        throw new Error(data.message ?? "Deletion failed");
    }

    return data;
}

export async function listItems(username: string): Promise<WishlistItemData[]> {
    const user = await getUserByUsername(username);
    const extractedUser = user.id;

    const res = await fetch(`http://localhost:8000/items?owner_id=${extractedUser}`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
        },
        cache: "no-store"
    });

    const data = await res.json();

    if (!res.ok) {
        throw new Error(data.message ?? "Retrieval failed");
    }

    return data;
}

export async function getUserByUsername( username: string ) {
    const res = await fetch(`http://localhost:8000/users/by-username/${username}`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
        },
        cache: "no-store"
    });

    const data = await res.json();

    if (!res.ok) {
        throw new Error(data.message ?? "Retrieval failed");
    }

    return data;
}
