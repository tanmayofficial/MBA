import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Header(props) {
  const [searchText, setSearchText] = useState("");
  const { filterMoviesBySearch, showSearch } = props;
  const navigate = useNavigate();

  const logoutFn = () => {
    localStorage.clear();
    navigate("/login?referrer=home");
  };

  const loginFn = () => {
    navigate("/login");
  };

  const searchFn = (e) => {
    console.log(searchText);
    e.preventDefault();
    filterMoviesBySearch(searchText);
  };

  const isUserLoggedIn = localStorage.getItem("accessToken");

  return (
    <div>
      <Navbar expand="lg" bg="light" variant="light" className="p-3 shadow">
        <Container>
          <Navbar.Brand
            href="#"
            onClick={() => {
              navigate("/");
            }}
          >
            BOOK NOW
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            {showSearch && (
              <Form className="d-flex" onSubmit={searchFn}>
                <Form.Control
                  type="search"
                  placeholder="Enter a movie name"
                  className="me-2"
                  aria-label="Search"
                  value={searchText}
                  onChange={(e) => {
                    setSearchText(e.target.value);
                  }}
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            )}

            {isUserLoggedIn ? (
              <Navbar.Text className="ms-5">
                <a href="/login" onClick={logoutFn}>
                  Logout
                </a>
              </Navbar.Text>
            ) : (
              <Navbar.Text className="ms-5">
                <a href="/login" onClick={loginFn}>
                  Login
                </a>
              </Navbar.Text>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
