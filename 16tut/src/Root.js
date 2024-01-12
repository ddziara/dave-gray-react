import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Footer />
      <Outlet />
    </div>
  );
}

export default Root;
