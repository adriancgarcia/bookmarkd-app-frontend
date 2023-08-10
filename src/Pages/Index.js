import {Link, useLoaderData, Form} from "react-router-dom"

function Index(props) {
    const bookmarks = useLoaderData()

    return (
        <div>
            <h2>Create a Bookmark</h2>
            <Form action="/create" method="post">
                <input type="text" name="title" placeholder="bookmark'd page" />
                <input type="text" name="url" placeholder="bookmark'd url" />
                <input type="submit" value="Create Bookmark" />
            </Form>

            {bookmarks.map((bookmark, index) => {
                return (
                    <div key={bookmark._id} className="bookmark">
                        <Link to={`/${bookmark._id}`}>
                            <h1>{bookmark.title}</h1>
                        </Link>
                        <h3>{bookmark.url}</h3>
                    </div>
                );
            })}
            </div>
        );
    };

    export default Index