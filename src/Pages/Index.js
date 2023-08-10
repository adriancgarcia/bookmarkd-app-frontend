import {Link, useLoaderData, Form} from "react-router-dom"

function Index(props) {
    const bookmarks = useLoaderData()

    return (
        <div className="bookmarksContainer">
            <h2 className="index">Create a Bookmark</h2>
            <Form action="/create" method="post" className="createForm">
                <input type="text" name="title" placeholder="bookmark'd page" />
                <input type="text" name="url" placeholder="bookmark'd url" />
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