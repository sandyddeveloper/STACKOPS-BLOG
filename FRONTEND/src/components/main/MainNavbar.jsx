import {
  User,
  LayoutDashboard,
  Settings,
  LogOut,
} from "lucide-react";

export default function MNavbar() {
  return (
    <nav className="bg-white shadow-md rounded-3xl mx-auto my-4 px-6 py-3 max-w-[95%] flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <img src="https://discordbanners.vercel.app/static/img/logo.svg" alt="Logo" className="w-10 h-10" />
        <h1 className="text-xl font-bold">StackBlog</h1>
      </div>

      <ul className="hidden md:flex space-x-6 text-sm font-semibold">
        <li className="relative">
          <a href="#" className="hover:opacity-80">HOME</a>
          <span className="absolute left-0 bottom-[-4px] w-full h-[1px] bg-black"></span>
        </li>
        <li><a href="#" className="hover:opacity-80">ABOUT</a></li>
        <li><a href="#" className="hover:opacity-80">CATEGORIES</a></li>
        <li><a href="#" className="hover:opacity-80">POSTS</a></li>
        <li><a href="#" className="hover:opacity-80">CONTACT</a></li>
      </ul>

      <div className="relative group">
      <div className="flex items-center space-x-3 bg-white px-4 py-2 rounded-full shadow-sm cursor-pointer">
        <img
          className="w-10 h-10 rounded-full ring-2 ring-purple-400"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt="User"
        />
        <p className="text-sm font-medium text-gray-800">Santhosh</p>
      </div>
      <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-300 z-50">
        <ul className="py-1 text-sm text-gray-700">
          <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
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


    </nav>
  );
}
