import { FaEye, FaHeart, FaUserAlt } from "react-icons/fa";

const techItems = [
  {
    title: "Future Forward: Technologys Evolution Unveiled",
    date: "December 12, 2023",
    image: "https://discordbanners.vercel.app/static/img/profile_discord.jpg",
    views: "1.5k",
    likes: "200",
    author: "sandy"
  },
  {
    title: "Future Forward: Technologys Evolution Unveiled",
    date: "December 12, 2023",
    image: "https://discordbanners.vercel.app/static/img/profile_discord.jpg",
    views: "1.5k",
    likes: "200",
  },
  {
    title: "Future Forward: Technologys Evolution Unveiled",
    date: "December 12, 2023",
    image: "https://discordbanners.vercel.app/static/img/profile_discord.jpg",
    views: "1.5k",
    likes: "200",
  },
  {
    title: "Future Forward: Technologys Evolution Unveiled",
    date: "December 12, 2023",
    image: "https://discordbanners.vercel.app/static/img/profile_discord.jpg",
    views: "1.5k",
    likes: "200",
  },
  {
    title: "Future Forward: Technologys Evolution Unveiled",
    date: "December 12, 2023",
    image: "https://discordbanners.vercel.app/static/img/profile_discord.jpg",
    views: "1.5k",
    likes: "200",
  },
  {
    title: "Future Forward: Technologys Evolution Unveiled",
    date: "December 12, 2023",
    image: "https://discordbanners.vercel.app/static/img/profile_discord.jpg",
    views: "1.5k",
    likes: "200",
  },
  {
    title: "Future Forward: Technology’s Evolution Unveiled",
    date: "December 12, 2023",
    image: "https://discordbanners.vercel.app/static/img/profile_discord.jpg",
    views: "1.5k",
    likes: "200",
  },
  {
    title: "Future Forward: Technology’s Evolution Unveiled",
    date: "December 12, 2023",
    image: "https://discordbanners.vercel.app/static/img/profile_discord.jpg",
    views: "1.5k",
    likes: "200",
  },
  {
    title: "Future Forward: Technology’s Evolution Unveiled",
    date: "December 12, 2023",
    image: "https://discordbanners.vercel.app/static/img/profile_discord.jpg",
    views: "1.5k",
    likes: "200",
  },
  
];

const TechSection = () => {
  return (
    <section
      className="w-full bg-cover bg-center py-16 px-4 sm:px-6 md:px-10 lg:px-20"
      style={{
        backgroundImage: `url('/tech-bg.webp')`,
      }}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-6xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
          TECH
        </h2>
        <p className="text-base sm:text-lg text-gray-700 mb-10">
          Latest news about technology
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 md:px-6 lg:px-20">
  {techItems.map((item, index) => (
    <div
      key={index}
      className="relative group w-full h-36 sm:h-36 md:h-30 rounded-[3rem] overflow-hidden bg-white shadow-md transition-all duration-500 cursor-pointer"
    >
      {/* Thumbnail that becomes background */}
      <img
        src={item.image}
        alt="tech"
        className="absolute left-4 top-7 w-16 h-16 rounded-full object-cover z-10 transition-all duration-500 
                  group-hover:w-full group-hover:h-full group-hover:rounded-none 
                  group-hover:left-0 group-hover:top-0 group-hover:scale-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-500 z-20" />

      {/* Text Content */}
      <div
        className="relative z-30 flex flex-col justify-center h-full px-24 sm:px-10 md:px-20 lg:px-24 transition-all duration-500
                   group-hover:items-center group-hover:text-center group-hover:justify-center"
      >
        <h3 className="text-black group-hover:text-white text-sm font-extrabold transition-colors duration-500  md:line-clamp-3">
          {item.title}
        </h3>
        <p className="text-[11px] sm:text-xs md:text-sm text-gray-500 group-hover:text-gray-200 transition-colors duration-500 mt-1">
          {item.date}
        </p>

        {/* Icons Section */}
        <div className="flex items-center gap-3 mt-2 text-gray-500 group-hover:text-gray-200 text-xs transition-all duration-500">
          <span className="flex items-center gap-1 text-purple-500">
            <FaEye className="text-[12px]" />
            {item.views}
          </span>
          <span className="flex items-center gap-1 text-red-600">
            <FaHeart className="text-[12px]" />
            {item.likes}
          </span>
          <span className="flex items-center gap-1">
        <FaUserAlt className="text-[10px]" />
        {item.author || "Author"}
      </span>
        </div>
      </div>
    </div>
  ))}
</div>

      </div>
    </section>
  );
};

export default TechSection;
