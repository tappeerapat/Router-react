import React from "react";
import { Outlet } from "react-router";
import Header from "./Header";
import Card from "./Card";
import NavBar from "./NavBar";

export default function Layout() {
  return (
    <div>
      <Header />
      <NavBar />
      <Card>
        <Outlet />
      </Card>
    </div>
  );
}
