import { useStoreState } from "easy-peasy";
import { useEffect } from "react";
import { NavLink, Form, useSubmit, useNavigation } from "react-router-dom";

const Nav = () => {
  const submit = useSubmit();
  const navigation = useNavigation();
  const search = useStoreState(state => state.search);

  const searching = navigation.location &&
    new URLSearchParams(navigation.location.search).has("search");

  useEffect(() => {
    document.getElementById("search").value = search;
  }, [search]);

  return (
    <nav className="Nav">
      <Form className="searchForm" >
        <label htmlFor="search">Search Posts</label>
        <input
          id="search"
          type="search"
          placeholder="Search Posts"
          name="search"
          autoComplete="off"
          onChange={e => {
            const isFirstSearch = search === null;
            submit(e.currentTarget.form, { replace: !isFirstSearch })
          }}
          defaultValue={search}
          className={searching ? "loading" : ""}
        />
        <div
          id="search-spinner"
          aria-hidden
          hidden={!searching}
        />

      </Form>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isActive
                ? "active"
                : isPending
                  ? "pending"
                  : ""
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/post"
            state={{ pageTitle: "New Post", action: "create" }}
            className={({ isActive, isPending }) =>
              isActive
                ? "active"
                : isPending
                  ? "pending"
                  : ""
            }
          >
            Post
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive, isPending }) =>
              isActive
                ? "active"
                : isPending
                  ? "pending"
                  : ""
            }
          >
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Nav