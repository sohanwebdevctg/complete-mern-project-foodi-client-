import { Link } from "react-router-dom";


const AllUser = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center flex flex-col w-full">
        <div className="w-full">
          <h1 className="text-5xl font-bold">
            Foodi All <span className="text-green-500">Users</span>
          </h1>
        </div>
        {/* table start */}
        <div className="w-full">
          <table className="table w-full">
            {/* head */}
            <thead className="bg-green-500 text-white">
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
                <tr>
                <td>1</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src=""
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>person1</td>
                <td>person1@gmail.com</td>
                <td>admin</td>
                <td>
                  <Link to="/dashboard/updateProfile"><button className="btn btn-success btn-xs text-white mr-1">Update</button></Link>
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

export default AllUser;