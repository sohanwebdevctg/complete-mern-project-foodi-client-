import { Link, useNavigate } from "react-router-dom";
import { logout } from "../localstorage/localstorage";


const DrawerLink = () => {

  const navigate = useNavigate();

  // logout function
  const logOutBtn = () => {
    logout();
    window.reload()
    navigate('/');
  }

  return (
    <div className="drawer z-50 flex justify-end w-16 bg-white hover:bg-white">
  <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer-4" className="drawer-button"><div className="avatar online placeholder">
  <div className="bg-neutral text-neutral-content w-10 rounded-full">
    <span className="text-xl">AI</span>
  </div>
</div></label>
  </div>
  <div className="drawer-side">
    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
      {/* Sidebar content here */}
      <li><Link to="/profile">Profile</Link></li>
      <li><Link to="/">Order</Link></li>
      <li><Link to="/">Settings</Link></li>
      <li><button onClick={logOutBtn}>LogOut</button></li>
    </ul>
  </div>
</div>
  );
};

export default DrawerLink;