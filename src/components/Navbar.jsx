import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from '../img/logo.png';
import { NavLink } from 'react-router-dom';
import { useLoginContext } from '../context/LoginProvider';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const {isLogged,setIsLogged} = useLoginContext();

  
console.log('islogged=',isLogged);
console.log('localStorage.getItem("isLoggedUltra")', localStorage.getItem("isLoggedUltra"))

 

const  handleLogoutButton = () => {
  
    setIsLogged(false)
    localStorage.setItem("isLoggedUltra",false)
  
}



  return (
    <Disclosure as="nav" className="bg-third-bg">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-text-color3 hover:bg-gray-700 hover:text-color3 focus:outline-none   focus:ring-white border border-text-color3 transition-all">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-8 w-auto"
                    src={logo}
                    alt="Your Company"
                  /> 
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                  <NavLink
                         
                        to="/"
                        className='text-text-color3 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium transition-all cursor-pointer'  
                         
                      >
                        Home
                      </NavLink>
                      <NavLink
                         
                        to="/cities"
                        className='text-text-color3 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium transition-all cursor-pointer'  
                         
                      >
                        Cities
                      </NavLink>
                      <NavLink
                         
                        to="/people"
                        className='text-text-color3 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium transition-all cursor-pointer'  
                         
                      >
                        People
                      </NavLink>

                      {isLogged ? (
                        
                        <NavLink
                         
                        to="/login"
                        className='text-text-color3 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium transition-all cursor-pointer'  
                         onClick={handleLogoutButton}
                      >
                        Logout
                      </NavLink>
                      ) : (
                        <NavLink
                         
                         to="/login"
                         className='text-text-color3 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium transition-all cursor-pointer'  
                          
                       >
                         Login
                       </NavLink>
                      )}
                      
                      
                  </div>
                </div>
              </div>
               
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
            <NavLink
                         
                         to="/"
                         className='text-text-color3 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium transition-all'  
                          
                       >
                         Home
                       </NavLink>
                       <NavLink
                          
                         to="/cities"
                         className='text-text-color3 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium transition-all'  
                          
                       >
                         Cities
                       </NavLink>
                       <NavLink
                          
                         to="/people"
                         className='text-text-color3 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium transition-all'  
                          
                       >
                         People
                       </NavLink>
 
                       {isLogged ? (
                         <NavLink
                          
                         to="/login"
                         className='text-text-color3 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium transition-all'  
                          onClick={handleLogoutButton}
                       >
                         Logout
                       </NavLink>
                       ) : (
                         <NavLink
                          
                          to="/login"
                          className='text-text-color3 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium transition-all'  
                           
                        >
                          Login
                        </NavLink>
                       )}
             
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
