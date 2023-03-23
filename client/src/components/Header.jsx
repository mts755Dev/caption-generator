import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import logo from "../assets/caption.png";
const Header = () => {
  return (
    <Navbar color="light" light expand="md">

      <NavbarBrand style={{ fontWeight: "bold", textAlign: "center", width: "100%" }}>
      <img src={logo} alt="Logo" style={{ height: "30px", marginRight: "10px" }} />
        AI Caption Generator
      </NavbarBrand>
    </Navbar>
  );
};

export default Header;
