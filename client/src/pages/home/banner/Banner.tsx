import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      
      <div className="bg-gradient-to-b from-green-50 to-green-100">
        <section className="py-4 sm:py-6 lg:py-8">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
              <div>
                <h1 className="text-4xl font-bold text-black sm:text-6xl lg:text-7xl">
                  All Your Stationery Needs
                  <div className="relative inline-flex">
                    <span className="absolute inset-x-0 bottom-0 border-b-[30px] border-[#4ADE80]"></span>
                    <h1 className="relative text-4xl font-bold text-black sm:text-6xl lg:text-7xl">
                      in One Place.
                    </h1>
                  </div>
                </h1>

                <p className="mt-8 text-base text-black sm:text-xl">
                  From pens and notebooks to office supplies — find high-quality
                  products for school, work, and creativity at affordable
                  prices.
                </p>

                <div className="mt-10 sm:flex sm:items-center sm:space-x-8">
                  <Link
                    to="/products"
                    title=""
                    className="inline-flex items-center justify-center px-10 py-4 text-lg font-semibold text-white transition-all duration-200 bg-gray-500 hover:bg-gray-600 focus:bg-gray-600 rounded-lg "
                    role="button"
                  >
                    Start Exploring
                  </Link>
                </div>
              </div>

              <div>
                <img
                  className="w-full"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/2/hero-img.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Banner;
