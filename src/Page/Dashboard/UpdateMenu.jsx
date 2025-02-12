

const UpdateMenu = () => {
  return (
    <div className="hero bg-base-200 min-h-screen w-full">
      <div className="hero-content w-full">
        <div className="card bg-base-100 w-1/2 shadow-2xl">
          <form className="card-body">
            <h3 className="font-bold text-lg">Update Menu</h3>
            <div className="flex gap-5">
              {/* name start */}
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="name" className="input input-bordered"/>
              </div>
              {/* name end */}
              {/* price start */}
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input type="number" placeholder="price" className="input input-bordered"  />
              </div>
              {/* price end */}
            </div>
            <div className="flex gap-5">
              {/* category start */}
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <select className="select select-bordered w-full max-w-xs">
              <option disabled selected>Normal</option>
              <option>Normal Apple</option>
              <option>Normal Orange</option>
              <option>Normal Tomato</option>
            </select>
            </div>
            {/* category end */}
            {/* file start */}
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <input type="file" className="file-input file-input-bordered w-full"/>
            </div>
            {/* file end */}
            </div>
            {/* recipe start */}
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Recipe</span>
              </label>
              <textarea placeholder="recipe" className="textarea textarea-bordered textarea-md w-full"></textarea>
            </div>
            {/* recipe end */}
            <div className="form-control mt-3">
              <button className="btn bg-green-500 hover:bg-green-500 text-white">Update Menu</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateMenu;