import React from "react";
import { Home, Sales, Featured, Stories, Footer, Navbar, Cart } from "./components";
import {
  heroapi,
  popularsales,
  topratesales,
  highlight,
  sneaker,
  story,
  footerAPI
} from "./data/data";
const App = () => {
  return (
    <>
    <Navbar />
    <Cart />
      <main className="flex flex-col gap-16 relative">
        <Home heroapi={heroapi} />
        <Sales feature={popularsales} ifSalesExist />
        <Featured content={highlight} isFeaturedContentExist />
        <Sales feature={topratesales} />
        <Featured content={sneaker} />
        <Stories story={story}/>
      </main>
      <Footer footerAPI={footerAPI}/>
    </>
  );
};

export default App;
