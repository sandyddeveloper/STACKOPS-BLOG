import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaEye, FaUserAlt, FaHeart, FaRegHeart } from "react-icons/fa";
import apiInstance from "../../utils/axios";
import { Link } from "react-router-dom";
const BlogCard = ({
  image,
  date,
  title,
  description,
  views,
  author,
  category,
  time,
}) => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => setLiked(!liked);
  const [hovered, setHovered] = useState(false);


  return (
    <div className="bg-white rounded-3xl shadow-md overflow-hidden border-[20px] border-white transition-all hover:shadow-lg max-w-xl mx-auto">
      <div className="w-full h-56 overflow-hidden">
        <img src={image} alt="Blog" className="w-full h-full rounded-2xl object-cover" />
      </div>
      <div className="p-6">
        <div className="text-sm text-gray-500 flex flex-wrap items-center mb-3 space-x-2">
          <span className="bg-black text-white text-xs font-semibold px-2 py-0.5 rounded">
            {category}
          </span>
          <span>{new Date(date).toLocaleDateString()}</span>
          <span>•</span>
          <span>{time}</span>
        </div>

        <motion.div
          className="flex flex-col"
          onHoverStart={() => setHovered(true)}
          onHoverEnd={() => setHovered(false)}
        >
          <h3 className="text-black text-2xl font-semibold cursor-pointer mb-2">
            {title}
          </h3>
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
            className={`flex items-center transition-colors cursor-pointer ${liked ? "text-red-500" : "text-gray-400"}`}
            aria-label="Like"
          >
            {liked ? <FaHeart className="mr-1" /> : <FaRegHeart className="mr-1" />}
            {liked ? "Liked" : "Like"}
          </button>
        </div>
      </div>
    </div>
  );
};

const BlogList = () => {
  const [posts, setPosts] = useState([])
  const [category, setCategory] = useState([])
  const fetchPosts = async () => {
    try {

        const response_post = await apiInstance.get(`post/lists/`)
        const response_category = await apiInstance.get(`post/category/list/`)
        setPosts(response_post.data)
        setCategory(response_category.data)
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
      fetchPosts()
  }, []
  )

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
    {posts?.map((blog) => (
      <Link key={blog.id} to={`/blog/${blog.slug}`}>
        <div className="flex flex-col h-full">
          <BlogCard
            image={blog.image}
            date={blog.date}
            title={blog.title}
            description={blog.description}
            views={blog.view}
            author={blog.user.full_name}
            category={blog.category?.title}
            time={new Date(blog.date).toLocaleTimeString()}
          />
        </div>
      </Link>
    ))}
  </div>
</section>

  );
};

export default BlogList;
