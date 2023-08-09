// backend url
import { baseUrl } from "./base_url";
// allows us to redirect to other routes
import { redirect } from "react-router-dom";

export const createAction = async ({request}) => {
    // grabbing the data from the form in the request
    const formData = await request.formData()
    // setting up the object for our new bookmark
    const newBookmark = {
        title: formData.get("title"),
        url: formData.get("url")
    }
    // sending the new bookmark to the backend api
    await fetch(`${baseUrl}/bookmarks`, {
        // telling fetch to make a post request
        method: 'post',
        headers: {
            // this tells the backend the data is json
            "Content-Type": "application/json"
        },
        // sending the json string of the newBookmark object
        body: JSON.stringify(newBookmark)
    })

    // redirect the user to the frontend index route
    return redirect('/')
}