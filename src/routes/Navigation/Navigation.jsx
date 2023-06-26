import React, { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import CartIcon from "../../components/CartIcon/CartIcon";
import { UserContext } from "../../contexts/userContext";
import { signOutUser } from "../../utils/Firebase/Firebase";
import "./Navigation.scss";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <h2 className="image">LUXE</h2>
        </Link>
        <div className="navbar-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {/* <Link className="nav-link" to="/shop">
            CONTACT
          </Link> */}
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>SIGN OUT</span>
          ) : (
            <Link className="nav-link" to="/sign-in">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
