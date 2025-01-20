import { Link } from 'react-router-dom';
import logo from '/logo.png'
import Login from './Login';

const Navbar = () => {

  const navLink = (
    <>
      <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <details>
                <summary>Menu</summary>
                <ul className="p-2">
                  <li>
                    <Link to="/menu">All</Link>
                  </li>
                  <li>
                    <a>Salads</a>
                  </li>
                  <li>
                    <a>Pizza</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Services</a>
            </li>
            <li>
              <a>Offers</a>
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
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
        <button className="btn btn-ghost btn-circle">
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
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </button>
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
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
            <span className="badge badge-sm indicator-item">8</span>
          </div>
          </div>
          <button onClick={()=>document.getElementById('my_modal_1').showModal()} className="py-2 px-4 bg-green-500 hover:bg-green-500 text-white rounded-3xl">Login</button>
          <Login></Login>
        </div>
      </div>
      {/* content section end */}
    </div>
  );
};

export default Navbar;
