import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

const Header = () => {
  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand style={{ fontWeight: "bold", textAlign: "center", width: "100%" }}>
        AI Caption Generator
      </NavbarBrand>
    </Navbar>
  );
};

export default Header;
