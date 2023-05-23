import { Button, Navbar } from "flowbite-react";
import React from "react";
import EscudoAfa from "./EscudoAfa";
import LogoutButton from "../LogoutButton";

const UserNavbar = () => {
  return (
    <Navbar fluid={true} rounded={true} class="bg-gray-700 p-2">
      <Navbar.Brand class="gap-2 flex flex-row items-center">
        <EscudoAfa width={8} />
        <span className="self-center whitespace-nowrap text-xl font-semibold text-white">
          Cancheros
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link
          class="text-white border flex p-2 rounded-md"
          href="/mainscreen"
          active={true}>
          Mis partidos
        </Navbar.Link>
        <Navbar.Link
          href="/about"
          class="text-white border flex p-2 rounded-md">
          {" "}
          About
        </Navbar.Link>
        <Navbar.Link
          href="/contact"
          class="text-white border flex p-2 rounded-md">
          Contact
        </Navbar.Link>
        <LogoutButton />
      </Navbar.Collapse>
    </Navbar>
  );
};

export default UserNavbar;
