import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  Home,
  Info,
  Briefcase,
  DollarSign,
  Phone,
} from "lucide-react";

const MainNavbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <nav className="bg-white border-b border-gray-200 dark:bg-gray-900 relative z-50">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <img
            src="https://discordbanners.vercel.app/static/img/logo.svg"
            className="h-8"
            alt="Logo"
          />
          <span className="text-3xl font-semibold whitespace-nowrap dark:text-white">
            StackBlog
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6 text-[17px] font-medium">
          <li><Link to="/" className="text-blue-700 dark:text-blue-500">Home</Link></li>
          <li><Link to="/about" className="text-gray-700 hover:text-blue-700 dark:text-white dark:hover:text-blue-500">About</Link></li>
          <li><Link to="/services" className="text-gray-700 hover:text-blue-700 dark:text-white dark:hover:text-blue-500">Services</Link></li>
          <li><Link to="/pricing" className="text-gray-700 hover:text-blue-700 dark:text-white dark:hover:text-blue-500">Pricing</Link></li>
          <li><Link to="/contact" className="text-gray-700 hover:text-blue-700 dark:text-white dark:hover:text-blue-500">Contact</Link></li>
        </ul>

        {/* Right side: Avatar + Mobile Menu Toggle */}
        <div className="flex items-center space-x-4">
          {/* Avatar (Always visible) */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="flex text-sm bg-gray-800 rounded-full focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600"
            >
              <img
                className="w-8 h-8 rounded-full"
                src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                alt="User"
              />
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-md dark:bg-gray-700 z-50">
                <div className="px-4 py-3">
                  <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
                  <span className="block text-sm text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
                </div>
                <ul className="py-2">
                  <li><Link to="/dashboard" className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200">Dashboard</Link></li>
                  <li><Link to="/settings" className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200">Settings</Link></li>
                  <li><Link to="/earnings" className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200">Earnings</Link></li>
                  <li><Link to="/logout" className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200">Sign out</Link></li>
                </ul>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleSidebar}
            className="md:hidden text-gray-500 hover:bg-gray-100 p-2 rounded-lg dark:text-gray-400 dark:hover:bg-gray-700"
          >
            {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Sidebar for Mobile */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-900 text-white transform transition-transform duration-300 z-50 ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <span className="text-lg font-semibold">Menu</span>
          <button onClick={toggleSidebar}>
            <X className="w-6 h-6 text-gray-400 hover:text-white" />
          </button>
        </div>
        <ul className="pt-6 px-4 flex flex-col space-y-5 text-base font-medium">
          <li>
            <Link
              to="/"
              onClick={toggleSidebar}
              className="flex items-center space-x-3 hover:text-blue-400"
            >
              <Home className="w-5 h-5" />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={toggleSidebar}
              className="flex items-center space-x-3 hover:text-blue-400"
            >
              <Info className="w-5 h-5" />
              <span>About</span>
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              onClick={toggleSidebar}
              className="flex items-center space-x-3 hover:text-blue-400"
            >
              <Briefcase className="w-5 h-5" />
              <span>Services</span>
            </Link>
          </li>
          <li>
            <Link
              to="/pricing"
              onClick={toggleSidebar}
              className="flex items-center space-x-3 hover:text-blue-400"
            >
              <DollarSign className="w-5 h-5" />
              <span>Pricing</span>
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={toggleSidebar}
              className="flex items-center space-x-3 hover:text-blue-400"
            >
              <Phone className="w-5 h-5" />
              <span>Contact</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MainNavbar;