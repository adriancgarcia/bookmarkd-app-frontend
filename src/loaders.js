import {baseUrl} from "./base_url"

export const bookmarksLoader = async () => {
    const response = await fetch(`${baseUrl}/bookmarks`)
    const bookmarks = await response.json()
    return bookmarks
};

export const bookmarkLoader = async ({params}) => {
    const id = params.id
    const response = await fetch(`${baseUrl}/bookmarks/${id}`)
    const bookmark = await response.json()
    return bookmark
}