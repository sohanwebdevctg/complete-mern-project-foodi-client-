import { Link } from "react-router-dom";


const Login = () => {

  return (
<div className="hero bg-base-200 min-h-screen w-full">
  <div className="hero-content w-full">
    <div className="card bg-base-100 w-1/2 shadow-2xl">
      <form className="card-body" >
        <h3 className="font-bold text-lg">Please Login!</h3>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="enter your email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" />
        </div>
        <div className="form-control mt-3">
          <button className="btn bg-green-500 hover:bg-green-500 text-white">LogIn</button>
        </div>
        <p className="mx-auto">Create an account? <Link to="/signup" className="text-red-500">SignUp</Link></p>
      </form>
    </div>
  </div>
</div>
  );
};

export default Login;
