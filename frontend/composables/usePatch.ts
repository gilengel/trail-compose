/**
 * Wrapper for a PATCH request.
 * @param url - The backend api endpoint.
 * @param body - The content you want to change. Must be valid for the given endpoint.
 */
export async function usePatch(url: string, body: Record<string, any>) {
    return await $fetch(url, {
        method: "PATCH",
        body,
    })
}

