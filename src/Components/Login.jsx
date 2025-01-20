import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <div className="modal-action mt-0">
            {/* login form */}
            <form className="card-body p-2">
          <h3 className="font-bold text-lg">Please Login!</h3>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" />
        </div>
        <div className="form-control mt-6">
        <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn bg-green-500 hover:bg-green-500 text-white w-full">Login</button>
            </form>
        </div>
        <p className="mx-auto">Don't have an account? <Link to="/signup" className="text-red-500">Signup</Link></p>
      </form>
            {/* login form */}
            
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Login;
