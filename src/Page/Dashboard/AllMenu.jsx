import { Link } from "react-router-dom";


const AllMenu = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center flex flex-col w-full">
        <div className="w-full">
          <h1 className="text-5xl font-bold">
            Foodi All <span className="text-green-500">Menu</span>
          </h1>
        </div>
        {/* table start */}
        <div className="w-full">
          <table className="table w-full">
            {/* head */}
            <thead className="bg-green-500 text-white">
              <tr>
                <th>#</th>
                <th>Image/Name</th>
                <th>recipe</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
                <tr>
                <td>1</td>
                <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Hart Hagerty</div>
              <div className="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
                <td>this is the recipe</td>
                <td>$903</td>
                <td>
                  <Link to="/dashboard/updateMenu"><button className="btn btn-success btn-xs text-white mr-1">Update</button></Link>
                  <button className="btn btn-error btn-xs text-white">Delete</button>
                </td>
              </tr>
              

            </tbody>
          </table>
        </div>
        {/* table end */}
      </div>
    </div>
  );
};

export default AllMenu;