import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Outlet, useLoaderData } from "react-router-dom";
import api from "../api/posts";

export async function loader({ request }) {
  try {
    const url = new URL(request.url);
    const search = url.searchParams.get("search");

    const response = await api.get("/posts");        // axios catches status not in 2xx range and throws error; json() is also not necessary 

    if (response && response.data) {
      let filteredPosts;

      if (search !== null) {
        filteredPosts = response.data.filter(post => post.body.toLowerCase().includes(search.toLowerCase()) || post.title.toLowerCase().includes(search.toLowerCase()));
      }
      else {
        filteredPosts = [...response.data];
      }

      return {
        posts: filteredPosts.reverse(),
        search
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
  }

  return { posts: [] }
}

function Root() {
  const { posts, search } = useLoaderData();

  return (
    <div className="App">
      <Header title="React JS Blog" />
      <Nav search={search} />
      <Outlet context={[posts]} />
      <Footer />
    </div>
  );
}

export default Root;
