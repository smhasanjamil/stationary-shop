import { useState } from "react";

const Testimonials = () => {
  const testimonials = [
    {
      avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
      name: "Rahim Uddin",
      title: "Small Business Owner",
      quote:
        "This stationery shop has everything I need to keep my store organized. From billing books to pens and files, the prices are fair, and the service is always reliable.",
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/79.jpg",
      name: "Fatima Begum",
      title: "School Teacher",
      quote:
        "As a teacher, I always find high-quality notebooks, markers, and teaching tools here. The prices are reasonable, and I love the friendly, helpful attitude of the shop staff.",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/86.jpg",
      name: "Tanvir Hasan",
      title: "University Student",
      quote:
        "I visit this stationery shop regularly for exam sheets, drawing kits, and other essentials. They offer great variety, and I always find exactly what I need without any hassle.",
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  return (
    <div className="py-10">
      <div>
        <h3 className="text-2xl md:text-3xl font-semibold text-gray-600 text-center ">
          Testimonials
        </h3>
      </div>
      <section className="pt-2">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-indigo-600 font-semibold pb-6">
              What customer are saying
            </h3>
            <ul>
              {testimonials.map((item, idx) =>
                currentTestimonial == idx ? (
                  <li key={idx}>
                    <figure>
                      <blockquote>
                        <p className="text-gray-800 text-xl font-semibold sm:text-2xl">
                          “{item.quote}“
                        </p>
                      </blockquote>
                      <div className="mt-6">
                        <img
                          src={item.avatar}
                          className="w-16 h-16 mx-auto rounded-full"
                        />
                        <div className="mt-3">
                          <span className="block text-gray-800 font-semibold">
                            {item.name}
                          </span>
                          <span className="block text-gray-600 text-sm mt-0.5">
                            {item.title}
                          </span>
                        </div>
                      </div>
                    </figure>
                  </li>
                ) : (
                  ""
                )
              )}
            </ul>
          </div>
          <div className="mt-6">
            <ul className="flex gap-x-3 justify-center">
              {testimonials.map((_, idx) => (
                <li key={idx}>
                  <button
                    className={`w-2.5 h-2.5 rounded-full duration-150 ring-offset-2 ring-gray-600 focus:ring ${
                      currentTestimonial == idx ? "bg-gray-600" : "bg-gray-300"
                    }`}
                    onClick={() => setCurrentTestimonial(idx)}
                  ></button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
