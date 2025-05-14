const FreeShippingComponents = () => {
  return (
    <div
      className="text-center"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-duration="2000"
    >
      <h2 className="font-semibold text-4xl italic">
        <span className="text-red-600">FREE SHIPPING</span> ALL ORDERS OVER 150
        <span className="text-3xl font-extrabold">&#2547;</span>
      </h2>
      <div className="mt-2">
        <div className="flex items-center justify-center gap-4">
          <div className="h-px w-8 sm:w-20 md:w-28 lg:w-36 bg-gray-400" />
          <p className="font-light text-gray-800 text-lg">
            We will ship your item within 2 days
          </p>
          <div className="h-px w-8 sm:w-20 md:w-28 lg:w-36 bg-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default FreeShippingComponents;
