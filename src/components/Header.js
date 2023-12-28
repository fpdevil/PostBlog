import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo.jpg";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../firebase/config";
import { useState } from "react";

export const Header = () => {
  // track the user authentication
  const [authenticated, setAuthenticated] = useState(
    JSON.parse(localStorage.getItem("authenticated")) || false,
  );

  function handleLogin() {
    signInWithPopup(auth, provider).then((result) => {
      console.log(result);
      setAuthenticated(true);
      localStorage.setItem("authenticated", true);
    });
  }

  function handleLogout() {
    signOut(auth);
    setAuthenticated(false);
    localStorage.setItem("authenticated", false);
  }

  return (
    <header>
      <Link to="/" className="logo">
        <img alt="PostBlog Logo" src={Logo} />
        <span>PostBlog</span>
      </Link>
      <nav className="nav">
        <NavLink to="/" className="link" end>
          Home
        </NavLink>
        {authenticated ? (
          <>
            <NavLink to="/create" className="link">
              Create
            </NavLink>
            <button onClick={handleLogout} className="auth">
              <i className="bi bi-unlock-fill"></i> Logout
            </button>
          </>
        ) : (
          <button onClick={handleLogin} className="auth">
            <i className="bi bi-google"></i> Login
          </button>
        )}
      </nav>
    </header>
  );
};
