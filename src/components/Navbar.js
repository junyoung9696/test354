import Link from "next/link";
import { useState, useEffect } from "react";
import Authentication from "./authentication";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <Authentication setIsLoggedIn={setIsLoggedIn} />
      {/* <nav className="flex items-center justify-between flex-wrap bg-black p-6 sticky top-0 z-10">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">
            <Link href="/">KETI Project</Link>
          </span>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <Link
              href="/menu/chart"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              Dashboard & Plotly
            </Link>
            <Link
              href="/menu/three"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              3D Data Visualization
            </Link>
            <Link
              href="/menu/vrar"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              VR & AR
            </Link>

            {isLoggedIn && (
              <Link
                href="/menu/admin"
                className="block mt-4 lg:inline-block lg:mt-0 text-red-300 hover:text-white"
              >
                Admin
              </Link>
            )}
          </div>

          <div>
            <a
              href="#"
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
            >
              Login
            </a>
          </div>
        </div>
      </nav>
      <style jsx>{`
        Link {
          cursor: pointer;
        }
      `}</style> */}

      <nav className="bg-black sticky top-0 z-10 text-white p-3 shadow-xl">
        <div className="font-semibold text-3xl font-barlow text-center mt-2 tracking-wide">
          <Link href="/">KETI Project</Link>
        </div>

        <div className="text-sm flex flex-wrap items-center justify-between px-8">
          <div className="flex space-x-10  text-teal-200">
            <div>
              <Link className="hover:text-gray-300" href="/menu/chart">
                Dashboard
              </Link>
            </div>
            <div>
              <Link className="hover:text-gray-300" href="/menu/three">
                3D Visualization
              </Link>
            </div>
            <div>
              <Link className="hover:text-gray-300" href="/menu/vrar">
                VR & AR
              </Link>
            </div>
          </div>

          <div className="flex items-center space-x-8">
            {isLoggedIn && (
              <div className="text-red-200">
                <Link className="hover:text-gray-300" href="/menu/admin">
                  Admin
                </Link>
              </div>
            )}

            <div>
              <Link
                href="/user/login"
                className="border px-5 py-2 border-white rounded-lg text-white hover:border-transparent hover:text-teal-500 hover:bg-white hidden sm:inline-block"
              >
                Login
              </Link>
              {/* login된 상태 시 log out 구현 */}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
