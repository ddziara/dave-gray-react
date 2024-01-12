import { Link, useLoaderData, Form, useOutletContext, useParams, redirect, useNavigate } from "react-router-dom";
import { loader as homeLoader } from "./home";

export async function loader({ params: { id } }) {
    // const idNum = parseInt(id);
    // const { posts } = await homeLoader();

    // return {
    //     post: posts.find(post => post.id === idNum)
    // };
    return null;
}

const PostPage = () => {
    // const { post } = useLoaderData();

    const [posts, setPosts] = useOutletContext();
    const { id } = useParams();
    const idNum = parseInt(id);
    const post = posts.find(post => post.id === idNum);
    const navigate = useNavigate();

    const handleDelete = (id) => {
        const newPosts = posts.filter(post => post.id !== id);
        setPosts(newPosts);
        navigate("/");
    };

    return (
        <main className="PostPage">
            <article className="post">
                {post &&
                    <>
                        <h2>{post.title}</h2>
                        <p className="postDate">{post.datetime}</p>
                        <p className="postBody">{post.body}</p>

                        <Form
                            method="post"
                            action="destroy"
                            onSubmit={e => {
                                // if (!window.confirm("Please confirm you want to delete this post")) {
                                //     e.preventDefault();
                                // }
                                e.preventDefault();
                                handleDelete(idNum);
                            }}
                        >
                            <button>Delete Post</button>
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