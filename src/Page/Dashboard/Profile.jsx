import { Link } from "react-router-dom";


const Profile = () => {
  return (
    <div className="hero bg-base-200 min-h-screen w-full">
  <div className="hero-content w-full">
  <div className="card card-side bg-base-100 w-1/2 shadow-xl">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
      alt="Movie" />
  </figure>
  <div className="card-body flex flex-col justify-between">
    <h2 className="card-title">Role : User</h2>
    <ul>
      <li><strong>Name : </strong> Sohan </li>
      <li><strong>Email : </strong> sohan@gmail.com </li>
      <li><strong>Password : </strong> sohan8920</li>
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