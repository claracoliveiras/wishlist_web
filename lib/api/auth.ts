export type LoginRequest = {
    username: string;
    password: string;
}

export type SignUpRequest = {
    username: string;
    email: string;
    password: string;
    profile_picture: string;
    banner_picture: string;
}

export type LoginResponse = {
    message?: string;
}

export type SignUpResponse = {
    id?: string;
    username?: string;
    email?: string;
    profile_picture?: string;
    banner_picture?: string;
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

export async function signUpUser(payload: SignUpRequest): Promise<SignUpResponse> {
    const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (!res.ok) {
        throw new Error(data.message ?? "Sign up failed");
    }

    return data;
}
