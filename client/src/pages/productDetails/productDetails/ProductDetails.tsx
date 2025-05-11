import { useState } from "react";
import { useAppDispatch } from "@/redux/hooks";
import { addToCart } from "@/redux/features/cart/cartSlice";
import { toast } from "sonner";
import { useParams, useNavigate } from "react-router-dom";
import { useGetSingleProductQuery } from "@/redux/features/proudct/productApi";
import { productDto } from "@/dto/productDto";
import FormatTaka from "@/components/FormatTaka";
import { ShoppingBag } from "lucide-react";
import Loader from "@/components/Loader";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Star, StarHalf, Star as StarEmpty } from "lucide-react";

const ProductDetails = () => {
  const [active, setActive] = useState<"details" | "reviews">("details");
  const { productId } = useParams<{ productId: string }>();
  const dispatch = useAppDispatch();

  const [selectedSize, setSelectedSize] = useState<string | undefined>();
  const [selectedColor, setSelectedColor] = useState<string | undefined>();
  const [quantity, setQuantity] = useState<number>(1);
  const [showError, setShowError] = useState<boolean>(false);

  const { data, isError, isLoading } = useGetSingleProductQuery({ productId });
  const navigate = useNavigate();

  if (isLoading) return <Loader />;
  if (isError) return <div>Error loading product</div>;

  const product: productDto = data?.data;
  const needsSize = product.sizes?.length;
  const needsColor = product.colors?.length;

  const notify = () => {
    toast.success("Checkout Cart", {
      description: `${product.name} has been added`,
      duration: 3000,
      icon: <ShoppingBag className="m-4" />,
      action: {
        label: "Go to Cart",
        onClick: () => navigate("/cart"),
      },
    });
  };

  const handleAddToCart = () => {
    if ((needsSize && !selectedSize) || (needsColor && !selectedColor)) {
      setShowError(true);
      document.getElementById("sizesGrid")?.scrollIntoView({
        block: "center",
        behavior: "smooth",
      });
      return; // stop execution if validation fails
    }

    setShowError(false);

    const cartItem = {
      productId: product._id!,
      name: product.name,
      image: product.images[0],
      selectedSize,
      selectedColor,
      quantity,
      oneQuantityPrice: product.price,
      price: product.price * quantity,
    };

    dispatch(addToCart(cartItem));
    notify();
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value < 1 || isNaN(value)) {
      setQuantity(1);
    } else if (value > product.stock) {
      setQuantity(product.stock);
    } else {
      setQuantity(value);
    }
  };

  // Rating start
  const starRatings: Record<number, number> = {
    5: 120,
    4: 80,
    3: 30,
    2: 15,
    1: 5,
  };

  const totalRatings = Object.values(starRatings).reduce(
    (sum, count) => sum + count,
    0
  );
  const averageRating =
    Object.entries(starRatings).reduce(
      (acc, [star, count]) => acc + parseInt(star) * count,
      0
    ) / totalRatings;
  // Rating send

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 font-[josefin-sans]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full max-h-[500px] rounded-lg shadow"
          />
        </div>

        <div className="space-y-5">
          <h2 className="text-3xl font-bold text-gray-800">{product.name}</h2>
          <p className="text-gray-600 text-lg">{product.description}</p>

          <div className="text-lg text-gray-700">
            <p>
              <span className="font-extrabold">Price:</span>{" "}
              <FormatTaka amount={product.price} />
            </p>
            <p>
              <span className="font-extrabold">Category:</span>{" "}
              {product.category}
            </p>
            <p>
              <span className="font-extrabold">Author/Brand:</span>{" "}
              {product.brand}
            </p>
            <p>
              <span className="font-extrabold">Availability:</span>{" "}
              <span
                className={
                  product.stock > 0 ? "text-green-600" : "text-red-600"
                }
              >
                {product.stock > 0
                  ? `In Stock (${product.stock})`
                  : "Out of Stock"}
              </span>
            </p>
          </div>

          <div id="sizesGrid" className="flex flex-wrap gap-4">
            {needsSize ? (
              <select
                onChange={(e) => setSelectedSize(e.target.value)}
                defaultValue=""
                className="border px-3 py-1 rounded"
              >
                <option value="" disabled>
                  Select Size
                </option>
                {product.sizes?.map((color) => (
                  <option key={color} value={color}>
                    {color}
                  </option>
                ))}
              </select>
            ) : (
              ""
            )}

            {needsColor ? (
              <select
                onChange={(e) => setSelectedColor(e.target.value)}
                defaultValue=""
                className="border px-3 py-1 rounded"
              >
                <option value="" disabled>
                  Select Color
                </option>
                {product.colors?.map((color) => (
                  <option key={color} value={color}>
                    {color}
                  </option>
                ))}
              </select>
            ) : (
              ""
            )}

            <div className="flex items-center gap-2">
              <p className="font-extrabold">Quantity:</p>
              <input
                type="number"
                min={1}
                value={quantity as number}
                onChange={(e) => handleQuantityChange(e)}
                className="w-16 border px-2 py-1 rounded"
              />
            </div>
          </div>

          {showError && (
            <p className="text-red-600 text-sm">Please select size and color</p>
          )}

          <button
            onClick={handleAddToCart}
            disabled={product.stock === 0}
            className={`px-6 py-3 text-white font-medium rounded transition ${
              product.stock > 0
                ? "bg-gray-600 hover:bg-gray-700 rounded-lg"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            {product.stock ? "Add to Cart" : "Unavailable"}
          </button>
        </div>
      </div>
      <div className="mt-6 mb-1 flex md:flex-row flex-col justify-evenly">
        <Button
          onClick={() => setActive("details")}
          variant="ghost"
          className="text-3xl  hover:bg-gray-600 hover:text-white rounded-lg"
        >
          Details
        </Button>

        <Button
          onClick={() => setActive("reviews")}
          variant="ghost"
          className="text-3xl  hover:bg-gray-600 hover:text-white rounded-lg"
        >
          Reviews
        </Button>
      </div>
      <Separator className="!h-[2px] mb-4" />
      {active === "details" && (
        <div className="px-2">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Essential Stationery Set – Your Daily Productivity Partner
          </h2>
          <p className="text-gray-600">
            Stay organized and productive with the Essential Stationery Set,
            designed for students, professionals, and anyone who appreciates
            quality stationery. Whether you're writing notes, planning your day,
            or highlighting key points, this all-in-one set has you covered.
          </p>
          <div className="mb-6">
            <h3 className="text-xl font-medium text-gray-800 mb-2">
              What&rsquo;s Included:
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>
                <span className="font-semibold">✍️ Smooth ballpoint pens</span>{" "}
                – Comfortable grip and quick-dry ink for clean writing
              </li>
              <li>
                <span className="font-semibold">📒 Durable notebook</span> –
                Thick, bleed-resistant pages perfect for daily notes
              </li>
              <li>
                <span className="font-semibold">🗒️ Sticky notes</span> – Great
                for quick reminders, bookmarks, and labeling
              </li>
              <li>
                <span className="font-semibold">✨ Bright highlighters</span> –
                Easily mark important lines and headings
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-medium text-gray-800 mb-2">
              🔹 Why You’ll Love It:
            </h3>
            <ul className="list-check pl-6 space-y-2 text-gray-600">
              <li>Lightweight and easy to carry</li>
              <li>Perfect for school, office, or home use</li>
              <li>Stylish, functional, and long-lasting</li>
              <li>A thoughtful gift for students or coworkers</li>
            </ul>
          </div>

          <p className="mt-6 text-gray-600">
            From lectures to meetings, this set helps you stay prepared and
            focused. Keep everything you need in one place with the{" "}
            <strong>Essential Stationery Set</strong> — simple tools for smarter
            work.
          </p>
        </div>
      )}
      {active === "reviews" && (
        <div className="px-2">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Customer Reviews
          </h2>

          <div className="text-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              Customer Ratings
            </h2>
            <p className="text-lg text-yellow-500 font-bold mt-2">
              {averageRating.toFixed(1)} / 5
            </p>
            <div className="flex justify-center mt-2">
              {/* Render Stars */}
              {Array.from({ length: 5 }, (_, i) => {
                if (averageRating >= i + 1) {
                  return (
                    <Star
                      key={i}
                      className="text-yellow-400 fill-yellow-400 w-5 h-5"
                    />
                  );
                } else if (averageRating >= i + 0.5) {
                  return (
                    <StarHalf
                      key={i}
                      className="text-yellow-400 fill-yellow-400 w-5 h-5"
                    />
                  );
                } else {
                  return (
                    <StarEmpty key={i} className="text-gray-300 w-5 h-5" />
                  );
                }
              })}
            </div>
            <p className="text-sm text-gray-500 mt-1">
              {totalRatings} total reviews
            </p>
          </div>

          {/* Rating Bars */}
          <div className="space-y-2">
            {[5, 4, 3, 2, 1].map((star) => {
              const count = starRatings[star as keyof typeof starRatings];
              const percentage = (count / totalRatings) * 100;

              return (
                <div key={star} className="flex items-center">
                  <span className="w-12 text-sm font-medium text-gray-600">
                    {star} Star
                  </span>
                  <div className="flex-1 mx-2 h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-yellow-400 rounded-full transition-all duration-500"
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-500 w-10 text-right">
                    {count}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
