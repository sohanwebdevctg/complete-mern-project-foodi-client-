import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import { useForm } from "react-hook-form";

const Login = () => {

  // auth context data
  const {user} = useContext(AuthContext)

  // react hook data
  const {register,handleSubmit,formState: { errors }} = useForm()

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    if(user.email === email && user.password === password){
      console.log('success')
    }
    document.getElementById('my_modal_1').close();
  }

  return (
    <div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <div className="modal-action mt-0">
            {/* login form */}
            <form className="card-body p-2" onSubmit={handleSubmit(onSubmit)}>
          <h3 className="font-bold text-lg">Please Login!</h3>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" {...register("email")}/>
          {errors.email && <span>Email Must be required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" {...register("password")} />
          {errors.password && <span>Password Must be required</span>}
        </div>
        <div className="form-control mt-6">
              <button type="submit" method="dialog" className="btn bg-green-500 hover:bg-green-500 text-white w-full">Login</button>
        <form >
              {/* if there is a button in form, it will close the modal */}
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
