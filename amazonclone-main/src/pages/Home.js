import React, { Fragment } from "react";
import Header from "../components/Headers/Header";
import AvaliableList from "../components/Home/AvaliableList";
import Footer from "../components/Home/Footer";
function Home() {
  return (
    <Fragment>
      <Header></Header>
      <AvaliableList></AvaliableList>
      <Footer></Footer>
    </Fragment>
  );
}
export default Home;
