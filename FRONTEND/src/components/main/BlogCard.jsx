import { motion } from "framer-motion";
import { useState } from "react";
import { FaEye, FaUserAlt, FaHeart, FaRegHeart } from "react-icons/fa";
const BlogCard = ({
  image,
  date,
  title,
  description,
  views,
  author,
  tag,
  time,
}) => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => setLiked(!liked);
  const [hovered, setHovered] = useState(false);

  return (
    <div className="bg-white rounded-3xl shadow-md overflow-hidden border-8 border-white transition-all hover:shadow-lg max-w-xl mx-auto">
      <div className="w-full h-56 overflow-hidden">
        <img src={image} alt="Blog" className="w-full h-full rounded-2xl  object-cover" />
      </div>
      <div className="p-6">
        <div className="text-sm text-gray-500 flex flex-wrap items-center mb-3 space-x-2">
          <span className="bg-black text-white text-xs font-semibold px-2 py-0.5 rounded">
            {tag}
          </span>
          <span>{date}</span>
          <span>•</span>
          <span>{time}</span>
        </div>

        {/* <h3 className="text-2xl font-semibold text-gray-900 mb-2 cursor-pointer hover:underline ">{title}</h3> */}

        <motion.div
          className="flex flex-col"
          onHoverStart={() => setHovered(true)}
          onHoverEnd={() => setHovered(false)}
        >
          <a className="text-black text-2xl font-semibold cursor-pointer mb-2">
            {title}
          </a>
          <div
            className={`border-t-4 border-purple-400 rounded-xl transition-all duration-300 ease-in-out ${hovered ? "w-10/12" : "w-0"}`}
          ></div>
        </motion.div>
        <p className="text-gray-600 text-sm mb-4">{description}</p>

        <hr className="border-gray-200 my-4" />

        <div className="flex justify-between items-center text-sm text-gray-500">
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <FaEye className="mr-1" /> {views} views
            </span>
            <span className="flex items-center">
              <FaUserAlt className="mr-1" /> {author}
            </span>
          </div>
          <button
            onClick={toggleLike}
            className={`flex items-center transition-colors cursor-pointer ${
              liked ? "text-red-500" : "text-gray-400"
            }`}
            aria-label="Like"
          >
            {liked ? (
              <FaHeart className="mr-1" />
            ) : (
              <FaRegHeart className="mr-1" />
            )}
            {liked ? "Liked" : "Like"}
          </button>
        </div>
      </div>
    </div>
  );
};

const BlogList = () => {
  const blogData = [
    {
      image: "https://discordbanners.vercel.app/static/img/profile_discord.jpg",
      date: "Jan 01, 2023",
      title: "Clever ways to invest to organize portfolio",
      description:
        "Discover smart investment strategies to streamline and organize your portfolio.",
      views: 123,
      author: "John Doe",
      time: "5 MIN READ",
      tag: "ENTERTAINMENT",
    },
    {
      image: "https://discordbanners.vercel.app/static/img/profile_discord.jpg",
      date: "Jan 05, 2023",
      title: "Mastering JavaScript: A Complete Guide",
      description:
        "Discover smart investment strategies to streamline and organize your portfolio.",
      views: 256,
      author: "Jane Smith",
      time: "5 MIN READ",
      tag: "ENTERTAINMENT",
    },
    {
      image: "https://discordbanners.vercel.app/static/img/profile_discord.jpg",
      date: "Feb 12, 2023",
      title: "Understanding CSS Grid Layout Guide",
      description:
        "Discover smart investment strategies to streamline and organize your portfolio.",
      views: 98,
      author: "Alice Johnson",
      time: "5 MIN READ",
      tag: "ENTERTAINMENT",
    },
    {
      image: "https://discordbanners.vercel.app/static/img/profile_discord.jpg",
      date: "Feb 12, 2023",
      title: "Understanding CSS Grid Layout Guide",
      description:
        "Discover smart investment strategies to streamline and organize your portfolio.",
      views: 98,
      author: "Alice Johnson",
      time: "5 MIN READ",
      tag: "ENTERTAINMENT",
    },
    {
      image: "https://discordbanners.vercel.app/static/img/profile_discord.jpg",
      date: "Feb 12, 2023",
      title: "Understanding CSS Grid Layout Guide",
      description:
        "Discover smart investment strategies to streamline and organize your portfolio.",
      views: 98,
      author: "Alice Johnson",
      time: "5 MIN READ",
      tag: "ENTERTAINMENT",
    },
    {
      image: "https://discordbanners.vercel.app/static/img/profile_discord.jpg",
      date: "Feb 12, 2023",
      title: "Understanding CSS Grid Layout Guide",
      description:
        "Discover smart investment strategies to streamline and organize your portfolio.",
      views: 98,
      author: "Alice Johnson",
      time: "5 MIN READ",
      tag: "ENTERTAINMENT",
    },
  ];

  return (
    <section>
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">
          Explore Our Latest Reads
        </h2>
        <p className="text-gray-600 text-base leading-relaxed">
          Dive into hand-picked articles, guides, and tutorials curated to keep
          you informed and entertained. Whether you're learning or just
          browsing, there's something for everyone.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogData.map((blog, index) => (
          <BlogCard
            key={index}
            image={blog.image}
            date={blog.date}
            title={blog.title}
            description={blog.description}
            views={blog.views}
            author={blog.author}
            tag={blog.tag}
            time={blog.time}
          />
        ))}
      </div>
    </section>
  );
};

export default BlogList;
