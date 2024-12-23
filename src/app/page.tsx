import AboutUs from "@/components/aboutus";
import Nav from "@/components/navbar";
import React from "react";
import Main from "@/components/page";
import Product from "@/components/product";
import Teams from "@/components/teams";
import Footer from "@/components/footer";

export default function Page() {
  return (
    <div>
      <Nav />
      <Main />
      <AboutUs />
      <Teams />
      <Product />
      <Footer />
    </div>
  );
}
