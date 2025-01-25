import { useContext } from "react";
import { AuthContext } from './../../Context/AuthProvider';
import useCard from "../../hooks/useCard";

const Carts = () => {

  const {user} = useContext(AuthContext);

  const [card] = useCard();
  const sumWithInitial = card.reduce(
    (accumulator, currentValue) => accumulator + currentValue.price,
    0,
  );
  console.log(card)

  const deleteBtn = (id) => {
    console.log(id)
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
                card.map((item, index) =><tr key={item._id}>
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
                <td>{item?.quantity}</td>
                <td>{item?.price}</td>
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
            <li>Total Items : {card?.length}</li>
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
