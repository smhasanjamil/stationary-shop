import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const CallToActionComponents = () => {
  return (
    <div
      className="text-center"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-duration="2000"
    >
      <h2 className="font-semibold text-4xl italic">
        Everyone&#39;s Rushing to Grab These Deals — Are You In Yet?
      </h2>
      <div className="mt-2 flex flex-col gap-2">
        <p className="font-light">
          Unbeatable prices, trending items, and free shipping on orders over
          150<span className="font-light text-lg">&#2547;</span>. Don&#39;t be
          the last to shop!
        </p>
        <Link to="/products">
          <Button className="w-auto mx-auto rounded-lg bg-gray-600 hover:bg-gray-700">
            Claim Your Deal Now
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CallToActionComponents;
