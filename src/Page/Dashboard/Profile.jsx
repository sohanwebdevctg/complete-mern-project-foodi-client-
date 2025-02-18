import { Link } from "react-router-dom";
import useAuth from './../../hook/useAuth';


const Profile = () => {

  // user data
  const {user} = useAuth()

  return (
    <div className="hero bg-base-200 min-h-screen w-full">
  <div className="hero-content w-full">
  <div className="card card-side bg-base-100 w-1/2 shadow-xl flex">
  <figure className="flex-1">
    <img
      className="h-full w-full"
      src={user?.image}
      alt={user?.name} />
  </figure>
  <div className="card-body flex flex-col justify-between flex-1 bg-slate-200">
    <h2 className="card-title">Role : {user?.role}</h2>
    <ul>
      <li><strong>Name : </strong> {user?.name} </li>
      <li><strong>Email : </strong> {user?.email} </li>
      <li><strong>Password : </strong> {user?.email}</li>
    </ul>
    <div className="card-actions justify-end">
      <Link to="/dashboard/updateProfile"><button className="btn btn-success text-white">Update Profile</button></Link>
    </div>
  </div>
</div>
  </div>
</div>
  );
};

export default Profile;