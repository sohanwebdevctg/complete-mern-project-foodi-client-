
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { setUser } from '../localstorage/localstorage';

const Signup = () => {

  const navigate = useNavigate();

  // react hook form data
  const {register,handleSubmit,formState:{ errors }} = useForm();

  const onSubmit = (data) => {
    setUser(data)
    navigate('/')
  }

  return (
<div className="hero bg-base-200 min-h-screen w-full">
  <div className="hero-content w-full">
    <div className="card bg-base-100 w-1/2 shadow-2xl">
      <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
        <h3 className="font-bold text-lg">Please Create An Account!</h3>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="enter your name" className="input input-bordered" {...register("name")} />
          {errors.name && <span>Name Must be required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="enter your email" className="input input-bordered" {...register("email")} />
          {errors.email && <span>Email Must be required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" {...register("password")} />
          {errors.password && <span>Password Must be required</span>}
        </div>
        <div className="form-control mt-3">
          <button className="btn bg-green-500 hover:bg-green-500 text-white">Signup</button>
        </div>
        <p className="mx-auto">Have an account? <Link to="/" className="text-red-500">Login</Link></p>
      </form>
    </div>
  </div>
</div>
  );
};

export default Signup;