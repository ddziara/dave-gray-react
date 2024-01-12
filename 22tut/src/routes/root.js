import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigation } from "react-router-dom";

function Root() {
  const navigation = useNavigation();

  return (
    <div className="App">
      <Header title="React JS Blog" />
      <Nav />
      <div
        id="detail"
        className={
          `Outlet ${navigation.state === "loading" ? "loading" : ""}`
        }
      >
        <Outlet  />
      </div>
      <Footer />
    </div>
  );
}

export default Root;
