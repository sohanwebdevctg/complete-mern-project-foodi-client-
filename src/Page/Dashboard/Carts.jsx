


const Carts = () => {


  // quantityIncrement
  const quantityInc = (data) => {
    console.log(data)
  }

  // quantityDecrement
  const quantityDec = (data) => {
    console.log(data)
  }


  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center flex flex-col w-full">
        <div className="w-full">
          <h1 className="text-5xl font-bold">
            Items Added to The <span className="text-green-500">Food</span>
          </h1>
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
                <td>lkd</td>
                <td>
                <button onClick={() => {quantityInc(1)}} className="btn btn-error btn-xs text-white">+</button>
                  <span>2</span>
                  <button onClick={() => {quantityDec(1)}} className="btn btn-error btn-xs text-white">-</button>
                </td>
                <td><span>39</span></td>
                <th>
                  <button className="btn btn-error btn-xs text-white">Delete</button>
                </th>
              </tr>
              

            </tbody>
          </table>
        </div>
        {/* table end */}
        {/* other start */}
        <div className="flex items-center w-full">
          <ul className="w-1/2 text-left">
            <li><h1 className="text-xl font-bold">Customer Details</h1></li>
            <li>Name : </li>
            <li>Email : </li>
            <li>UserId : 94ij</li>
          </ul>
          <ul className="w-1/2 text-left">
            <li><h1 className="text-xl font-bold">Shopping Details</h1></li>
            <li>Total Items : </li>
            <li>Total Price : $</li>
            <li><button className="btn btn-success text-white">Procceed to Checkout</button></li>
          </ul>
        </div>
        {/* other end */}
      </div>
    </div>
  );
};

export default Carts;
