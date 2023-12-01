import { Navbar, Button } from "flowbite-react";
import { useState } from "react";
import './Navbar.css'

export function ContactNavbar({ view, setView }) {
  return (
    <>
      <Navbar fluid rounded>
        <Navbar.Brand>
          <img
            alt="svgImg"
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCI+CjxwYXRoIGZpbGw9IiNGRjcwNDMiIGQ9Ik0zOCw0NEgxMlY0aDI2YzIuMiwwLDQsMS44LDQsNHYzMkM0Miw0Mi4yLDQwLjIsNDQsMzgsNDR6Ij48L3BhdGg+PHBhdGggZmlsbD0iI0JGMzYwQyIgZD0iTTEwLDRoMnY0MGgtMmMtMi4yLDAtNC0xLjgtNC00VjhDNiw1LjgsNy44LDQsMTAsNHoiPjwvcGF0aD48cGF0aCBmaWxsPSIjQUIzMDBCIiBkPSJNMjYgMTZBNCA0IDAgMSAwIDI2IDI0IDQgNCAwIDEgMCAyNiAxNnpNMzMgMzBjMCAwLTEuOS00LTctNC01LjEgMC03IDQtNyA0djJoMTRWMzB6Ij48L3BhdGg+Cjwvc3ZnPg=="
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Contacts
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Button
            id="viewButton"
            onClick={() =>
              view === "List View" ? setView("Grid View") : setView("List View")
            }
          >
            Change to {view}
          </Button>
          <Navbar.Toggle />
        </div>
      </Navbar>
    </>
  );
}
