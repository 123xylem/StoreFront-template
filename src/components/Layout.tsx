import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ProductSection from "./product/ProductSection";
import Content from "./Content";
const Layout = () => {
  return (
    <>
      <Header />
      <Content children={<ProductSection filter={true} />} />
      <Footer />
    </>
  );
};

export default Layout;
