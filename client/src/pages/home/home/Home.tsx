import FeaturedProducts from "../featuredProducts/FeaturedProducts";
// import Testimonials from "../testimonials/Testimonials";
// import FAQPages from "../FAQPages/FAQPages";
import Newsletter from "@/components/Newsletter";
import HeroSlider from "@/components/HeroSlider/HeroSlider";
import Partners from "@/components/Partners";
import CategoryPages from "../category/CategoryPages";
import FreeShipping from "../freeShipping/FreeShipping";
import CallToAction from "../CallToAction/CallToAction";
import Blog from "../blog/Blog";

const Home = () => {
  return (
    <div>
      <HeroSlider />
      <CategoryPages />
      <FeaturedProducts></FeaturedProducts>
      <FreeShipping />
      <Blog />
      {/* <Testimonials></Testimonials> */}
      <CallToAction />
      {/* <FAQPages /> */}
      <Newsletter />
      <Partners />
      {/* <Ratings /> */}
    </div>
  );
};

export default Home;
