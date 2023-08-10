import {baseUrl} from "./base_url"

export const bookmarkloader = async () => {
    const response = await fetch(`${baseUrl}/bookmarks`)
    const bookmarks = await response .json()
    return bookmarks
};

export const bookmarksloader = async ({params}) => {
    const id = params.id
    const response = await fetch(`${baseUrl}/bookmarks${id}`)
    const bookmarks = await response.json()
    return bookmarks
}