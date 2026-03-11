export type LoginRequest = {
    username: string;
    password: string;
}

export type LoginResponse = {
    message?: string;
}

export async function loginUser(payload: LoginRequest): Promise<LoginResponse> {
    const res = await fetch("/api/auth/login", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    });
    
    const data = await res.json();

    if (!res.ok) {
        throw new Error(data.message ?? "Login failed");
    }

    return data;
}
