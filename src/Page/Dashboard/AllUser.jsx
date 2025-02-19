import useAxiosSecure from "../../hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { FaUsers, FaUserShield } from "react-icons/fa";


const AllUser = () => {

  // allUsers data here
  const axiosSecure = useAxiosSecure();

  // allUsers data here
  const { data : users = [], refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await axiosSecure.get('/user/allUsers/admin')
      return res.data;
    }
  })

  // deleteUser
  const deleteUser = async (_id) => {
    const res = await axiosSecure.delete(`/user/deleteSingleUser/admin/${_id}`);
    if (res.data) {
            refetch();
            Swal.fire({
              position: "center",
              icon: "success",
              title: `${res.data.message}`,
              showConfirmButton: false,
              timer: 1000,
            });
          }
  }

  // adminUser
  const adminUser = async (user) => {
    const res = await axiosSecure.patch(`/user/makeAdmin/admin/${user._id}`,{
      role : "admin"
    })
    if (res.data) {
      refetch();
      Swal.fire({
        position: "center",
        icon: "success",
        title: `${res.data.message}`,
        showConfirmButton: false,
        timer: 1000,
      });
    }
  }

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
              <td>{user.role === "admin" ? <FaUserShield className="text-xl text-red-500"></FaUserShield> : <FaUsers onClick={() => adminUser(user)} className="text-xl text-green-500"></FaUsers>}</td>
              <td>
                <button onClick={() => deleteUser(user._id)} className="btn btn-error btn-xs text-white">Delete</button>
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