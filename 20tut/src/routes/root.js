import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import useWindowSize from "../hooks/useWindowSize";
import { useState } from "react";
import { useNavigation } from "react-router-dom";

function Root() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const { width } = useWindowSize();
  const navigation = useNavigation();

  return (
    <div className="App">
      <Header title="React JS Blog" width={width} />
      <Nav search={search} />
      <div
        id="detail"
        className={
          `Outlet ${navigation.state === "loading" ? "loading" : ""}`
        }
      >
        <Outlet context={[posts, setPosts, setSearch]} />
      </div>
      <Footer />
    </div>
  );
}

export default Root;
