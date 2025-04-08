import React from "react";
import { Footer } from "react-day-picker";
import Header1 from "./Header/Header1";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header1 />
      <main className="flex-1 p-4">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
