import { User, LayoutDashboard, Settings, LogOut, X, Menu } from "lucide-react";
import { Home, Info, Layers, FileText, Phone } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow-md rounded-3xl mx-auto my-4 px-6 py-3 max-w-[95%] flex items-center justify-between relative z-50">
      {/* Left: Logo + Title */}
      <div className="flex items-center space-x-2">
        <img
          src="https://discordbanners.vercel.app/static/img/logo.svg"
          alt="Logo"
          className="w-10 h-10"
        />
        <h1 className="text-xl font-bold hidden md:block">StackBlog</h1>
      </div>

      {/* Center: Desktop Menu */}
      <ul className="hidden md:flex space-x-6 text-sm font-semibold">
        <li>
          <a href="/blog" className="hover:opacity-80">
            HOME
          </a>
        </li>
        <li>
          <a href="#" className="hover:opacity-80">
            ABOUT
          </a>
        </li>
        <li>
          <a href="#" className="hover:opacity-80">
            CATEGORIES
          </a>
        </li>
        <li>
          <a href="#" className="hover:opacity-80">
            POSTS
          </a>
        </li>
        <li>
          <a href="#" className="hover:opacity-80">
            CONTACT
          </a>
        </li>
      </ul>

      {/* Right: Profile + Mobile Menu */}
      <div className="flex items-center space-x-4">
        {/* Profile Menu */}
        <div className="relative group hidden md:flex">
          <div className="flex items-center space-x-3 bg-white px-3 py-1 rounded-full shadow-sm cursor-pointer">
            <img
              className="w-8 h-8 rounded-full ring-2 ring-purple-400 md:w-9 md:h-9"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="User"
            />
            <p className="text-xs font-medium text-gray-800 hidden sm:block">
              Santhosh
            </p>
          </div>
          <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-300 z-50">
            <ul className="py-1 text-sm text-gray-700">
              <li
                className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => navigate("/profile")}
              >
                <User className="w-4 h-4 mr-2" />
                Profile
              </li>
              <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <LayoutDashboard className="w-4 h-4 mr-2" />
                Dashboard
              </li>
              <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </li>
              <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-500">
                <LogOut className="w-4 h-4 mr-2" />
                Sign out
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(true)} className="text-gray-700">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {isMenuOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-30 z-40"
            onClick={() => setIsMenuOpen(false)}
          ></div>

          {/* Sidebar */}
          <div className="fixed top-0 left-0 w-64 h-full bg-white z-50 shadow-lg p-4 flex flex-col space-y-4 animate-slide-in">
            {/* Close button */}
            <div className="flex justify-end">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-600 hover:text-black"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Sidebar links */}
            <ul className="text-sm font-medium space-y-4 text-gray-700">
              <li className="flex items-center space-x-2 hover:bg-gray-100 px-3 py-2 rounded" onClick={() => navigate("/blog")}>
                <Home className="w-4 h-4" />
                <span>HOME</span>
              </li>
              <li className="flex items-center space-x-2 hover:bg-gray-100 px-3 py-2 rounded">
                <Info className="w-4 h-4" />
                <span>ABOUT</span>
              </li>
              <li className="flex items-center space-x-2 hover:bg-gray-100 px-3 py-2 rounded">
                <Layers className="w-4 h-4" />
                <span>CATEGORIES</span>
              </li>
              <li className="flex items-center space-x-2 hover:bg-gray-100 px-3 py-2 rounded">
                <FileText className="w-4 h-4" />
                <span>POSTS</span>
              </li>
              <li className="flex items-center space-x-2 hover:bg-gray-100 px-3 py-2 rounded">
                <Phone className="w-4 h-4" />
                <span>CONTACT</span>
              </li>
            </ul>
            <div className="relative group">
              {/* Profile display */}
              <p>Profile Section</p>
              <div className="flex items-center space-x-3 bg-white px-4 py-2  cursor-pointer">
                <img
                  className="w-8 h-8 rounded-full ring-2 ring-purple-400 md:w-10 md:h-10"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="User"
                />
                <p className="text-xs font-medium text-gray-800 md:text-sm">
                  Santhosh
                </p>
              </div>

              {/* Dropdown menu */}

              <ul className="py-1 text-sm text-gray-700">
                <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => navigate('/profile')}>
                  <User className="w-4 h-4 mr-2" />
                  Profile
                </li>
                <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <LayoutDashboard className="w-4 h-4 mr-2" />
                  Dashboard
                </li>
                <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <Settings className="w-4 h-4 mr-2" />
                  Settings
                </li>
                <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-500">
                  <LogOut className="w-4 h-4 mr-2" />
                  Sign out
                </li>
              </ul>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
