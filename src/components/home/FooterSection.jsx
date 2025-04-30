import React from "react";

const FooterSection = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-screen-xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <a
            href="/"
            className="flex items-center justify-center mb-4 sm:mb-0"
          >
            <img
              src="https://discordbanners.vercel.app/static/img/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="ml-2 text-xl font-semibold dark:text-white">
              Stackops-Blog
            </span>
          </a>
          <ul className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <li>
              <a href="#" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 dark:border-gray-700" />
        <p className="text-center text-sm text-gray-500 dark:text-gray-400">
          © 2025{" "}
          <a href="https://santhosh.devxnet.cloud/" className="hover:underline">
            Stackops
          </a>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
