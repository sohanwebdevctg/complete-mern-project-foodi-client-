import { Link, Outlet } from "react-router-dom";
import useAuth from "../hook/useAuth";



const Dashboard = () => {

  // context
  const {user,logoutBtn} = useAuth();



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
      {/* back-end start */}
      <li><Link to="/dashboard/profile">Profile</Link></li>
      <li><Link to="/dashboard/updateProfile">UpdateProfile</Link></li>
      <li><Link to="/dashboard/addMenu">AddMenu</Link></li>
      <li><Link to="/dashboard/allMenu">AllMenu</Link></li>
      <li><Link to="/dashboard/updateMenu">UpdateMenu</Link></li>
      <li><Link to="/dashboard/allUser">AllUser</Link></li>
      <li><Link to="/carts">Carts</Link></li>
      {/* back-end end */}
      <li><div className="divider w-full"></div></li>
      {/* front-end start */}
      <li><Link to="/">Home</Link></li>
      <li><Link to="/menu">Menu</Link></li>
      <li><Link to="/">Services</Link></li>
      <li><Link to="/">Offers</Link></li>
      {/* front-end end */}
      {/* logoutBtn start */}
      <li><button onClick={logoutBtn} className="py-2 px-4 bg-green-500 hover:bg-green-500 text-white rounded-3xl">LogOut</button></li>
      {/* logoutBtn end */}
    </ul>
  </div>
</div>
  );
};

export default Dashboard;