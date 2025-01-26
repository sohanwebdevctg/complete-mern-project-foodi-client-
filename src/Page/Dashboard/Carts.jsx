import { useContext } from "react";
import { AuthContext } from './../../Context/AuthProvider';
import useCarts from "../../hooks/useCarts";


const Carts = () => {

  const {user} = useContext(AuthContext);

  const [carts,refetch] = useCarts();
  const sumWithInitial = carts.reduce(
    (accumulator, currentValue) => accumulator + currentValue.price,
    0,
  );

  const deleteBtn = (id) => {
    fetch(`http://localhost:3000/card/${id}`,{
      method: 'DELETE'
    })
    .then((res) => res.json())
    .then((data) =>{
      console.log(data)
      refetch()
    })
  }

  const incrementBtn = (item) => {
    const data = item.quantity + 1;
    fetch(`http://localhost:3000/card/${item._id}`,{
      method: 'PATCH',
      headers : {
        'content-type' : 'application/json'
      },
      body : JSON.stringify({quantity : data})
    })
    .then((res) => res.json())
    .then((data) =>{
      console.log(data)
      refetch()
    })
  }

  const decrementBtn = (item) => {
    let data;
    if(item.quantity === 1){
      alert('sorry')
    }else{
      data = item.quantity - 1
    }
    fetch(`http://localhost:3000/card/${item._id}`,{
      method: 'PATCH',
      headers : {
        'content-type' : 'application/json'
      },
      body : JSON.stringify({quantity : data})
    })
    .then((res) => res.json())
    .then((data) =>{
      console.log(data)
      refetch()
    })
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
              {
                carts.map((item, index) =><tr key={item._id}>
                <td>{++index}</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={item?.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>{item?.recipe.slice(0,25)}</td>
                <td>
                <button onClick={() => incrementBtn(item)} className="btn btn-error btn-xs text-white">+</button>
                  <span>{item?.quantity}</span>
                  <button onClick={() => decrementBtn(item)} className="btn btn-error btn-xs text-white">-</button>
                </td>
                <td><span>{item?.price}</span></td>
                <th>
                  <button onClick={() => deleteBtn(item._id)} className="btn btn-error btn-xs text-white">Delete</button>
                </th>
              </tr>)
              }

            </tbody>
          </table>
        </div>
        {/* table end */}
        {/* other start */}
        <div className="flex items-center w-full">
          <ul className="w-1/2 text-left">
            <li><h1 className="text-xl font-bold">Customer Details</h1></li>
            <li>Name : {user?.name}</li>
            <li>Email : {user?.email}</li>
            <li>UserId : 94ij</li>
          </ul>
          <ul className="w-1/2 text-left">
            <li><h1 className="text-xl font-bold">Shopping Details</h1></li>
            <li>Total Items : {carts?.length}</li>
            <li>Total Price : ${sumWithInitial}</li>
            <li><button className="btn btn-success text-white">Procceed to Checkout</button></li>
          </ul>
        </div>
        {/* other end */}
      </div>
    </div>
  );
};

export default Carts;
