

const OurStory = () => {

  const services = [
    {
      id: 1, img: '../../../public/images/home/services/icon1.png', title : 'Catering', des : 'this is item1'
    },
    {
      id: 1, img: '../../../public/images/home/services/icon2.png', title : 'Fast Delivery', des : 'this is item2'
    },
    {
      id: 1, img: '../../../public/images/home/services/icon3.png', title : 'Online Ordering', des : 'this is item3'
    },
    {
      id: 1, img: '../../../public/images/home/services/icon4.png', title : 'Gift Cards', des : 'this is item4'
    },
  ]

  return (
    <div className='main-container'>
      {/* content section start */}
      <div className="hero min-h-screen">
  <div className="hero-content flex justify-between flex-row-reverse">
    <div className="flex-1 grid grid-cols-2 gap-10">
    {
          services.map((item) => <div key={item.id} className="bg-white shadow-lg text-center mx-auto p-5 w-full">
            <img src={item.img} className="w-12 h-12 mx-auto"></img>
            <ul>
              <li>{item.title}</li>
              <li className="text-gray-500">{item.des}</li>
            </ul>
          </div>)
        }
    </div>
    <div className="flex-1">
      <h1 className="text-lg font-bold text-red-500 uppercase">our story & services</h1>
      <h1 className="text-5xl font-bold">Our Culinary Journey <br></br> And <span className="text-green-500">Services</span></h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="py-2 px-4 bg-green-500 hover:bg-green-500 text-white rounded-3xl">Order Now</button>
    </div>
  </div>
</div>
      {/* content section end */}
    </div>
  );
};

export default OurStory;