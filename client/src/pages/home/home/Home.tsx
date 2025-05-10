import Banner from "../banner/Banner";
import FeaturedProducts from "../featuredProducts/FeaturedProducts";
import Testimonials from "../testimonials/Testimonials";
import FAQPages from "../FAQPages/FAQPages";
import Newsletter from "@/components/Newsletter";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <FeaturedProducts></FeaturedProducts>
      <Testimonials></Testimonials>
      <FAQPages />
      <Newsletter />
    </div>
  );
};

export default Home;
