import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const CategoryComponents = () => {
  const categories = [
    {
      title: "New Year Collection",
      heading: "Ballpoint Pens",
      image: "https://i.ibb.co/0VJxZCTy/pexels-thngocbich-636237.jpg",
    },
    {
      title: "Collection 2025",
      heading: "Ballpoint Pens",
      image: "https://i.ibb.co/bg9SVJpR/pexels-cottonbro-6143818.jpg",
    },
    {
      title: (
        <>
          Starts From 15<span className="text-sm font-extrabold">&#2547;</span>
        </>
      ),
      heading: "Ballpoint Pens",
      image: "https://i.ibb.co/xRkjp0M/pexels-didsss-1447474.jpg",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    data-aos="fade-up"
     data-aos-anchor-placement="top-bottom"
     data-aos-duration="2000"
     >
      {categories.map((item, index) => (
        <div
          key={index}
          className="group relative overflow-hidden h-64 w-full rounded-md"
        >
          {/* ✨ Background image with hover scale */}
          <div
            className="absolute inset-0 bg-no-repeat bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url(${item.image})`,
            }}
          ></div>

          {/* ✨ Content stays unaffected */}
          <div className="relative z-10 flex flex-col justify-center items-center gap-2 h-full text-white">
            <p className="font-medium">{item.title}</p>
            <h2 className="font-bold text-2xl">{item.heading}</h2>
            <h4 className="text-lg font-semibold">
              <Link to="/products" className="group cursor-pointer">
                <span className="flex items-center justify-center gap-1">
                  <p>Get The Items</p>
                  <span className="bg-gray-100 rounded-full text-black group-hover:text-white group-hover:bg-blue-700 transition-colors duration-200">
                    <ChevronRight size={20} />
                  </span>
                </span>
              </Link>
            </h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryComponents;
