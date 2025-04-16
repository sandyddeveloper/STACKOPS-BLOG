import React from 'react'
import { FaEnvelope, FaTwitter, FaInstagram,  FaGithub, FaDiscord, FaLinkedin, FaUser } from "react-icons/fa";

const BlogFooter = () => {
  return (
    <div
    className="w-full bg-cover bg-center py-10 px-6 sm:px-12"
    style={{
      backgroundImage: `url('/asset.webp')`, 
    }}
  >
    {/* Top section */}
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-black">
      
      {/* Contact */}
      <div className="bg-white p-6 rounded-3xl shadow-md">
        <h3 className="text-lg font-bold underline mb-4">CONTACT</h3>
        <div className="flex items-center gap-3 mb-3">
          <div className="bg-black text-white p-2 rounded-lg">
            <FaEnvelope />
          </div>
          <span>sandy.webdev18@gmail.com</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-black text-white p-2 rounded-lg">
            <FaGithub />
          </div>
          <span>sandyddeveloper</span>
        </div>
      </div>

      {/* Socials */}
      <div className="bg-white p-6 rounded-3xl shadow-lg">
  <h3 className="text-lg font-bold underline mb-6 tracking-wide text-gray-800">SOCIALS</h3>
  <div className="grid grid-cols-5 gap-4 justify-items-center">
    {[
      { icon: FaUser, label: "Protfolio" },
      { icon: FaTwitter, label: "Twitter" },
      { icon: FaInstagram, label: "Instagram" },
      { icon: FaDiscord, label: "Discord" },
      { icon: FaLinkedin, label: "Linkedin" },
    ].map(({ icon: Icon, label }, i) => (
      <div
        key={i}
        className="flex flex-col items-center gap-2 group cursor-pointer"
      >
        <div className="bg-black text-white p-3 rounded-full shadow-md group-hover:shadow-purple-300 transition-shadow duration-300">
          <Icon className="text-md" />
        </div>
        <span className="text-xs text-gray-600 group-hover:text-purple-500 transition-colors duration-300">{label}</span>
      </div>
    ))}
  </div>
</div>


      {/* Newsletter */}
      <div className="bg-white p-6 rounded-3xl shadow-md">
        <h3 className="text-lg font-bold underline mb-4">NEWSLETTER</h3>
        <p className="mb-4 text-sm">
          Stay ahead of the curve with our exclusive daily newsletter directly in your inbox!
        </p>
        <form className="flex overflow-hidden rounded-lg">
          <input
            type="email"
            placeholder="your e-mail"
            className="px-4 py-2 w-full text-sm outline-none bg-[#e1e7f6]"
          />
          <button
            type="submit"
            className="bg-black text-white px-4 py-2 text-sm font-semibold"
          >
            subscribe
          </button>
        </form>
      </div>
    </div>

    {/* Bottom copyright bar */}
    <div className="mt-10 bg-white mx-auto max-w-6xl rounded-full py-3 text-center text-sm text-black shadow-sm">
    <span className="block sm:inline">
    © 2025 <span className="font-semibold text-black">StackOps</span>. Designed & Developed by{' '}
  </span>
  <a
    href="https://santhosh.devxnet.cloud/"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block font-semibold text-purple-500 hover:text-purple-600 transition-colors duration-300"
  >
    Santhosh Raj
  </a>
    </div>
  </div>
);
};

export default BlogFooter