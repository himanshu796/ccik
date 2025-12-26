import { useState } from 'react';

export default function Header({ccikLogo, instagramLogo, facebookLogo}) {
    const [menuOpen, setMenuOpen] = useState(false)
    const [openMenu, setOpenMenu] = useState(null)

    return (
        <header
        id='header'
        className='bg-blue-900 text-white p-2 md:p-4 flex flex-col md:flex-row items-center fixed top-0 w-full z-50 transition-transform duration-300'>

        {/* Logo */}
        <a
          href='http://localhost:5173/'
          className='mr-0 md:mr-6 mb-4 md:mb-0'
        >
          {ccikLogo && (
            <img
              src={ccikLogo}
              alt="CCIK Logo"
              className='w-16 h-16 md:w-20 md:h-20 rounded-full'
            />)}
        </a>

        {/* Title */}
        <h1 className='text-xl md:text-2xl text-center md:text-left flex-1'>CHAMBER OF COMMERCE & INDUSTRIES - KASHMIR (CCIK)</h1>

        {/* Logos */}
        <div className='flex flex-row items-center gap-2 mt-2 md:mt-0 ml-0 md:ml-6'>

          {/* Instagram */}
          <a
            href='https://www.instagram.com/the_ccik/'
            target='_blank'
            rel='noopener noreferrer'
          >
            {instagramLogo && (
              <img
                src={instagramLogo}
                alt='Instagram Logo'
                className='w-6 h-6 md:w-7 md:h-7 hover:opacity-80 transition'
              />)}
          </a>

          {/* Facebook */}
          <a
            href='https://www.facebook.com/p/Chamber-of-Commerce-Industries-Kashmir-CCIK-100064548375657/'
            target='_blank'
            rel='noopener noreferrer'
          >
            {facebookLogo && (
              <img
                src={facebookLogo}
                alt='Facebook Logo'
                className='w-6 h-6 md:w-7 md:h-7 hover:opacity-80 transition'
              />)}
          </a>
        </div>

        {/* Navigation Menu */}
        {/* Hamburger Menu Button */}

        <button
          className='xl:hidden text-white text-3xl mr-4'
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>

        <div className='w-full lg:w-auto mt-2 lg:bottom-0 lg:absolute lg:left-1/2 lg:-translate-x-1/2'>

          <nav className={`${menuOpen ? "flex flex-col space-y-3 mt-2" : "hidden"}
            lg:flex lg:flex-row lg:space-y-0 lg:space-x-4 bg-blue-500 text-white px-3 py-1 md:px-4 md:py-1 rounded-xl flex flex-wrap justify-center relative`}>

            {/* Home */}
            <a
              href='/'
              className='hover:text-teal-950 transition'
            >
              Home
            </a>

            {/* The Chamber */}
            <div className='relative w-full lg:w-auto group'>
              <button
                onClick={() =>
                  setOpenMenu(openMenu === 'chamber' ? null : 'chamber')
                }
                className='w-full xl:w-auto cursor-pointer hover:text-teal-950 transition flex items-center justify-between xl:justify-start'
                >
                The Chamber
                <span className="hidden xl:inline text-sm">▾</span>
                <span className='xl:hidden'>▾</span>
              </button>

              <div className='absolute top-full left-0 mt-1 hidden xl:group-hover:block bg-white w-48 py-2 text-black shadow-lg z-50'>

                <a
                  href='/'
                  className='block px-4 py-2 hover:bg-gray-200 cursor-pointer'
                >
                  CCIK Office Bearers
                </a>
                <a
                  href='/'
                  className='block px-4 py-2 hover:bg-gray-200 cursor-pointer'
                >
                  Commitee Members
                </a>
                <a
                  href='/'
                  className='block px-4 py-2 hover:bg-gray-200 cursor-pointer'
                >
                  Past Presidents
                </a>
              </div>

              {openMenu === 'chamber' && (
                <div className="xl:hidden ml-4 mt-2 space-y-2">
                  <a className="block py-1 cursor-pointer">CCIK Office Bearers</a>
                  <a className="block py-1 cursor-pointer">Committee Members</a>
                  <a className="block py-1 cursor-pointer">Past Presidents</a>
                </div>
              )}
            </div>

            {/* Services */}
            <div className='relative w-full lg:w-auto group'>
              <button
                onClick={() =>
                  setOpenMenu(openMenu === 'services' ? null : 'services')
                }
                className='w-full xl:w-auto cursor-pointer hover:text-teal-950 transition flex items-center justify-between xl:justify-start'
                >
                Services
                <span className="hidden xl:inline text-sm">▾</span>
                <span className='xl:hidden'>▾</span>
              </button>

              <div className='absolute top-full left-0 mt-1 hidden xl:group-hover:block bg-white w-48 py-2 text-black shadow-lg z-50'>

                <a
                  href='/'
                  className="block px-4 py-2 hover:bg-gray-200 cursor-pointer"
                >
                  Membership Support
                </a>
                <a
                  href='/'
                  className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  Business Advisory
                </a>
                <a
                  href='/'
                  className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  Trade Facilitation
                </a>
              </div>

              {openMenu === "services" && (
                <div className="xl:hidden ml-4 mt-2 space-y-2">
                  <a className="block py-1 cursor-pointer">Membership Support</a>
                  <a className="block py-1 cursor-pointer">Business Advisory</a>
                  <a className="block py-1 cursor-pointer">Trade Facilitation</a>
                </div>
              )}
            </div>


            {/* Sectors */}
            <div className='relative w-full lg:w-auto group'>
              <button
                onClick={() =>  
                  setOpenMenu(openMenu === 'sectors' ? null : 'sectors')
                }
                className='w-full xl:w-auto cursor-pointer hover:text-teal-950 transition flex items-center justify-between xl:justify-start'
                >
                Sectors
                <span className="hidden xl:inline text-sm">▾</span>
                <span className='xl:hidden'>▾</span>
              </button>

              <div className='absolute top-full left-0 mt-1 hidden xl:group-hover:block bg-white w-48 py-2 text-black shadow-lg z-50'>
                
                <a
                  href='/'
                  className='block px-4 py-2 hover:bg-gray-200 cursor-pointer'
                >
                  Tourism
                </a>
                <a
                  href='/'
                  className='block px-4 py-2 hover:bg-gray-200 cursor-pointer'
                >
                  Handicrafts
                </a>
                <a
                  href='/'
                  className='block px-4 py-2 hover:bg-gray-200 cursor-pointer'
                >
                  Agriculture
                </a>
                <a
                  href='/'
                  className='block px-4 py-2 hover:bg-gray-200 cursor-pointer'
                >
                  Agro & Food Processing
                </a>
                <a
                  href='/'
                  className='block px-4 py-2 hover:bg-gray-200 cursor-pointer'
                >
                  Hospitality
                </a>
                <a
                  href='/'
                  className='block px-4 py-2 hover:bg-gray-200 cursor-pointer'
                >
                  Spices
                </a>
                <a
                  href='/'
                  className='block px-4 py-2 hover:bg-gray-200 cursor-pointer'
                >
                  Education
                </a>
                <a
                  href='/'
                  className='block px-4 py-2 hover:bg-gray-200 cursor-pointer'
                >
                  Healthcare
                </a>
                <a
                  href='/'
                  className='block px-4 py-2 hover:bg-gray-200 cursor-pointer'
                >
                  Railways
                </a>
                <a
                  href='/'
                  className='block px-4 py-2 hover:bg-gray-200 cursor-pointer'
                >
                  MSME Development Skill
                </a>
              </div>

              {openMenu === "sectors" && (
                <div className="xl:hidden ml-4 mt-2 space-y-2">
                  <a className="block py-1 cursor-pointer">Tourism</a>
                  <a className="block py-1 cursor-pointer">Handicrafts</a>
                  <a className="block py-1 cursor-pointer">Agriculture</a>
                  <a className="block py-1 cursor-pointer">Agro & Food Processing</a>
                  <a className="block py-1 cursor-pointer">Hospitality</a>
                  <a className="block py-1 cursor-pointer">Spices</a>
                  <a className="block py-1 cursor-pointer">Education</a>
                  <a className="block py-1 cursor-pointer">Healthcare</a>
                  <a className="block py-1 cursor-pointer">Railways</a>
                  <a className="block py-1 cursor-pointer">MSME Development Skill</a>
                </div>
              )}
            </div>

            {/* Contact */}
            < a
              href='/'
              className='hover:text-sky-950 transition cursor-pointer'
            >
              Contact
            </a >
          </nav >
        </div >
      </header >
    )
}