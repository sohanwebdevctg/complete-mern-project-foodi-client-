import { Link } from "react-router-dom";


const Cards = ({item}) => {
  return (
<div className="card  bg-base-100 w-96 shadow-xl">
          <Link to={`/menu/${item._id}`}>
          <figure>
            <img src={item?.image} className="h-56 w-56" />
          </figure>
          </Link>
          <div className="card-body">
            <h2 className="card-title">{item?.name}</h2>
            <p className="text-left">{item?.recipe}</p>
            <div className="card-actions flex justify-between items-center mt-2">
              <h3 className="text-xl">${item?.price}0</h3>
              <button className="py-2 px-3 bg-green-500 hover:bg-green-500 text-white rounded-lg text-sm">Add to Card</button>
            </div>
          </div>
        </div>
  );
};

export default Cards;