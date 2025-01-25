import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from './../Context/AuthProvider';
import Swal from "sweetalert2";


const Cards = ({item}) => {

  const {user} = useContext(AuthContext);
  
  const addCardData = (item) => {
    if(user && user?.email){
      const cardData = {menuId : item?._id, name : item?.name, recipe: item?.recipe, image: item?.image, category: item?.category, price: item?.price, email: user?.email, quantity : 1};
      fetch('http://localhost:3000/card',{
        method : 'POST',
        headers : {
          'content-type' : 'application/json'
        },
        body : JSON.stringify(cardData)
      })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
      })
    }else{
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please login",
      });
    }
  }


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
              <button onClick={() => addCardData((item))} className="py-2 px-3 bg-green-500 hover:bg-green-500 text-white rounded-lg text-sm">Add to Card</button>
            </div>
          </div>
        </div>
  );
};

export default Cards;