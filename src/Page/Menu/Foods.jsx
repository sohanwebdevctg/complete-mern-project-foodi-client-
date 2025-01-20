import { useEffect, useState } from "react";
import Cards from "../../Components/Cards";

const Foods = () => {
  const [recipes, setRecipes] = useState([]);
  const [filterData, setFilterData] = useState([])

  useEffect(() => {
    fetch("./menu.json")
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data);
        setFilterData(data)
      });
  }, []);

  const buttonData = (data) => {
    const newData = data === 'all' ? recipes : recipes.filter((item) => item.category === data)
    setFilterData(newData)
  }

  return (
    <div className="main-container">
      <div className="flex justify-between items-center mt-16">
        <ul className="flex items-center gap-6">
          <li className="text-lg font-semibold"><button onClick={() => buttonData('all')}>All</button></li>
          <li className="text-lg font-semibold"><button onClick={() => buttonData('salad')}>Salads</button></li>
          <li className="text-lg font-semibold"><button onClick={() => buttonData('pizza')}>Pizza</button></li>
          <li className="text-lg font-semibold"><button onClick={() => buttonData('soup')}>Soups</button></li>
          <li className="text-lg font-semibold"><button onClick={() => buttonData('dessert')}>Desserts</button></li>
          <li className="text-lg font-semibold"><button onClick={() => buttonData('drinks')}>Drinks</button></li>
          <li className="text-lg font-semibold"><button onClick={() => buttonData('popular')}>Popular</button></li>
        </ul>
        <select className="select select-bordered w-full max-w-xs">
          <option selected>Default</option>
          <option>A-Z</option>
          <option>Z-A</option>
          <option>Low-to-High</option>
          <option>High-to-Low</option>
        </select>
      </div>
      <div className="main-container overflow-hidden grid grid-cols-3 gap-7 py-10">
        {filterData.slice(0, 9).map((item, index) => (
          <Cards key={index} item={item}></Cards>
        ))}
      </div>
    </div>
  );
};

export default Foods;
