import { Link } from "react-router-dom";
import useAxiosSecure from "../../hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const AllUser = () => {

  // allUsers data here
  const axiosSecure = useAxiosSecure();

  // allUsers data here
  const { data : users = [], refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await axiosSecure.get('/user/allUsers')
      return res.data;
    },
  })

  console.log(users)

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
            {/* users data start */}
            {
              users.map((user,index) => <tbody key={index}>
              <tr>
              <td>{++index}</td>
              <td>
                <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12">
                    <img
                      src={user.image}
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
              </td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <Link to="/dashboard/updateProfile"><button className="btn btn-success btn-xs text-white mr-1">Update</button></Link>
                <button className="btn btn-error btn-xs text-white">Delete</button>
              </td>
            </tr>
            

          </tbody>)
            }
            {/* users data end */}
          </table>
        </div>
        {/* table end */}
      </div>
    </div>
  );
};

export default AllUser;