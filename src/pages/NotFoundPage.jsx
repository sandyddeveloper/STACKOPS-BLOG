import React from 'react';
import { Link } from 'react-router-dom'; 
import Footer from '../components/ui/Footer';

const NotFoundPage = () => {
  return (
    <>
    <main className="min-h-screen bg-[#0b1222] flex flex-col justify-center items-center px-6 py-24 sm:py-32 text-white">
      {/* Logo */}
      <div className="absolute top-8 left-8">
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="https://discordbanners.vercel.app/static/img/logo.svg" 
            alt="Logo"
            className="w-8 h-8"
          />
          <span className="text-xl font-bold">StackBlog</span>
        </Link>
      </div>
      <div className="text-center max-w-xl">
        <p className="text-sm font-semibold text-indigo-400 tracking-wide uppercase">404 error</p>
        <h1 className="mt-4 text-4xl sm:text-6xl font-bold text-white">Page not found</h1>
        <p className="mt-4 text-lg text-gray-400">
          Sorry, we couldn’t find the page you were looking for. It might have been removed or doesn't exist anymore.
        </p>
        <div className="mt-10">
          <img
            src="/404-illustration.svg" 
            alt="Not Found"
            className="w-80 mx-auto"
          />
        </div>
        <div className="mt-10 flex justify-center gap-4">
          <Link
            to="/"
            className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-2 rounded-md text-sm font-medium transition"
          >
            Go Home
          </Link>
          <Link
            to="/contact"
            className="text-sm py-2 font-medium text-gray-300 hover:text-white transition"
          >
            Contact Support →
          </Link>
        </div>
      </div>

    </main>
    <Footer />
    </>
  );
};

export default NotFoundPage;
