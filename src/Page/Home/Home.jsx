import Banner from "./Banner";
import OurStory from "./OurStory";
import Popular from "./Popular";
import SpecialDishes from "./SpecialDishes";
import Testimonials from "./Testimonials";


const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Popular></Popular>
      <Testimonials></Testimonials>
      <SpecialDishes></SpecialDishes>
      <OurStory></OurStory>
    </div>
  );
};

export default Home;