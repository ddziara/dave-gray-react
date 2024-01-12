import { Link, useLoaderData, Form } from "react-router-dom";
import api from "../api/posts";

export async function loader({ params: { id } }) {
    const response = await api.get(`/posts/${id}`)

    return { post: response.data };
}

const PostPage = () => {
    const { post } = useLoaderData();

    return (
        <main className="PostPage">
            <article className="post">
                {post &&
                    <>
                        <h2>{post.title}</h2>
                        <p className="postDate">{post.datetime}</p>
                        <p className="postBody">{post.body}</p>

                        <Link to={`edit`} state={{ pageTitle: "Update Post", post, action: "update" }}>
                            <button className="editButton">Edit Post</button>
                        </Link>
                        <Form
                            method="post"
                            action="destroy"
                        >
                            <button className="deleteButton">Delete Post</button>
                        </Form>
                    </>
                }
                {
                    !post &&
                    <>
                        <h2>Post Not Found</h2>
                        <p>Well, that's disappointing.</p>
                        <p>
                            <Link to="/" >Visit Our Home Page</Link>
                        </p>
                    </>
                }
            </article>
        </main>
    )
}

export default PostPage