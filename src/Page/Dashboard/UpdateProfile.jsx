

const UpdateProfile = () => {

  

  return (
    <div className="hero bg-base-200 min-h-screen w-full">
  <div className="hero-content w-full">
    <div className="card bg-base-100 w-1/2 shadow-2xl">
      <form className="card-body">
        <h3 className="font-bold text-lg">Update Profile</h3>
        <div className="flex gap-5">
          {/* name start */}
          <div className="form-control flex-1">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="email" placeholder="email" className="input input-bordered"  />
          </div>
          {/* name end */}
          {/* email start */}
        <div className="form-control flex-1">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered"  />
        </div>
        {/* email end */}
        </div>
        <div className="flex gap-5">
          {/* password start */}
        <div className="form-control flex-1">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered"  />
        </div>
        {/* password end */}
        {/* file start */}
        <div className="form-control flex-1">
          <label className="label">
            <span className="label-text">Image</span>
          </label>
          <input type="file" className="file-input file-input-bordered w-full"/>
        </div>
        {/* file end */}
        </div>
        <div className="form-control mt-3">
          <button className="btn bg-green-500 hover:bg-green-500 text-white">Update</button>
        </div>
      </form>
    </div>
  </div>
</div>
  );
};

export default UpdateProfile;