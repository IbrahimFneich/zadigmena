
import React, { Fragment, useState, useEffect,useRef } from 'react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import './Header.css'

const products = [
  { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
  { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
  { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}



          


const Header = () => {

const [isContentHidden, setIsContentHidden] = useState(true);

const [opacity, setOpacity] = useState(0);
useEffect(() => {
  function handleScroll() {
    const distanceFromTop = divRef.current.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (distanceFromTop - windowHeight <= 0) {
      const newOpacity = 1 + (window.scrollY / windowHeight);
      setOpacity(newOpacity);
    }
  }

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

const divRef = useRef(null);


const toggleContent = () => {
  setIsContentHidden(!isContentHidden);
};

  return (
  <nav class="myheader sticky flex items-center justify-between top-4">
      <a class="flex items-center bg-[#3B415F] h-16 fade-out" ref={divRef} style={{ opacity }} >
          <img className="h-12 w-auto" src='./zadig-transparent-grey-logo-with-shadow.png' alt="" />  
      </a>
      <div class="flex space-x-4 items-center bg-[#3B415F] h-16 ">
        <span></span>
        <div class="text-white" >About US</div>
        <span></span>
      </div>
      {/* <a class="flex items-center fade-out" ref={divRef} style={{ opacity }} >
          <img className="h-12 w-auto" src='./zadig-transparent-grey-logo-with-shadow.png' alt="" />  
      </a>
      <a class="flex items-center fade-out" ref={divRef} style={{ opacity }} >
          <img className="h-12 w-auto" src='./zadig-transparent-grey-logo-with-shadow.png' alt="" />  
      </a> */}
      {/* <button onClick={toggleContent} id='toggle-button' type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
      </button>
      <div class="w-full md:block md:w-auto" id="navbar-default">
        {isContentHidden && 
        (<ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:bg-transparent bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
          </li>
          <li>
            <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
          </li>
          <li>
            <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
          </li>
          <li>
            <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
          </li>
        </ul>)
        }
      </div> */}
  </nav>
  );
}

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
