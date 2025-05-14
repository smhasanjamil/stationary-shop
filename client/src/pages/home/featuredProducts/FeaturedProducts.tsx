import Loader from "@/components/Loader";
import ProductCard from "@/components/ProductCard";
import { productDto } from "@/dto/productDto";
import { useGetProductsQuery } from "@/redux/features/proudct/productApi";

const FeaturedProducts = () => {
  const { data, isLoading, isError } = useGetProductsQuery({});

  if (isLoading)
    return (
      <div>
        <Loader />
      </div>
    );
  if (isError) return <div>Error loading products</div>;
  const products = data?.data || [];

  // Filter products where isFeatured is true and limit to the first 6
  const featured = products
    .filter((product: productDto) => product.isFeatured)
    .slice(0, 6);
  return (
    <section
      className=" font-[josefin-sans]"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-duration="1000"
    >
      <div className="max-w-7xl mx-auto px-4 py-10 ">
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-600 text-center md:py-6 ">
            <span className="border-b-4 border-red-400">Featured Products</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-fr">
          {featured.slice(0, 4).map((product: productDto) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
