import React from 'react'
import { Fragment } from 'react'
import { Link, Outlet } from 'react-router-dom'
import './Navigation.scss';


const Navigation = () => {
  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
            <h2 className='image'>LUXE</h2>
        </Link>
        <div className='navbar-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
          <Link className='nav-link' to='/shop'>
            CONTACT
          </Link>
          <Link className='nav-link' to='/sign-in'>
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  )
}



export default Navigation
