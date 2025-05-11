import FeaturedProducts from "../featuredProducts/FeaturedProducts";
import Testimonials from "../testimonials/Testimonials";
import FAQPages from "../FAQPages/FAQPages";
import Newsletter from "@/components/Newsletter";
import HeroSlider from "@/components/HeroSlider/HeroSlider";
import Partners from "@/components/Partners";
import Ratings from "@/components/Ratings";

const Home = () => {
  return (
    <div>
      <HeroSlider />
      <FeaturedProducts></FeaturedProducts>
      <Testimonials></Testimonials>
      <FAQPages />
      <Newsletter />
      <Partners />
      <Ratings />
    </div>
  );
};

export default Home;
