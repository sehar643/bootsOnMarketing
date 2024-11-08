import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        {/* Apply padding only on medium and larger screens */}
        <div className="max-w-screen-xl flex items-center justify-between mx-auto md:px-14">
          {/* Toggler Button - Order 1 on mobile */}
          <button 
            data-collapse-toggle="navbar-sticky" 
            type="button" 
            className="order-1 md:order-2 inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden" 
            aria-controls="navbar-sticky" 
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>

          {/* Logo - Order 2 on mobile */}
          <a href="https://flowbite.com/" className="order-2 md:order-1 flex items-center space-x-3 rtl:space-x-reverse">
            <img src="/src/assets/images/logo.jpg" className="h-16 md:h-24" alt="Flowbite Logo" />
          </a>

          {/* Get A Quote Button - Order 3 on mobile */}
          <button 
            type="button" 
            className="order-3 md:order-3 text-white bg-black font-medium rounded-lg text-lg px-4 py-2 text-center"
          >
            Get A Quote
          </button>

          {/* Navbar Links - Visible on larger screens */}
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a href="#" className="block py-2 px-1 font-bold " aria-current="page">Capabilities</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-1 font-bold ">Our Portfolio</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-1 font-bold ">Pricing Plan</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-1 font-bold ">Partner With Us</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-1 font-bold ">Careers</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-1 font-bold ">Agency</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
