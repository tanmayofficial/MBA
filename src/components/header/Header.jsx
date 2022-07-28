import React from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  const navigate = useNavigate();

  const logoutFn = () => {
    localStorage.clear();
    navigate('/login?referrer=home');
  };

  const loginFn = () => {
    navigate("/login");
  };
  const isUserLoggedIn = localStorage.getItem("accessToken");

  return (
    <div>
      <Navbar expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">BOOK NOW</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            {isUserLoggedIn ? (
              <Navbar.Text>
                <a href="/login" onClick={logoutFn}>
                  Logout
                </a>
              </Navbar.Text>
            ) : (
              <Navbar.Text>
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
