import { Link, useNavigate } from "react-router-dom";
import useAxiosSecure from "../hook/useAxiosSecure";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAuth from './../hook/useAuth';


const Login = () => {

  // context
  const {setUser} = useAuth()

  // navigate
  const navigate = useNavigate()
  const axiosSecure = useAxiosSecure()

  // react-hook-form
  const {register,handleSubmit,reset,formState: { errors }} = useForm()

  const onSubmit = (data) => {
          // post user data in server
          axiosSecure.post('/user/login',{email : data?.email, password : data?.password})
          .then((res) => {
            if(res.data){
              // set user data in local storage
              // reset all data
              reset();
              // show success message
              Swal.fire({
                position: "center",
                icon: "success",
                title: `${res.data.message}`,
                showConfirmButton: false,
                timer: 1000
              });
              // navigate another page
              navigate('/');
            }
          })
          .catch((error) => {
            console.log(error);
          });
  }

  return (
<div className="hero bg-base-200 min-h-screen w-full">
  <div className="hero-content w-full">
    <div className="card bg-base-100 w-1/2 shadow-2xl">
      <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
        <h3 className="font-bold text-lg">Please Login!</h3>
        {/* email start */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="enter your email" className="input input-bordered" {...register("email", { required: true })}/>
        </div>
        {/* email end */}
        {/* password start */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" {...register("password", { required: true })}/>
        </div>
        {/* password end */}
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
