import React, { useEffect, useState } from "react";
import MNavbar from "./MainNavbar";
import BlogFooter from "../ui/BlogFooter";
import CommentSection from "../ui/CommentSection";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import {
  HeartIcon as HeartIconSolid,
  BookmarkIcon as BookmarkIconSolid,
} from "@heroicons/react/24/solid";
import {
  HeartIcon as HeartIconOutline,
  BookmarkIcon as BookmarkIconOutline,
} from "@heroicons/react/24/outline";
import { useParams } from "react-router-dom";
import apiInstance from "../../utils/axios";
import DOMPurify from "dompurify";
import MarkdownIt from "markdown-it"; 
const mdParser = new MarkdownIt();  
import {
  CalendarDaysIcon,
  EyeIcon,
  HeartIcon,
  TagIcon,
} from "@heroicons/react/24/solid";
import moment from "moment";


const BlogDetailPage = () => {
  const [post, setPost] = useState([]);
  const [tags, setTags] = useState([]);
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  const handleLikePost = async () => {
    const json = {
      user_id: 1,
      post_id: post?.id,
    };
    try {
      const response = await apiInstance.post(`post/like-post/`, json);
      console.log(response.data);
      setLiked((prev) => !prev);
    } catch (error) {
      console.error("Like error:", error);
    }
  };
  const handleBookmarkPost = async () => {
    const json = {
      user_id: 1,
      post_id: post?.id,
    };
    try {
      const response = await apiInstance.post(`post/bookmark-post/`, json);
      console.log(response.data);
      setBookmarked((prev) => !prev);
    } catch (error) {
      console.error("Bookmark error:", error);
    }
  };

  const param = useParams();

  const fetchPost = async () => {
    const response = await apiInstance.get(`post/detail/${param.slug}/`);
    setPost(response.data);
    setTags(response.data.tags);
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <div>
      <MNavbar />
      <div className="">
        <div className="p-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-lg">
              <img
                src={post.image}
                alt="Blog Visual"
                className="rounded-xl w-full object-cover mb-6"
              />
              <h1 className="text-3xl font-bold mb-4 text-gray-800">
                {post.title}
              </h1>
              <div className="flex items-center gap-6 mt-4">
                <button
                  onClick={handleLikePost}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full border transition duration-200 
    ${
      liked
        ? "border-red-300 bg-red-50 text-red-600 hover:bg-red-100"
        : "border-gray-300 bg-white text-gray-600 hover:bg-gray-100"
    }`}
                >
                  {liked ? (
                    <HeartIconSolid className="w-5 h-5 text-red-500" />
                  ) : (
                    <HeartIconOutline className="w-5 h-5 text-gray-500" />
                  )}
                  <span className="font-medium">
                    {liked ? "Liked" : "Like"}
                  </span>
                  <span className="text-sm text-gray-500 ml-1">
                    ({post?.likes?.length || 0})
                  </span>
                </button>

                <button
                  onClick={handleBookmarkPost}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full border transition duration-200
    ${
      bookmarked
        ? "border-blue-300 bg-blue-50 text-blue-600 hover:bg-blue-100"
        : "border-gray-300 bg-white text-gray-600 hover:bg-gray-100"
    }`}
                >
                  {bookmarked ? (
                    <BookmarkIconSolid className="w-5 h-5 text-blue-600" />
                  ) : (
                    <BookmarkIconOutline className="w-5 h-5 text-gray-500" />
                  )}
                  <span className="font-medium">
                    {bookmarked ? "Bookmarked" : "Bookmark"}
                  </span>
                </button>
              </div>

              <div className="text-gray-600 leading-relaxed text-lg space-y-4">
  <div
  dangerouslySetInnerHTML={{
    __html: DOMPurify.sanitize(mdParser.render(String(post.description || ""))),
  }}
/>

</div>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-5 rounded-2xl shadow-md">
                <h2 className="text-xl font-bold mb-4 text-gray-800">
                  CATEGORIES
                </h2>
                <ul className="space-y-2 text-gray-700 font-medium list-disc list-inside uppercase">
                  <li>Interior</li>
                  <li>Design</li>
                  <li>Rooms</li>
                  <li>Bathroom</li>
                  <li>Exterior</li>
                  <li>Material</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-2xl shadow-md">
                <h2 className="text-xl font-bold mb-4 text-gray-800">
                  Similar Posts
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      title: "Revolutionizing Spaces with VR",
                      img: "https://c4.wallpaperflare.com/wallpaper/621/463/591/5bd07537a26a2-wallpaper-preview.jpg",
                    },
                    {
                      title: "Revolutionizing Spaces with VR",
                      img: "https://c4.wallpaperflare.com/wallpaper/621/463/591/5bd07537a26a2-wallpaper-preview.jpg",
                    },
                    {
                      title: "Revolutionizing Spaces with VR",
                      img: "https://c4.wallpaperflare.com/wallpaper/621/463/591/5bd07537a26a2-wallpaper-preview.jpg",
                    },
                  ].map((post, idx) => (
                    <a href="#" key={idx} className="block group e-square">
                      <div className="relative rounded-xl overflow-hidden shadow-sm">
                        <img
                          src={post.img}
                          alt={post.title}
                          className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute bottom-0 bg-black bg-opacity-60 text-white p-2 text-sm">
                          {post.title}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl shadow-md">
                <h2 className="text-xl font-bold mb-4 text-gray-800">
                  Follow Us
                </h2>
                <div className="flex flex-col space-y-3 text-gray-700">
                  <a
                    href="#"
                    className="flex items-center gap-3 hover:text-blue-600"
                  >
                    <FaFacebook size={20} />
                    Facebook
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-3 hover:text-sky-500"
                  >
                    <FaTwitter size={20} />
                    Twitter
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-3 hover:text-pink-500"
                  >
                    <FaInstagram size={20} />
                    Instagram
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-3 hover:text-blue-800"
                  >
                    <FaLinkedin size={20} />
                    LinkedIn
                  </a>
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-xl max-w-sm mx-auto transition-transform hover:scale-[1.02] duration-300">
                <h2 className="text-xl font-bold text-gray-800 text-center mb-4">
                  Author
                </h2>

                <div className="flex flex-col items-center text-center animate-fadeIn">
                  <img
                    src={post?.profile?.image}
                    alt="Author"
                    className="w-24 h-24 rounded-full object-cover border-4 border-blue-500 mb-3 hover:scale-105 transition-transform duration-300"
                  />

                  <h3 className="text-lg font-semibold text-gray-900">
                    {post?.profile?.full_name}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1 mb-4 px-4">
                    {post?.profile?.bio || ""}
                  </p>

                  <div className="flex justify-center gap-6 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-1 hover:text-red-500 transition-colors duration-200">
                      <HeartIcon className="w-4 h-4" />
                      {post?.likes?.length}
                    </div>
                    <div className="flex items-center gap-1 hover:text-blue-600 transition-colors duration-200">
                      <EyeIcon className="w-4 h-4" />
                      {post.view}
                    </div>
                  </div>

                  <div className="flex items-center justify-center text-sm text-gray-500 mb-4">
                    <CalendarDaysIcon className="w-4 h-4 mr-1" />
                    {moment(post.date).format("MMMM D, YYYY")}
                  </div>

                  <div className="flex flex-wrap justify-center gap-2 text-xs font-medium">
                    {tags?.map((tag, index) => (
                      <span
                        key={index}
                        className="flex items-center gap-1 bg-blue-50 text-blue-600 px-3 py-1 rounded-full hover:bg-blue-100 transition-colors duration-200"
                      >
                        <TagIcon className="w-3 h-3" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="bg-white p-5 rounded-2xl shadow-md text-center">
                <h2 className="text-xl font-bold mb-2 text-gray-800">
                  Advertisement
                </h2>
                <div className="h-32 bg-gray-200 flex items-center justify-center rounded-xl text-gray-500">
                  Ad Space
                </div>
              </div>
              <div className="bg-white p-5 rounded-2xl shadow-md text-center">
                <h2 className="text-xl font-bold mb-2 text-gray-800">
                  Advertisement
                </h2>
                <div className="h-32 bg-gray-200 flex items-center justify-center rounded-xl text-gray-500">
                  Ad Space
                </div>
              </div>
              <div className="bg-white p-5 rounded-2xl shadow-md text-center">
                <h2 className="text-xl font-bold mb-2 text-gray-800">
                  Advertisement
                </h2>
                <div className="h-32 bg-gray-200 flex items-center justify-center rounded-xl text-gray-500">
                  Ad Space
                </div>
              </div>
              <div className="bg-white p-5 rounded-2xl shadow-md text-center">
                <h2 className="text-xl font-bold mb-2 text-gray-800">
                  Advertisement
                </h2>
                <div className="h-32 bg-gray-200 flex items-center justify-center rounded-xl text-gray-500">
                  Ad Space
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CommentSection post={post} fetchPost={fetchPost} />

      <BlogFooter />
    </div>
  );
};

export default BlogDetailPage;
