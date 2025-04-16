import React from "react";
import Footer from "../components/ui/Footer";

const AboutPage = () => {
  return (
    <>
      <nav
        class="py-5 border-b-default border-solid border-gray-200 z-10 w-full bg-inherit lg:fixed"
        id="topnav"
      >
        <div class="mx-auto max-w-7xl  lg:px-8">
          <div class="w-full flex flex-col lg:flex-row">
            <div class="flex justify-between lg:hidden px-4">
              <a href="/" class="flex items-center">
                <img
                  src="https://discordbanners.vercel.app/static/img/logo.svg"
                  alt="logo"
                />
              </a>
              <button
                data-collapse-toggle="navbar"
                type="button"
                class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                aria-controls="navbar-default"
                aria-expanded="false"
              >
                <span class="sr-only">Open main menu</span>
                <svg
                  class="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div
              class="hidden w-full lg:flex justify-between max-lg:bg-white py-5 max-lg:mt-1 max-lg:px-4 max-lg:shadow-lg max-lg:shadow-gray-200 max-lg:h-auto max-lg:overflow-auto transition-all duration-500 delay-200 "
              id="navbar"
            >
              <ul class="flex lg:items-center max-lg:gap-4 max-lg:mb-4 flex-col mt-4 lg:flex-1 md:mt-0 lg:flex-row">
                <li>
                  <a
                    href="javascript:;"
                    class="text-gray-500 text-sm font-medium hover:text-prime-blue-700 transition-all duration-500 mb-2 block lg:mr-6 lg:text-base md:mb-0 md:mr-3 hover:text-gray-900"
                  >
                    Go Back
                  </a>
                </li>
              </ul>
              <a
                href="/"
                class="hidden lg:flex items-center"
              >
                <img
                  src="https://discordbanners.vercel.app/static/img/logo.svg"
                  alt="logo"
                />
              </a>
            </div>
          </div>
        </div>
      </nav>
      <section class="pt-8 lg:pt-32 bg-[url('https://pagedone.io/asset/uploads/1691055810.png')] bg-center bg-cover">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center">
  <div class="border border-indigo-600 p-1 w-60 mx-auto rounded-full flex items-center justify-between mb-4">
    <span class="font-inter text-xs font-medium text-gray-900 ml-3">
      Discover Our Journey & Vision
    </span>
    <a
      href="javascript:;"
      class="w-8 h-8 rounded-full flex justify-center items-center bg-indigo-600"
    >
      <svg
        width="17"
        height="16"
        viewBox="0 0 17 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.83398 8.00019L12.9081 8.00019M9.75991 11.778L13.0925 8.44541C13.3023 8.23553 13.4073 8.13059 13.4073 8.00019C13.4073 7.86979 13.3023 7.76485 13.0925 7.55497L9.75991 4.22241"
          stroke="white"
          stroke-width="1.6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </a>
  </div>
  <h1 class="max-w-2xl mx-auto text-center font-manrope font-bold text-4xl text-gray-900 mb-5 md:text-5xl leading-[50px]">
    Building Together With Passion &
    <span class="text-indigo-600">Purpose</span>
  </h1>
  <p class="max-w-sm mx-auto text-center text-base font-normal leading-7 text-gray-500 mb-9">
    Our story is shaped by collaboration, innovation, and the commitment to
    make a lasting impact through technology and teamwork.
  </p>
  <a
    href="javascript:;"
    class="w-full md:w-auto mb-14 inline-flex items-center justify-center py-3 px-7 text-base font-semibold text-center text-white rounded-full bg-indigo-600 shadow-xs hover:bg-indigo-700 transition-all duration-500"
  >
    Learn More About Us
    <svg
      class="ml-2"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.5 15L11.0858 11.4142C11.7525 10.7475 12.0858 10.4142 12.0858 10C12.0858 9.58579 11.7525 9.25245 11.0858 8.58579L7.5 5"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </a>
</div>

      

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <h2 className="text-4xl font-bold text-gray-900 leading-[3.25rem] mb-6 lg:max-w-3xl mx-auto">
              Developed from scratch for seamless online functionality
            </h2>
            <p className="text-base font-normal text-gray-500 lg:max-w-2xl mx-auto mb-8">
              Using technology to make finance simpler, smarter and more
              rewarding.
            </p>
            <div className="flex flex-col justify-center md:flex-row gap-5 max-w-lg mx-auto md:max-w-2xl lg:max-w-full">
              <button className="bg-indigo-600 py-3 px-6 rounded-full text-sm font-semibold text-white transition-all duration-500 hover:bg-indigo-700">
                Get started
              </button>
              <button className="bg-indigo-50 py-3 px-6 rounded-full text-sm font-semibold text-indigo-600 transition-all duration-500 hover:bg-indigo-100">
                Learn more ➡
              </button>
            </div>
          </div>

          {/* Card Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-lg mx-auto md:max-w-2xl lg:max-w-full">
            {/* Card 1 */}
            <div className="relative w-full h-auto md:col-span-2">
              <div className="bg-gray-800 rounded-2xl flex flex-wrap justify-between">
                <div className="p-5 xl:p-8 w-full md:w-1/2">
                  <div className="block">{/* SVG Icon */}</div>
                  <h3 className="text-lg font-bold xl:text-xl text-white py-5 w-full xl:w-64">
                    Accomplish tasks swiftly with online tools.
                  </h3>
                  <p className="text-xs font-normal text-gray-300 w-full mb-8 xl:w-64">
                    Get quoted and covered in under 10 minutes online. No
                    paperwork or waiting anymore.
                  </p>
                  <button className="py-2 px-5 border border-gray-300 rounded-full text-xs text-white font-semibold flex items-center gap-2 transition-all duration-500 hover:bg-white/5">
                    View More ➡{/* Right Arrow SVG */}
                  </button>
                </div>
                <div className="relative hidden md:block md:w-1/2">
                  <img
                    src="https://pagedone.io/asset/uploads/1695028873.png"
                    alt="About Visual"
                    className="h-full ml-auto object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative w-full h-auto">
              <div className="bg-indigo-500 rounded-2xl p-5 xl:p-8 h-full">
                <div className="block">{/* SVG Icon */}</div>
                <h3 className="py-5 text-white text-lg font-bold xl:text-xl">
                  Improved technology yields greater value
                </h3>
                <p className="text-xs font-normal text-white mb-8">
                  We’ve eliminated old analogue processes with state-of-the-art
                  tech.
                </p>
                <button className="py-2 px-5 border border-gray-300 rounded-full text-xs text-white font-semibold flex items-center gap-2 transition-all duration-500 hover:bg-white/5">
                  View More ➡{/* Right Arrow SVG */}
                </button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative w-full h-auto">
              <div className="bg-violet-500 rounded-2xl p-5 xl:p-8 h-full">
                <div className="block">{/* SVG Icon */}</div>
                <h3 className="py-5 text-white text-lg font-bold xl:text-xl">
                  Build wealth with insurance planning
                </h3>
                <p className="text-xs font-normal text-white mb-8">
                  Every life plan policy has a built-in wealth bonus, and we
                  contribute too.
                </p>
                <button className="py-2 px-5 border border-gray-300 rounded-full text-xs text-white font-semibold flex items-center gap-2 transition-all duration-500 hover:bg-white/5">
                  View More ➡{/* Right Arrow SVG */}
                </button>
              </div>
            </div>
          </div>
        </div>
      <section class="py-24 relative xl:mr-0 lg:mr-5 mr-0">
        <div class="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
          <div class="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
            <div class="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
              <div class="w-full flex-col justify-center items-start gap-8 flex">
                <div class="flex-col justify-start lg:items-start items-center gap-4 flex">
                  <h6 class="text-gray-400 text-base font-normal leading-relaxed">
                    Who We Are
                  </h6>
                  <div class="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                    <h2 class="text-indigo-700 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                      Our Journey of Impact and Innovation
                    </h2>
                    <p class="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                      Fueled by passion and purpose, our journey has been about
                      pushing boundaries and delivering excellence. We've turned
                      vision into reality through dedication, creativity, and a
                      shared commitment to innovation.
                    </p>
                  </div>
                </div>
                <div class="w-full flex-col justify-center items-start gap-6 flex">
                  <div class="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                    <div class="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                      <h4 class="text-gray-900 text-2xl font-bold font-manrope leading-9">
                        01+ Years
                      </h4>
                      <p class="text-gray-500 text-base font-normal leading-relaxed">
                        Shaping the digital future with timeless impact
                      </p>
                    </div>
                    <div class="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                      <h4 class="text-gray-900 text-2xl font-bold font-manrope leading-9">
                        12+ Projects
                      </h4>
                      <p class="text-gray-500 text-base font-normal leading-relaxed">
                        Crafting solutions that redefine success
                      </p>
                    </div>
                  </div>
                  <div class="w-full h-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                    <div class="w-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                      <h4 class="text-gray-900 text-2xl font-bold font-manrope leading-9">
                        08+ Website
                      </h4>
                      <p class="text-gray-500 text-base font-normal leading-relaxed">
                        Celebrating milestones powered by innovation
                      </p>
                    </div>
                    <div class="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                      <h4 class="text-gray-900 text-2xl font-bold font-manrope leading-9">
                        99% Happy Clients
                      </h4>
                      <p class="text-gray-500 text-base font-normal leading-relaxed">
                        Building lasting relationships through trust and results
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <button class="sm:w-fit w-full group px-3.5 py-2 bg-indigo-50 hover:bg-indigo-100 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out justify-center items-center flex">
                <span class="px-1.5 text-indigo-600 text-sm font-medium leading-6 group-hover:-translate-x-0.5 transition-all duration-700 ease-in-out">
                  Discover More
                </span>
                <svg
                  class="group-hover:translate-x-0.5 transition-all duration-700 ease-in-out"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M6.75265 4.49658L11.2528 8.99677L6.75 13.4996"
                    stroke="#4F46E5"
                    stroke-width="1.6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div class="w-full lg:justify-start justify-center items-start flex">
              <div class="sm:w-[564px] w-full sm:h-[646px] h-full sm:bg-gray-100 rounded-3xl sm:border border-gray-200 relative">
                <img
                  class="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl object-cover"
                  src="https://pagedone.io/asset/uploads/1717742431.png"
                  alt="Our Team at Work"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      </section>
      <Footer />
    </>
  );
};

export default AboutPage;
