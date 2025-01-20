import bannerImg from '../../../public/images/home/banner.png'

const Banner = () => {
  return (
    <div className='main-container'>
      {/* content section start */}
      <div className="hero min-h-screen">
  <div className="hero-content flex justify-between flex-row-reverse">
    <div className="flex-1">
      <img src={bannerImg} className="mx-auto rounded-lg shadow-2xl" />
    </div>
    <div className="flex-1">
      <h1 className="text-5xl font-bold">Dive into Delights Of <br></br> Delectable <span className="text-green-500">Food</span></h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="py-2 px-4 bg-green-500 hover:bg-green-500 text-white rounded-3xl">Order Now</button>
    </div>
  </div>
</div>
      {/* content section end */}
    </div>
  );
};

export default Banner;