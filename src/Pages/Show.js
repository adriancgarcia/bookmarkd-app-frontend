import { useLoaderData, Form } from "react-router-dom";

function Show (props) {
    const bookmark = useLoaderData();
    console.log(bookmark);

    return (
        <div className="bookmark">
            
            <h2>Update</h2>
            <Form action={`/update/${bookmark._id}`} method="post">
                <input type="text" name="title" placeholder="website" defaultValue={bookmark.title} />
                <input type="text" name="url" placeholder="url" defaultValue={bookmark.url} />
                <input type="submit" value="Update Bookmark" />
            </Form>

            <h1>{bookmark.title}</h1>
           <a href={bookmark.url} target="_blank" rel="noopener noreferrer">{bookmark.url}</a>
            
            {/* <h2>Delete Bookmark</h2> */}

            <Form action={`/delete/${bookmark._id}`} method="post">
                <input type="submit" value="Delete Bookmark"/>
            </Form>
        </div>
    );
}

export default Show