const BlogComponents = () => {
  const posts = [
    {
      title: "Top 5 Must-Have Stationery Items for 2025",
      desc: "From smooth ballpoint pens to durable notebooks, explore the essential stationery products every student and professional needs this year. Stay organized and boost productivity with these picks!",
      img: "https://i.ibb.co/Q7kbZ8XH/pexels-kindelmedia-7054754-1.jpg",
      authorLogo:
        "https://i.ibb.co/21m13w1N/Whats-App-Image-2025-05-02-at-10-37-39-93239266.jpg",
      authorName: "Hasan Jamil",
      date: "May 14 2025",
      id: "1",
    },

    {
      title: "How the Right Notebook Can Improve Your Focus",
      desc: "Not all notebooks are created equal. Discover how paper quality, binding style, and layout design can boost your concentration and help you stay productive whether you're at work or school.",
      img: "https://i.ibb.co/4ZjTCsCM/pexels-ekaterina-bolovtsova-6193086.jpg",
      authorLogo:
        "https://i.ibb.co/Z1SsBs55/lesha-tuman-jc-ZIhzg-Xu-PI-unsplash.jpg",
      authorName: "Jannatul Faria",
      date: "May 12 2025",
      id: "2",
    },

    {
      title: "Eco-Friendly Stationery: Smarter Choices for a Better Planet",
      desc: "Learn how switching to eco-friendly pens, recycled paper, and biodegradable supplies can reduce your environmental footprint—without compromising on quality or style.",
      img: "https://i.ibb.co/nqNX69vr/pexels-n-voitkevich-5554867.jpg",
      authorLogo:
        "https://i.ibb.co/zhgsvnCH/bayu-prayuda-l-AA6-Ns1-Lm-GM-unsplash.jpg",
      authorName: "Rayhan Morshed",
      date: "May 13 2025",
      id: "3",
    },
  ];
  return (
    <section
      className=" mx-auto px-4 max-w-screen-xl md:px-8"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-duration="2000"
    >
      <div className="text-center">
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-600 text-center ">
          <span className="border-b-4 border-red-400">Latest Blog Posts</span>
        </h1>
        <p className="mt-3 text-gray-500">
          Blogs that are loved by the happy customers. Updated every hour.
        </p>
      </div>
      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((items, key) => (
          <article
            className="group max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm cursor-pointer"
            key={key}
          >
            <a id={items.id}>
              <div className="overflow-hidden rounded-t-md">
                <img
                  src={items.img}
                  loading="lazy"
                  alt={items.title}
                  className="w-full h-48 
              transition-transform duration-300 ease-in-out 
              group-hover:scale-105"
                />
              </div>
              <div className="flex items-center mt-2 pt-3 ml-4 mr-2">
                <div className="flex-none w-10 h-10 rounded-full ">
                  <img
                    src={items.authorLogo}
                    className="w-full h-full rounded-full "
                    alt={items.authorName}
                  />
                </div>
                <div className="ml-3">
                  <span className="block text-gray-900">
                    {items.authorName}
                  </span>
                  <span className="block text-gray-400 text-sm">
                    {items.date}
                  </span>
                </div>
              </div>
              <div className="pt-3 ml-4 mr-2 mb-3">
                <h3 className="text-xl text-gray-900">{items.title}</h3>
                <p className="text-gray-400 text-sm mt-1">{items.desc}</p>
              </div>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default BlogComponents;
