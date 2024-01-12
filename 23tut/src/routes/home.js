import { useLoaderData } from "react-router-dom";
import Feed from "../components/Feed";
import api from "../api/posts";
import { useEffect } from "react";
import { useStoreActions } from "easy-peasy";

export async function loader({ request }) {
    try {
        const url = new URL(request.url);
        const search = url.searchParams.get("search");

        const response = await api.get("/posts", { signal: request.signal });        // axios catches status not in 2xx range and throws error; json() is also not necessary 

        // delay for test
        // await new Promise((resolve, reject) => {
        //     setTimeout(resolve, 2000);
        // });

        if (response && response.data) {
            let filteredPosts;

            if (search !== null) {
                filteredPosts = response.data.filter(post => post.body.toLowerCase().includes(search.toLowerCase()) || post.title.toLowerCase().includes(search.toLowerCase()));
            }
            else {
                filteredPosts = [...response.data];
            }

            return {
                loadedPosts: filteredPosts.reverse(),
                loadedSearch: search
            };
        }
    }
    catch (err) {
        if (err.response) {
            // Not in the 200 response range
            console.log(err.response.data);
            console.log(err.response.status);
            console.log(err.response.headers);
        }
        else {
            console.log(`Error: ${err.message}`);
        }

        throw err;
    }

    return { loadedPosts: [] }
}

const Home = () => {
    const { loadedPosts, loadedSearch } = useLoaderData();
    const setPosts = useStoreActions(actions => actions.setPosts);
    const setSearch = useStoreActions(actions => actions.setSearch);

    useEffect(() => {
        setPosts(loadedPosts);
    }, [loadedPosts]);

    useEffect(() => {
        setSearch(loadedSearch);
    }, [loadedSearch]);

    return (
        <main className="Home">
            <Feed />
        </main>
    )
}

export default Home