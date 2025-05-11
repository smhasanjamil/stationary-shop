const Newsletter = () => {
  return (
    <>
      <section className="py-14 max-w-screen-xl mx-auto">
        <div className="relative overflow-hidden mx-4 px-4 py-14 rounded-2xl bg-gray-600 md:px-8 md:mx-8">
          <div className="relative z-10 max-w-xl mx-auto sm:text-center">
            <div className="space-y-3">
              <h3 className="text-3xl text-white font-bold">
                Stay Updated with Our Latest Products and Exclusive Offers!
              </h3>
              <p className="text-blue-100 leading-relaxed">
                Stay informed with the latest product updates, exclusive
                promotions, and helpful tips. Subscribe now to receive valuable
                insights, news, and special offers directly to your inbox.
              </p>
            </div>
            <div className="mt-6">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex items-center justify-center bg-white rounded-lg p-1 sm:max-w-md sm:mx-auto"
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="text-gray-500 w-full p-2 outline-none"
                />
                <button className="p-2 px-3 rounded-lg font-medium text-white bg-gray-600 hover:bg-gray-500 active:bg-gray-700 duration-150 outline-none shadow-md focus:shadow-none sm:px-4">
                  Subscribe
                </button>
              </form>
              <p className="mt-3 max-w-lg text-[15px] text-blue-100 sm:mx-auto">
                No spam ever, we are care about the protection of your data.
                Read our{" "}
                <a className="underline" href="#">
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Newsletter;
