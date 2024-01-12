import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { useNavigation } from "react-router-dom";

function Root() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const navigation = useNavigation();

  return (
    <div className="App">
      <Header title="React JS Blog" />
      <Nav search={search} />
      <div
        id="detail"
        className={
          `Outlet ${navigation.state === "loading" ? "loading" : ""}`
        }
      >
        <Outlet context={[posts, setPosts, setSearch ]} />
      </div>
      <Footer />
    </div>
  );
}

export default Root;
