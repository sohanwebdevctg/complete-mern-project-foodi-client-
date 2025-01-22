

const Carts = () => {
  return (
<div className="hero bg-base-200 min-h-screen">
  <div className="hero-content text-center flex flex-col w-full">
    <div className="w-full">
      <h1 className="text-5xl font-bold">Items Added to The <span className="text-green-500">Food</span></h1>
    </div>
    {/* table start */}
    <div className="w-full">
  <table className="table w-full">
    {/* head */}
    <thead className="bg-green-500 text-white">
      <tr>
        <th>#</th>
        <th>Food</th>
        <th>Item Name</th>
        <th>Quantity</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <td>1</td>
        <td>
        <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
        </td>
        <td>Zemlak, Daniel and Leannon</td>
        <td>Purple</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
        <th>
          <button className="btn btn-error btn-xs text-white">Delete</button>
        </th>
      </tr>
    </tbody>
  </table>
</div>
    {/* table end */}
  </div>
</div>
  );
};

export default Carts;