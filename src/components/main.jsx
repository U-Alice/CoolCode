import GradeCalculator from "./GradeCalculator";
import Palindrome from "./palindrome";
import Reverser from "./sentencereverser";
import Third from "./third";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
function Main(props) {
  const [reverser, setReverser] = useState(false);
  const [opacity, setOpacity] = useState("opacity-100");
  const [palindrome, setPalindrome] = useState(false);
  const [gradeCalculator, setGradeCalculator] = useState(false);
  const [dark, setDark] = useState(false);
  const [theme, setTheme] = useState('');
  useEffect(()=>{
    if(dark){
      setTheme('dark');
    }else{
      setTheme('')
    }
  })
  return (
    <React.Fragment>
      <body className={theme}>
        <div
          className={`bg-gray-50 ${opacity} dark:bg-gray-800 dark:text-white`}
        >
          <nav class="bg-slate-300 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800 yy fixed z-10 w-full shadow-xl shadow-slate-400 dark:shadow-sm dark:shadow-slate-400">
            <div class="container flex flex-wrap justify-between items-center mx-auto">
              <div class="flex items-center">
                <img
                  src="data:image/jpeg;base64,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"
                  class="mr-3 h-6 sm:h-9"
                  alt="Logo"
                />
                <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                  C
                  <span>
                    <i class="fa-solid fa-eye"></i>
                    <i class="fa-solid fa-eye"></i>
                  </span>
                  LCODE
                </span>
              </div>
              <div class="flex items-center md:order-2">
                <button
                  type="button"
                  class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                  id="user-menu-button"
                  aria-expanded="false"
                  data-dropdown-toggle="dropdown"
                  onClick={() => {
                    setDark(!dark);
                  }}
                >
                  <i class="fa-solid fa-moon dark:text-white text-white text-xl"></i>
                </button>
                <div
                  class="hidden z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                  id="dropdown"
                >
                  <div class="py-3 px-4">
                    <span class="block text-sm text-gray-900 dark:text-white">
                      Bonnie Green
                    </span>
                    <span class="block  text-sm font-medium text-gray-500 truncate dark:text-gray-400">
                      name@flowbite.com
                    </span>
                  </div>
                  <ul class="py-1" aria-labelledby="dropdown">
                    <li>
                      <a
                        href="#"
                        class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Earnings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Sign out
                      </a>
                    </li>
                  </ul>
                </div>
                <button
                  data-collapse-toggle="mobile-menu-2"
                  type="button"
                  class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  aria-controls="mobile-menu-2"
                  aria-expanded="false"
                >
                  <span class="sr-only">Open main menu</span>
                  <svg
                    class="w-6 h-6"
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
                  <svg
                    class="hidden w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
              <div
                class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
                id="mobile-menu-2"
              >
                <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                  <li>
                    <a
                      href="#"
                      class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                      aria-current="page"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <button class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                      About
                    </button>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="w-full flex md:flex-row h-screen">
            <div className="flex absolute z-0 gap-x-96">
              <div className="flex justify-center w-12 md:w-64 z-0 mt-64">
                <i class="fa-solid fa-code text-6xl text-blue-300 md:text-9xl md:text-blue-100 ml-36 md:mt-8 md:ml-0"></i>
              </div>
              <div className="flex justify-start items-start  z-0 mt-96">
                <i class="fa-solid fa-hand-spock text-6xl  text-blue-100 md:text-9xl"></i>
              </div>
            </div>
            <div>
              {/* <i class="fa-solid fa-face-smile-wink z-10 ml-36 text-6xl text-blue-300 md:mt-32 md-4"></i> */}
              <h3 className="mt-36 text-4xl md:text-6xl font-pacifico mb-32 ml-4 md:ml-12 mt-8 text-slate-700 drop-shadow-md shadow-blue-500 leading-loose text-center dark:text-slate-200">
                YOUR GREAT CODING EXPERIENCE
              </h3>
            </div>
            <img
              src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNvZGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt="coding"
              className="w-1/2 md:w-1/3 md:h-3/4 md:mx-16 h-3/6 md:4/6 rounded-sm mt-32 md:mt-24 z-10 shadow-2xl shadow-blue-200 transition duration-500 hover:scale-90 z-0 dark:shadow-sm dark:shadow-slate-100"
            />
          </div>

          <div className="md:w-80% w-5/6 pl-4 px-4 md:ml-36 ml-16 bg-white pb-28 rounded-sm bg-blue-200 md:mt-12">
            <div className="pt-8">
              <h3 className="md:ml-72 md:font-medium md:font-arima md:font-bold ml-16 font-medium font-arima font-bold dark:text-slate-900">
                START YOUR JOURNEY WITH YOUR FAVORITE CODING LANGUAGE
              </h3>
              <div className="md:w-2/3 w-5/6 md:ml-64 ml-8 bg-slate-700 h-24 rounded-sm md:mt-4 ">
                <form>
                  <input
                    type="search"
                    className="md:w-2/3 md:h-12 rounded-sm md:mt-6 md:mx-12 0 w-2/3 h-12  mt-6 ml-8"
                  />
                  <span>
                    <button className="bg-blue-100 md:h-8 md:w-24 rounded-sm shadow-sm shadow-white text-white ml-4">
                      SEARCH
                    </button>
                  </span>
                </form>
              </div>
            </div>
            <div className="flex mt-12 md:gap-4 gap-2 md:mt-12 md:mx-56 w-120">
              <div
                className="md:h-64 md:w-96 w-96 pt-4 bg-white rounded-sm drop-shadow md:pl-8 md:pt-4 dark:bg-gray-300"
                onClick={() => {
                  setReverser(true);
                  setOpacity(`opacity-50 h-120 overflow-y-hidden `);
                }}
              >
                <div className="rounded-full w-16 h-16 bg-white border-slate-700 border-4 border-solid drop-shadow ml-14 relative">
                  <i class="fas fa-sort-alpha-down text-slate-700 text-3xl grid place-items-center mt-2"></i>
                </div>
                <h3 className="font-arima font-bold text-blue-900900 md:text-2xl mt-8 font-arima dark:text-slate-900 text-xl">
                  sentence reverser
                </h3>
                <i class="fas fa-arrow-circle-right text-4xl text-blue-200 md:ml-16 ml-16 animate-bounce "></i>
              </div>
              <div
                className="md:h-64 w-96 h-1/3 bg-blue-900 rounded-sm drop-shadow mt-8 pl-8 pt-4"
                onClick={() => {
                  setPalindrome(true);
                  setOpacity(`opacity-50 h-120 overflow-y-hidden `);
                }}
              >
                <div className="rounded-full w-16 h-16 bg-white border-slate-700 border-4 border-solid drop-shadow ml-8 md:ml-12 relative">
                  <i class="fas fa-search text-slate-700 text-3xl grid place-items-center mt-2"></i>
                </div>
                <h3 className="font-arima text-sm font-bold text-white md:text-2xl mt-8">
                  palindrome finder
                </h3>
                <div className="md:mt-4 md:ml-16 mt-2 ml-12">
                  <i class="fas fa-arrow-circle-right text-4xl text-blue-200 animate-fade-in-down"></i>
                </div>
              </div>
              <div
                className="md:h-64 w-96 bg-white rounded-sm drop-shadow pl-8 pt-4 dark:bg-gray-300 dark:text-slate-900"
                onClick={() => {
                  setGradeCalculator(true);
                  setOpacity(`opacity-50 h-120 overflow-y-hidden `);
                }}
              >
                <div className="rounded-full w-16 h-16 bg-white border-slate-700 border-4 border-solid drop-shadow md:ml-14 ml-8 relative ">
                  <i class="fas fa-percentage text-slate-700 text-3xl grid place-items-center mt-2 "></i>
                </div>
                <h3 className="font-arima font-bold text-blue-900  md:text-xl mt-8 ml-4 dark:text-slate-900 text-sm">
                  Grade calculator
                </h3>
                <div className="md:mt-4 md:ml-20 mt-4 ml-12">
                  <i class="fas fa-arrow-circle-right text-4xl text-blue-200 animate-bounce"></i>
                </div>
              </div>
            </div>
          </div>
          <Third />
          <footer className="w-full h-32 bg-blue-200 pt-14 mt-32 flex gap-4">
            <span class=" md:ml-12 ml-2 text-xl text-blue-900 font-semibold whitespace-nowrap dark:text-white">
              C
              <span>
                <i class="fa-solid fa-eye"></i>
                <i class="fa-solid fa-eye"></i>
              </span>
              lCODE
            </span>
            <div className="flex flex-row gap-4 md:ml-12 ml-4">
              <i className="fa-brands fa-instagram text-white text-3xl"></i>
              <i className="fa-brands fa-linkedin text-white text-3xl"></i>
              <i className="fa-brands fa-twitter text-white text-3xl"></i>
              <i className="fa-solid fa-mailbox text-white text-3xl"></i>
              <i className="fa-brands fa-github -ml-4 text-white text-3xl"></i>
            </div>
            <h3 className="font-arima font-bold text-blue-900 font-light hidden md:block font-sm md:ml-12">
              Copyright @2022 U.Alice compiled javascript exercices
            </h3>
            <input
              type="text"
              className="h-12 md:w-1/3 rounded-sm md:ml-4 -mt-4"
            />
            <button className="bg-slate-700 md:w-32 w-16 h-12 -mt-4 -ml-8 rounded-full rounded-sm text-white">
            send
            </button>
          </footer>
        </div>
        <GradeCalculator
          trigger={gradeCalculator}
          setTrigger={setGradeCalculator}
          setBackgroundOpacity={setOpacity}
        />
        <Palindrome
          trigger={palindrome}
          setTrigger={setPalindrome}
          setBackgroundOpacity={setOpacity}
        />
        <Reverser
          trigger={reverser}
          setTrigger={setReverser}
          setBackgroundOpacity={setOpacity}
        />{" "}
      </body>
    </React.Fragment>
  );
}
export default Main;
