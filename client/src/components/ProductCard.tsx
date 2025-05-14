import { productDto } from "@/dto/productDto";
import { Link } from "react-router-dom";
import FormatTaka from "./FormatTaka";

export default function ProductCard({ product }: { product: productDto }) {
  return (
    <>
      <div className={"h-full"}>
        {product !== undefined && (
          <Link to={`/products/${product?._id}`}>
            <div className="flex items-center justify-center ">
              <div className="group w-full max-w-sm bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all flex flex-col min-h-[430px]">
                <div className="relative overflow-hidden">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-52 object-cover transition-transform duration-300 ease-in-out 
                      group-hover:scale-105"
                  />
                  <span className="absolute top-3 right-3 bg-gray-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {product.category}
                  </span>
                </div>

                {/* Content Section */}
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex-1 space-y-2">
                    <h3 className="text-xl font-bold text-gray-900 line-clamp-1">
                      {product.name}
                    </h3>
                    <p className="text-gray-500 text-sm line-clamp-3">
                      {product.description}
                    </p>
                  </div>

                  <div className="mt-4 space-y-3">
                    <div className="flex justify-between items-center text-sm">
                      <p className="text-xl font-bold text-gray-900">
                        <FormatTaka amount={product.price} />
                      </p>
                      <p
                        className={`font-medium ${
                          product.stock > 0 ? "text-green-600" : "text-red-500"
                        }`}
                      >
                        {product.stock > 0
                          ? `In Stock: ${product.stock}`
                          : "Out of Stock"}
                      </p>
                    </div>

                    <button className="w-full bg-gray-600 hover:bg-gray-700 text-white font-medium py-2.5 rounded-lg transition-colors cursor-pointer">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        )}
      </div>
    </>
  );
}
