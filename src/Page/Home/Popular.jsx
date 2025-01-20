const Popular = () => {
  const favorites = [
    {
      id: 1,
      img: "../../../public/images/home/category/img1.png",
      title: "Main Dish",
      des: "(86 Dishes)",
    },
    {
      id: 2,
      img: "../../../public/images/home/category/img2.png",
      title: "Break Fast",
      des: "(12 Break Fast)",
    },
    {
      id: 3,
      img: "../../../public/images/home/category/img3.png",
      title: "Dessert",
      des: "(48 Dessert)",
    },
    {
      id: 4,
      img: "../../../public/images/home/category/img4.png",
      title: "Browse All",
      des: "(255 Items)",
    },
  ];

  return (
    <div className="hero bg-base-200 min-h-96">
      <div className="hero-content text-center flex flex-col w-full">
        <div className="max-w-md">
          <h1 className="text-lg font-bold text-red-500 uppercase">
            customer favorites
          </h1>
          <h1 className="text-5xl font-bold">Popular Categories</h1>
        </div>
        <div className="flex justify-between items-center mt-5 w-full gap-10">
          {favorites.map((item) => (
            <div
              key={item.id}
              className="bg-white text-center mx-auto p-5 w-full"
            >
              <img src={item.img} className="w-24 h-20 mx-auto"></img>
              <ul>
                <li>{item.title}</li>
                <li className="text-gray-500">{item.des}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Popular;
