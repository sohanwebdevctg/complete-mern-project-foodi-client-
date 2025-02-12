import { Link } from 'react-router-dom';
import logo from '/logo.png'

const Navbar = () => {

  const navLink = (
    <>
      <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
            <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/">Services</Link>
            </li>
            <li>
              <Link to="/">Offers</Link>
            </li>
    </>
  )


  return (
    <div className="main-container">
      {/* content section start */}
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content z-[1] mt-3 w-52 p-2"
            >
              {navLink}
            </ul>
          </div>
          <a className="text-xl">
            <img src={logo} className='w-20 h-8'></img>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navLink}
          </ul>
        </div>

        
        <div className="navbar-end flex gap-2 items-center">
          {/* carts start */}
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <Link to="/carts">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="badge badge-sm indicator-item">0</span>
            </div>
            </Link>
          </div>
          {/* carts end */}
          {/* profile and login start */}
          <Link to="/dashboard/profile">
            <img
            className='w-10 h-10 rounded-full'
              alt="Tailwind CSS Navbar component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </Link>
          <Link to="/login"><button className="py-2 px-4 bg-green-500 hover:bg-green-500 text-white rounded-3xl">Login</button></Link>
          {/* profile and login end */}
        </div>
      </div>
      {/* content section end */}
    </div>
  );
};

export default Navbar;
