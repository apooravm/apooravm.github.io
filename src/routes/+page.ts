// Svelte expecting a Loading func from this file
// +page.ts/js => doing API related operations like fetching/loading data for +page.svelte

// File runs both on the client and the server
export async function load({ fetch }): Promise<{ message: string }> {
    const res: Promise<Response> = fetch("https://jsonplaceholder.typicode.com/posts",);
    const data: any = (await res).json();
    return {
        "message": "hello world"
    }
}