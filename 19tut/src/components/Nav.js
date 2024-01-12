import { useEffect } from "react";
import { Link, Form, useSubmit, useNavigation } from "react-router-dom";

const Nav = ({ search }) => {
  const submit = useSubmit();
  const navigation = useNavigation();

  const searching = navigation.location &&
    new URLSearchParams(navigation.location.search).has("search");

  console.log("searching: ", searching)

  useEffect(() => {
    document.getElementById("search").value = search;
  }, [search]);

  return (
    <nav className="Nav">
      <Form className="searchForm" >
        <label htmlFor="search">Search Posts</label>
        <input
          id="search"
          type="text"
          placeholder="Search Posts"
          name="search"
          onChange={e => {
            const isFirstSearch = search === null;
            submit(e.currentTarget.form, { replace: !isFirstSearch })
          }}
          defaultValue={search}
        />
        <div
          id="search-spinner"
          aria-hidden
          hidden={!searching}
        />

      </Form>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/post" state={{ pageTitle: "New Post", action: "create" }}>Post</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  )
}

export default Nav