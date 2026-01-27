import { useState } from 'react';
import { Link } from 'react-router-dom';
import ccikLogoImg from '../assets/ccik_logo.png';
import instagramLogoImg from '../assets/instagram.png';
import facebookLogoImg from '../assets/facebook.png';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [dropDownMenu, setDropDownMenu] = useState(null)


  return (
    <header className='bg-[#F6F0D7] py-4 md:py-6 px-3 md:px-6 md:p-4 flex flex-col md:flex-row items-center fixed top-0 w-full z-50 transition-transform duration-300'>

      <div className="w-full flex flex-col lg:flex-row items-center -mt-3 md:-mt-4">

        {/* Mobile/Tablet */}
        <div className='flex items-center w-full lg:hidden justify-between'>
          {/* Logo */}
          <Link
            to='/'
            className='flex items-center gap-2'>
            <img
              src={ccikLogoImg}
              alt="CCIK Logo"
              className="w-12 h-12 rounded-full"
            />
          </Link>
          {/* Title */}
          <h1 className='text-green-800 text-sm sm:text-base font-semibold text-center flex-1 mx-2'>
            CHAMBER OF COMMERCE & INDUSTRIES - KASHMIR (CCIK)
          </h1>


          {/* Hamburger Menu */}
          <button
            className="ml-auto text-3xl"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* Desktop Logo + Title */}
        <div className='hidden lg:flex items-center flex-1'>
          <Link
            to='/'
            className='mr-0 md:mr-6 mb-4 md:mb-0'
          >
            <img
              src={ccikLogoImg}
              alt="CCIK Logo"
              className='w-16 h-16 md:w-20 md:h-20 rounded-full'
            />
          </Link>

          {/* Title */}
          <h1 className='text-green-800 text-xl md:text-2xl text-center md:text-left flex-1'>
            CHAMBER OF COMMERCE & INDUSTRIES - KASHMIR (CCIK)
          </h1>
        </div>

        {/* Logos */}
        <div className='hidden lg:flex flex-col lg:flex-row items-center gap-3 mt-2 md:mt-0 ml-0 md:ml-6'>

          <div className='flex items-center gap-2 shrink-0'>
            {/* Instagram */}
            <a
              href='https://www.instagram.com/the_ccik/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                src={instagramLogoImg}
                alt='Instagram Logo'
                className='w-6 h-6 md:w-7 md:h-7 hover:opacity-80 transition'
              />
            </a>

            {/* Facebook */}
            <a
              href='https://www.facebook.com/p/Chamber-of-Commerce-Industries-Kashmir-CCIK-100064548375657/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                src={facebookLogoImg}
                alt='Facebook Logo'
                className='w-6 h-6 md:w-7 md:h-7 hover:opacity-80 transition'
              />
            </a>
          </div>

          {/* Register a New Member Button*/}
          <Link
            to="/membership-form"
            className='bg-green-800 hover:bg-[#63A361] text-white px-4 py-2 rounded-lg font-semibold transition whitespace-nowrap'
          >
            Register a New Member
          </Link>
        </div>
      </div>




      {/* Navigation Menu */}
      <div className='w-full lg:w-auto mt-2 lg:bottom-0 lg:absolute lg:left-1/2 lg:-translate-x-1/2'>

        <nav className={`${mobileMenuOpen ? "flex flex-col space-y-2 mt-2" : "hidden"}
            lg:flex lg:flex-row lg:space-y-0 lg:space-x-4`}>

          {/* Home */}
          <Link
            to='/'
            className='text-green-800 lg:hover:text-green-600 transition hover:underline px-3'
          >
            Home
          </Link>

          {/* The Chamber */}
          <div className='relative w-full lg:w-auto group'>
            <button
              onClick={() =>
                setDropDownMenu(dropDownMenu === 'chamber' ? null : 'chamber')
              }
              className='w-full lg:w-auto cursor-pointer text-green-800 lg:hover:text-green-600 transition flex items-center justify-between lg:justify-start px-3'>
              <span className="hover:underline transition">The Chamber</span>
              <span className="hidden lg:inline text-sm">▾</span>
              <span className='lg:hidden'>▾</span>
            </button>

            <div className='absolute top-full left-0 hidden lg:block lg:opacity-0 lg:invisible lg:group-hover:opacity-100 lg:group-hover:visible bg-[#F6F0D7] w-48 py-2 text-green-800 shadow-lg z-50  transition-all duration-200'>

              <Link
                to='/office-bearers'
                className='block px-4 py-2 hover:bg-[#C5D89D] cursor-pointer active:bg-[#90AB8B] focus:bg-[#90AB8B] focus:outline-none'
              >
                CCIK Office Bearers
              </Link>
              <Link
                to='/committee-members'
                className='block px-4 py-2 hover:bg-[#C5D89D] cursor-pointer active:bg-[#90AB8B] focus:bg-[#90AB8B] focus:outline-none'
              >
                Committee Members
              </Link>
              <Link
                to='/past-presidents'
                className='block px-4 py-2 hover:bg-[#C5D89D] cursor-pointer active:bg-[#90AB8B] focus:bg-[#90AB8B] focus:outline-none'
              >
                Past Presidents
              </Link>
            </div>

            {dropDownMenu === 'chamber' && (
              <div className="lg:hidden ml-4 mt-2 space-y-2">
                <Link
                  to='/office-bearers'
                  className="block py-1 cursor-pointer text-green-800 active:text-[#90AB8B]"
                  onClick={() => {
                    setMobileMenuOpen(false)
                    setDropDownMenu(null)
                  }}
                >
                  CCIK Office Bearers
                </Link>
                <Link
                  to='/committee-members'
                  className="block py-1 cursor-pointer text-green-800 active:text-[#90AB8B]"
                  onClick={() => {
                    setMobileMenuOpen(false)
                    setDropDownMenu(null)
                  }}
                >
                  Committee Members
                </Link>
                <Link
                  to='/past-presidents'
                  className="block py-1 cursor-pointer text-green-800 active:text-[#90AB8B]"
                  onClick={() => {
                    setMobileMenuOpen(false)
                    setDropDownMenu(null)
                  }}
                >
                  Past Presidents
                </Link>
              </div>
            )}
          </div>

          {/* Services */}
          <div className='relative w-full lg:w-auto group'>
            <button
              onClick={() =>
                setDropDownMenu(dropDownMenu === 'services' ? null : 'services')
              }
              className='w-full lg:w-auto cursor-pointer text-green-800 lg:hover:text-green-600 flex items-center justify-between lg:justify-start px-3'>
              <span className="hover:underline transition">Services</span>
              <span className="hidden lg:inline text-sm">▾</span>
              <span className='lg:hidden'>▾</span>
            </button>

            <div className='absolute top-full left-0 hidden lg:block lg:opacity-0 lg:invisible lg:group-hover:opacity-100 lg:group-hover:visible bg-[#F6F0D7] w-48 py-2 text-green-800 shadow-lg z-50  transition-all duration-200'>

              <Link
                to="/membership-support"
                className="block px-4 py-2 hover:bg-[#C5D89D] cursor-pointer active:bg-[#90AB8B] focus:bg-[#90AB8B] focus:outline-none"
              >
                Membership Support
              </Link>
              <Link
                to="/business-advisory"
                className="block px-4 py-2 hover:bg-[#C5D89D] cursor-pointer active:bg-[#90AB8B] focus:bg-[#90AB8B] focus:outline-none"
              >
                Business Advisory
              </Link>
              <Link
                to="/trade-facilitation"
                className="block px-4 py-2 hover:bg-[#C5D89D] cursor-pointer active:bg-[#90AB8B] focus:bg-[#90AB8B] focus:outline-none"
              >
                Trade Facilitation
              </Link>
              <Link
                to="/b2b-matchmaking"
                className="block px-4 py-2 hover:bg-[#C5D89D] cursor-pointer active:bg-[#90AB8B] focus:bg-[#90AB8B] focus:outline-none"
              >
                B2B Matchmaking
              </Link>
            </div>

            {dropDownMenu === "services" && (
              <div className="lg:hidden ml-4 mt-2 space-y-2">
                <Link
                  to='/membership-support'
                  className="block py-1 cursor-pointer text-green-800 active:text-[#90AB8B]"
                  onClick={() => {
                    setMobileMenuOpen(false)
                    setDropDownMenu(null)
                  }}
                >
                  Membership Support
                </Link>
                <Link
                  to='/business-advisory'
                  className="block py-1 cursor-pointer text-green-800 active:text-[#90AB8B]"
                  onClick={() => {
                    setMobileMenuOpen(false)
                    setDropDownMenu(null)
                  }}
                >
                  Business Advisory
                </Link>
                <Link
                  to='/trade-facilitation'
                  className="block py-1 cursor-pointer text-green-800 active:text-[#90AB8B]"
                  onClick={() => {
                    setMobileMenuOpen(false)
                    setDropDownMenu(null)
                  }}
                >
                  Trade Facilitation
                </Link>
                <Link
                  to='/b2b-matchmaking'
                  className="block py-1 cursor-pointer text-green-800 active:text-[#90AB8B]"
                  onClick={() => {
                    setMobileMenuOpen(false)
                    setDropDownMenu(null)
                  }}
                >
                  B2B Matchmaking
                </Link>
              </div>
            )}
          </div>


          {/* Sectors */}
          <div className='relative w-full lg:w-auto group'>
            <button
              onClick={() =>
                setDropDownMenu(dropDownMenu === 'sectors' ? null : 'sectors')
              }
              className='w-full lg:w-auto cursor-pointer text-green-800 lg:hover:text-green-600 flex items-center justify-between lg:justify-start px-3'>
              <span className="hover:underline transition">Sectors</span>
              <span className="hidden lg:inline text-sm">▾</span>
              <span className='lg:hidden'>▾</span>
            </button>

            <div className='absolute top-full left-0 hidden lg:block lg:opacity-0 lg:invisible lg:group-hover:opacity-100 lg:group-hover:visible bg-[#F6F0D7] w-48 py-2 text-green-800 shadow-lg z-50  transition-all duration-200'>

              <Link
                to='/tourism'
                className='block px-4 py-2 hover:bg-[#C5D89D] cursor-pointer active:bg-[#90AB8B] focus:bg-[#90AB8B] focus:outline-none'
              >
                Tourism
              </Link>
              <Link
                to='/handicrafts'
                className='block px-4 py-2 hover:bg-[#C5D89D] cursor-pointer active:bg-[#90AB8B] focus:bg-[#90AB8B] focus:outline-none'
              >
                Handicrafts
              </Link>
              <Link
                to='/agriculture'
                className='block px-4 py-2 hover:bg-[#C5D89D] cursor-pointer active:bg-[#90AB8B] focus:bg-[#90AB8B] focus:outline-none'
              >
                Agriculture
              </Link>
              <a
                href='/'
                className='block px-4 py-2 hover:bg-[#C5D89D] cursor-pointer active:bg-[#90AB8B] focus:bg-[#90AB8B]'
              >
                Agro & Food Processing
              </a>
              <a
                href='/'
                className='block px-4 py-2 hover:bg-[#C5D89D] cursor-pointer active:bg-[#90AB8B] focus:bg-[#90AB8B]'
              >
                Hospitality
              </a>
              <a
                href='/'
                className='block px-4 py-2 hover:bg-[#C5D89D] cursor-pointer active:bg-[#90AB8B] focus:bg-[#90AB8B]'
              >
                Spices
              </a>
              <a
                href='/'
                className='block px-4 py-2 hover:bg-[#C5D89D] cursor-pointer active:bg-[#90AB8B] focus:bg-[#90AB8B]'
              >
                Education
              </a>
              <a
                href='/'
                className='block px-4 py-2 hover:bg-[#C5D89D] cursor-pointer active:bg-[#90AB8B] focus:bg-[#90AB8B]'
              >
                Healthcare
              </a>
              <a
                href='/'
                className='block px-4 py-2 hover:bg-[#C5D89D] cursor-pointer active:bg-[#90AB8B] focus:bg-[#90AB8B]'
              >
                Railways
              </a>
              <a
                href='/'
                className='block px-4 py-2 hover:bg-[#C5D89D] cursor-pointer active:bg-[#90AB8B] focus:bg-[#90AB8B]'
              >
                MSME Development Skill
              </a>
            </div>

            {dropDownMenu === "sectors" && (
              <div className="lg:hidden ml-4 mt-2 space-y-2">
                <Link
                  to='/tourism'
                  className="block py-1 cursor-pointer text-green-800 active:text-[#90AB8B]"
                  onClick={() => {
                    setMobileMenuOpen(false)
                    setDropDownMenu(null)
                  }}
                >
                  Tourism
                </Link>
                <Link
                  to='/handicrafts'
                  className="block py-1 cursor-pointer text-green-800 active:text-[#90AB8B]"
                  onClick={() => {
                    setMobileMenuOpen(false)
                    setDropDownMenu(null)
                  }}
                >
                  Handicrafts
                </Link>
                <Link
                  to='/agriculture'
                  className="block py-1 cursor-pointer text-green-800 active:text-[#90AB8B]"
                  onClick={() => {
                    setMobileMenuOpen(false)
                    setDropDownMenu(null)
                  }}
                >
                  Agriculture
                </Link>
                <a className="block py-1 cursor-pointer text-green-800 active:text-[#90AB8B]">
                  Agro & Food Processing
                </a>
                <a className="block py-1 cursor-pointer text-green-800 active:text-[#90AB8B">
                  Hospitality
                </a>
                <a className="block py-1 cursor-pointer text-green-800 active:text-[#90AB8B]">
                  Spices</a>
                <a className="block py-1 cursor-pointer text-green-800 active:text-[#90AB8B]">
                  Education
                </a>
                <a className="block py-1 cursor-pointer text-green-800 active:text-[#90AB8B]">
                  Healthcare
                </a>
                <a className="block py-1 cursor-pointer text-green-800 active:text-[#90AB8B]">
                  Railways
                </a>
                <a className="block py-1 cursor-pointer text-green-800 active:text-[#90AB8B]">
                  MSME Development Skill
                </a>
              </div>
            )}
          </div>

          {/* Contact Us */}
          <a
            href='/'
            className=' text-green-800 lg:hover:text-green-600 transition hover:underline px-3'
          >
            Contact Us
          </a >

          {/* Social Media Icons and  Join Button */}
          {mobileMenuOpen && (
            <div className='lg:hidden mt-4 pt-4 border-t border-blue-300 flex flex-col items-center space-y-4'>
              <div className='flex gap-4'>
                <a
                  href='https://www.instagram.com/the_ccik/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img
                    src={instagramLogoImg}
                    alt="Instagram"
                    className='w-6 h-6 hover:opacity-80 transition'
                  />
                </a>

                <a
                  href='https://www.facebook.com/p/Chamber-of-Commerce-Industries-Kashmir-CCIK-100064548375657/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img
                    src={facebookLogoImg}
                    alt='Facebook'
                    className='w-6 h-6 hover:opacity-80 transition'
                  />
                </a>
              </div>

              <Link
                to='/membership-form'
                className='bg-[#67AE6E] hover:bg-[#67AE6E] active:bg-[#67AE6E] active:scale-95 text-white px-5 py-2 rounded-lg text-sm font-semibold transition transform'
                onClick={() => setMobileMenuOpen(false)}
              >
                Register New Member
              </Link>
            </div>
          )}
        </nav >
      </div >
    </header >
  )
}