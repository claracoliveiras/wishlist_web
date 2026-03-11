export type ProfileRequest = {
    username: string;
}

export type ProfileResponse = {
    id: string;
    username: string;
    email: string;
    profile_picture: string;
    banner_picture: string;
}

export async function getUserProfile(payload: ProfileRequest): Promise<ProfileResponse> {
    const res = await fetch(`http://localhost:8000/users/by-username/${payload.username}`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
        },
        cache: "no-store",
    });
    
    const data = await res.json();

    return data;
}
