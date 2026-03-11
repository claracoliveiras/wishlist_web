const backendUrl = process.env.BACKEND_URL;

if (!backendUrl) {
  throw new Error("Missing BACKEND_URL environment variable");
}

export function getBackendUrl(path: string): string {
  return new URL(path, backendUrl).toString();
}
