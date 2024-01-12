import { useLoaderData, useOutletContext } from "react-router-dom";
import Feed from "../components/Feed";

export async function loader() {
    // const posts = ;

    // return { posts };
    return {posts:[]}
}

const Home = () => {
    // const { posts } = useLoaderData();

    const [posts, setPosts, searchResults] = useOutletContext();

    return (
        <main className="Home">
            {searchResults.length ? (
                <Feed searchResults={searchResults} />
            ) : (
                <p style={{ marginTop: "2rem" }}>
                    No posts to display.
                </p>
            )}
        </main>
    )
}

export default Home