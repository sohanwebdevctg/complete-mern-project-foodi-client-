import { useEffect, useState } from "react";
import Cards from "../../Components/Cards";

const SpecialDishes = () => {

  const [recipes, setRecipes] = useState([])

  
  useEffect(() => {
    fetch('./cart.json')
    .then((res) => res.json())
    .then((data) => {
      const popular = data.filter((item) => item.category === "popular")
      setRecipes(popular)
    })
  },[])

  return (
<div className="hero bg-base-200 min-h-96">
      <div className="hero-content text-center flex flex-col">
        <div className="max-w-md">
          <h1 className="text-lg font-bold text-red-500 uppercase">
            customer favorites
          </h1>
          <h1 className="text-5xl font-bold">Popular Categories</h1>
        </div>
        <div className="overflow-hidden grid grid-cols-3 gap-8">
        {
          recipes.map((item, index) => <Cards key={index} item={item}></Cards>)
        }
    </div>
      </div>
    </div>
  );
};

export default SpecialDishes;