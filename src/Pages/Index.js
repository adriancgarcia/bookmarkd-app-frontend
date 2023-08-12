import {Link, useLoaderData, Form} from "react-router-dom"
import { useState } from "react"

function Index(props) {
    const bookmarks = useLoaderData()
    const [formData, setFormData] = useState({
        title: "",
        url: ""
    })

    const handleChange = (event) => {
        const newState = {...formData}
        newState[event.target.name] = event.target.value
        setFormData(newState)
    }

    const handleSubmit = (event => {
        setFormData({
            title: "",
            url: ""
        })
    })

    return (
        <div className="bookmarksContainer">
            <h2 className="index">Create a Bookmark</h2>
            <Form action="/create" method="post" onSubmit={handleSubmit} className="createForm">
                <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="website" />
                <input type="text" name="url" value={formData.url} onChange={handleChange} placeholder="url" />
                <input type="submit" value="Create Bookmark" />
            </Form>

            {bookmarks.map((bookmark, index) => {
                return (
                    <div key={bookmark._id} className="bookmarks">
                        <Link to={`/${bookmark._id}`}>
                            <h1>{bookmark.title}</h1>
                        </Link>
                    </div>
                );
            })}
            </div>
        );
    };

    export default Index;