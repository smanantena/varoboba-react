import React from "react";
import { FaUser } from "react-icons/fa"
import { Link } from "react-router-dom"
import CartButton from '../buttons/CartButton';


const Header = ({cart}) => {
  return (
    <header>
      <div className="container">
        <nav className="navbar navbar-light py-3">
          <Link className="navbar-brand" style={{ fontWeight: "700" }} to="/">
            Varoboba
          </Link>
          <div className="d-flex gap-2">
            <Link
              className="btn btn-dark mr-4 d-flex align-items-center gap-1"
              to="/sign-up">
              <FaUser /> Sign up
            </Link>
            <Link className="btn btn-light" to="/sign-in">
              Sign in
            </Link>
            <Link to="/cart"><CartButton cart={cart} /> </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header