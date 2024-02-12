import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigation = useNavigate();
  const [user, setUser] = useState(null);
  const handleLogout = () => {
    localStorage.clear();
    navigation("/login");
  };
  useEffect(() => {
    const u = localStorage.getItem("user");
    setUser(u);
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            TODO LIST
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor02"
            aria-controls="navbarColor02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Home
                  <span className="visually-hidden">(current)</span>
                </Link>
              </li>

              {user ? (
                <li className="nav-item">
                  <Link
                    to="/login"
                    className="nav-link"
                    onClick={handleLogout}
                    style={{ curser: "pointer" }}
                  >
                    Logout
                  </Link>
                </li>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/register">
                      Register
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
