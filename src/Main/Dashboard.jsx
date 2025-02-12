import { Link, Outlet } from "react-router-dom";



const Dashboard = () => {
  return (
    <div className="drawer drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content w-full">
    {/* Page content here */}
    <Outlet></Outlet>
    {/* Page content here */}
  </div>
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu bg-slate-200 text-base-content min-h-full w-56 p-4">
      {/* Sidebar content here */}
      <li><Link to="/dashboard/profile">Profile</Link></li>
      <li><Link to="/dashboard/updateProfile">UpdateProfile</Link></li>
      <li><Link to="/dashboard">AddMenu</Link></li>
      <li><Link to="/dashboard">AllMenu</Link></li>
      <li><Link to="/dashboard">UpdateMenu</Link></li>
      <li><Link to="/dashboard/allUser">AllUser</Link></li>
      <li><Link to="/carts">Carts</Link></li>
      <li><div className="divider w-full"></div></li>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/menu">Menu</Link></li>
      <li><Link to="/">Services</Link></li>
      <li><Link to="/">Offers</Link></li>
    </ul>
  </div>
</div>
  );
};

export default Dashboard;