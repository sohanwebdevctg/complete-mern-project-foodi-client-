import axios from 'axios';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


const Signup = () => {

  // navigate
  const navigate = useNavigate()

  // react-hook-form
  const { register,reset, handleSubmit, formState: { errors }} = useForm()

  // submit data
  const onSubmit = (data) => {
    const name = data.name;
    const email = data.email;
    const password = data.password;

    // image setting
    const image = data.image[0];
    const formData = new FormData();
    formData.append('image', image);
    const imageLink = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_LINK}`
    fetch(imageLink, {
      method : 'POST',
      body : formData
    })
    .then((res) => res.json())
    .then((data) => {
      // get image link from imageBB
      const imageUrl = data.data.display_url;
      
      // post user data in server
      axios.post('http://localhost:3000/api/v1/user/register',{
        name : name,
        email : email,
        password : password,
        image : imageUrl
      })
      .then((res) => {
        if(res.data){
          // reset all data
          reset();
          // show success message
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${res.data.message}`,
            showConfirmButton: false,
            timer: 1500
          });
          // navigate another page
          navigate('/login');
        }
      })
      .catch((error) => {
        console.log(error);
      });

    })
  }

  return (
<div className="hero bg-base-200 min-h-screen w-full">
  <div className="hero-content w-full">
    <div className="card bg-base-100 w-1/2 shadow-2xl">
      <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
        <h3 className="font-bold text-lg">Please Create An Account!</h3>
        <div className='flex gap-5'>
                  {/* name start */}
        <div className="form-control flex-1">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="enter your name" className="input input-bordered" {...register("name", { required: true })} />
        </div>
        {/* name end */}
        {/* email start */}
        <div className="form-control flex-1">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="enter your email" className="input input-bordered"  {...register("email", { required: true })}/>
        </div>
        {/* email end */}
        </div>
        <div className='flex gap-5'>
                  {/* password start */}
        <div className="form-control flex-1">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" {...register("password", { required: true })}/>
        </div>
        {/* password end */}
        {/* image start */}
        <div className="form-control flex-1">
          <label className="label">
            <span className="label-text">Image</span>
          </label>
            <input type="file" className="file-input file-input-bordered file-input-md w-full" {...register("image", { required: true })}/>
        </div>
        {/* image end */}
        </div>
        <div className="form-control mt-3">
          <button className="btn bg-green-500 hover:bg-green-500 text-white">Signup</button>
        </div>
        <p className="mx-auto">Have an account? <Link to="/login" className="text-red-500">Login</Link></p>
      </form>
    </div>
  </div>
</div>
  );
};

export default Signup;