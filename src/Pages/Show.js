import { useLoaderData, Form } from "react-router-dom";

function Show (props) {
    const bookmark = useLoaderData();
    console.log(bookmark);

    return (
        <div className="bookmark">
            <h1>{bookmark.title}</h1>
            <h2>{bookmark.url}</h2>

            <h2>Update</h2>
            <Form action={`/update/${bookmark._id}`} method="post">
                <input type="text" name="title" placeholder="bookmark'd page" defaultValue={bookmark.title} />
                <input type="text" name="url" placeholder="bookmark'd url" defaultValue={bookmark.url} />
                <input type="submit" value="Update Bookmark" />
            </Form>

            <h2>Updated Bookmark</h2>
            <Form action={`/delete/${bookmark._id}`} method="post">
                <input type="submit" value="Delete Bookmark"/>
            </Form>
        </div>
    );
}

export default Show