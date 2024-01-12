import Post from "./Post"
import { useStoreState } from "easy-peasy";

const Feed = () => {
    const posts = useStoreState(state => state.posts);

    return (
        <>
            {posts.length ? (
                posts.map(post => (<Post key={post.id} post={post} />))
            ) : (
                <p style={{ marginTop: "2rem" }}>
                    No posts to display.
                </p>
            )}
        </>
    )
}

export default Feed