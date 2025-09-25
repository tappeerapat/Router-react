import React from "react";
import { NavLink } from "react-router";

export default function NavBar() {
  const styles = {
    link: "hover:font-medium hover:text-[#826047] active:font-[200]",
  };

  //   const linkStyles = ({ isActive }) =>
  //     isActive
  //       ? "text-white border-b-2 border-white"
  //       : "text-gray-400 hover:text-white";

  return (
    <nav className="mb-10">
      <ul className="flex justify-center gap-2 font-light">
        <li className={styles.link}>
          <NavLink to="/">Home</NavLink>
        </li>
        <li className={styles.link}>
          <NavLink to="/about">About</NavLink>
        </li>
        <li className={styles.link}>
          <NavLink to="/products">Products</NavLink>
        </li>
      </ul>
    </nav>
  );
}
