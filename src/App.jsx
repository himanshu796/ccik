import { useState, useEffect, useRef } from 'react'
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import './App.css'

const firebaseConfig = {
  apiKey: "AIzaSyBOnjmgZXTunO0lVvWEON-GMOAGXV26yUI",
  authDomain: "commerce-industries.firebaseapp.com",
  projectId: "commerce-industries",
  storageBucket: "commerce-industries.firebasestorage.app",
  messagingSenderId: "894028269304",
  appId: "1:894028269304:web:b97eddc5b2e9cb2bf81d0d",
  measurementId: "G-3LM507FDKH"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function App() {
  const [members, setMembers] = useState([])
  const [newsList, setNewsList] = useState([])
  const [newTitle, setNewTitle] = useState('')
  const [newContent, setNewContent] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const [headerHeight, setHeaderHeight] = useState(0)
  const [ccikLogo, setCcikLogo] = useState(null)
  const [instagramLogo, setInstagramLogo] = useState(null)
  const [mapLogo, setMapLogo] = useState(null)
  const [slideshowImages, setSlideshowImages] = useState([])
  const [galleryImages, setGalleryImages] = useState([])
  const [slideIndex, setSlideIndex] = useState(0)
  const [youtubeVideos, setYoutubeVideos] = useState([])
  const [youtubeIndex, setYoutubeIndex] = useState(0)
  const youtubeScrollRef = useRef()
  const scrollRef = useRef()


  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const query = await getDocs(collection(db, 'members'));
        const data = query.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        setMembers(data);
      } catch (error) {
        console.error('Error fetching members:', error)
      }
    };

    //FETCH NEWS & ANNOUNCEMENTS
    const fetchNews = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'news'));
        const data = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        setNewsList(data);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    const fetchSlideshow = async () => {
      const snap = await getDocs(collection(db, 'slideshow'));
      setSlideshowImages(snap.docs.map(doc => doc.data().imageUrl));
    };

    const fetchGallery = async () => {
      const snap = await getDocs(collection(db, 'gallery'));
      setGalleryImages(snap.docs.map(doc => doc.data().imageUrl));
    };

    const fetchLogos = async () => {
      try {
        const snap = await getDocs(collection(db, 'logo'));

        snap.docs.forEach(doc => {
          const data = doc.data();

          if (data.type === 'ccik') {
            setCcikLogo(data.logoUrl);
          }

          if (data.type === 'instagram') {
            setInstagramLogo(data.logoUrl)
          }

          if (data.type === 'map') {
            setMapLogo(data.logoUrl)
          }
        });
      }
      catch (error) {
        console.error('Error fetching logo:', error)
      }
    };

    const fetchyoutubeVideos = async () => {
      try {
        const video = await getDocs(collection(db, 'videos'))
        const data = video.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setYoutubeVideos(data);
      }
      catch (error) {
        console.error('Error fetching Youtube Videos:', error)
      }
    };

    fetchMembers();
    fetchNews();
    fetchSlideshow();
    fetchGallery();
    fetchLogos();
    fetchyoutubeVideos();
  }, []);

  useEffect(() => {
    if (slideshowImages.length === 0)
      return;

    const interval = setInterval(() => {
      setSlideIndex(prev => (prev + 1) % slideshowImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slideshowImages]);

  useEffect(() => {
    function updateHeaderHeight() {
      const header = document.getElementById('header')
      if (header) {
        setHeaderHeight(header.offsetHeight);
      }
    }
    updateHeaderHeight();
    window.addEventListener('resize', updateHeaderHeight);

    return () => window.removeEventListener('resize', updateHeaderHeight);
  }, []);

  useEffect(() => {
    if (!youtubeScrollRef.current || youtubeVideos.length === 0) return;

    const scrollContainer = youtubeScrollRef.current;
    const videoWidth = 300;

    const interval = setInterval(() => {
      setYoutubeIndex(prev => {
        const isLast = prev === youtubeVideos.length - 1;

        if (isLast) {
          scrollContainer.scrollTo({
            left: 0,
            behavior: 'smooth'
          })
          return 0;
        } else {
          scrollContainer.scrollBy({
            left: videoWidth,
            behavior: 'smooth'
          });

          return prev + 1;
        }
      });
    }, 3000);

    return () => clearInterval(interval)
  }, [youtubeVideos]);

  const addNews = () => {
    if (newTitle && newContent) {
      setNewsList([...newsList, { title: newTitle, content: newContent }]);
      setNewTitle('');
      setNewContent('');
    }
  };

  return (
    <div className='w-full min-h-screen'>

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

        {/* Instagram */}
        <a
          href='https://www.instagram.com/the_ccik/'
          target='_blank'
          rel='noopener noreferrer'
          className='mt-4 md:mt-0 ml-0 md:ml-6'
        >
          {instagramLogo && (
            <img
              src={instagramLogo}
              alt='Instagram Logo'
              className='w-6 h-6 md:w-7 md:h-7 hover:opacity-80 transition'
            />)}
        </a>

        {/* Navigation Menu */}

        {/* Hamburger Menu Button */}

        <button
          className='lg:hidden text-white text-3xl mr-4'
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>

        <div className='w-full lg:w-auto mt-2 lg:bottom-0 lg:absolute lg:left-1/2 lg:-translate-x-1/2'>

          <nav className={`${menuOpen ? "flex flex-col space-y-3 mt-2" : "hidden"}
           lg:flex lg:flex-row lg:space-y-0 lg:space-x-4 bg-blue-500 text-white px-3 py-1 md:px-4 md:py-1 rounded-xl flex flex-wrap justify-center`}>

            {/* Home */}
            <a
              href='/'
              className='hover:text-sky-950 transition'
            >
              Home
            </a>

            {/* The Chamber */}
            <div className='relative group'>
              <button className='hover:text-teal-950 transition'>
                The Chamber ▾
              </button>

              {/*Dropdown Menu */}
              <div className='absolute left-0 hidden group-hover:block bg-white w-48 py-2 text-black shadow-lg mt-2'>
                <a
                  href='/'
                  className='block px-4 py-2 hover:bg-gray-100'
                >
                  CCIK Office Bearers
                </a>
                <a
                  href='/'
                  className='block px-4 py-2 hover:bg-gray-100'
                >
                  Commitee Members
                </a>
                <a
                  href='/'
                  className='block px-4 py-2 hover:bg-gray-100'
                >
                  Past Presidents
                </a>
              </div>
            </div>

            {/* Services */}
            <div className='relative group'>
              <button className='hover:text-teal-950 transition'>
                Services ▾
              </button>

              {/*Dropdown Menu */}
              <div className='absolute left-0 hidden group-hover:block bg-white w-50 py-2 text-black shadow-lg mt-2'>
                <a
                  href='/'
                  className='block px-4 py-2 hover:bg-gray-100'
                >
                  Membership Support
                </a>
                <a
                  href='/'
                  className='block px-4 py-2 hover:bg-gray-100'
                >
                  Business Advisory
                </a>
                <a
                  href='/'
                  className='block px-4 py-2 hover:bg-gray-100'
                >
                  Trade Facilitation
                </a>
              </div>
            </div>

            {/* Sectors */}
            <div className='relative group'>
              <button className='hover:text-teal-950 transition'>
                Sectors ▾
              </button>

              {/*Dropdown Menu */}
              <div className='absolute left-0 hidden group-hover:block bg-white w-50 py-2 text-black shadow-lg mt-2'>
                <a
                  href='/'
                  className='block px-4 py-2 hover:bg-gray-100'
                >
                  Tourism
                </a>
                <a
                  href='/'
                  className='block px-4 py-2 hover:bg-gray-100'
                >
                  Handicrafts
                </a>
                <a
                  href='/'
                  className='block px-4 py-2 hover:bg-gray-100'
                >
                  Manufacturing
                </a>
              </div>
            </div>
            {/* Contact */}
            <a
              href='/'
              className='hover:text-sky-950 transition'
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      <div style={{ paddingTop: headerHeight }}>
        {/* Slideshow Section */}
        <div className='w-full relative overflow-hidden'>
          {slideshowImages.length > 0 && (
            <div
              className='w-full h-[150px] md:h-[350px] bg-black'
              style={{
                backgroundImage: `url(${slideshowImages[slideIndex]})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transition: 'background-image 0.8s ease-in-out'
              }}
            ></div>
          )}
        </div>

        {/* Small image section */}
        <div className='w-full bg-indigo-300 py-4 mt-1'>
          <div className='flex items-center space-x-3 px-4'>

            {/* Left Arrow button */}
            <button
              onClick={() => {
                const newIndex = (slideIndex - 1 + slideshowImages.length) % slideshowImages.length;
                setSlideIndex(newIndex);

                const imgWidth = 140;
                if (scrollRef.current) {
                  scrollRef.current.scrollBy({ left: -imgWidth, behavior: 'smooth' })
                }
              }}
              className='px-3 py-2 text-red-700 text-2xl'
            >
              ⮜
            </button>

            <div
              ref={scrollRef}
              className='flex space-x-4 overflow-x-auto'
            >
              {slideshowImages.map((img, index) => (
                <div key={index} className='flex-none'>
                  <img
                    src={img}
                    onClick={() => setSlideIndex(index)}
                    className={`w-48 h-30 object-cover rounded-lg shadow-md transition-all
                  ${index === slideIndex ? 'border-2 border-indigo-500' : 'border-2 border-transparent'}`}
                    style={{ cursor: 'pointer' }}
                  />
                </div>
              ))}
            </div>

            {/* Right Arrow button */}
            <button
              onClick={() => {
                const newIndex = (slideIndex + 1) % slideshowImages.length;
                setSlideIndex(newIndex);

                const imgWidth = 140;
                scrollRef.current.scrollBy({ left: imgWidth, behavior: 'smooth' })
              }}
              className='px-3 py-2 text-red-700 text-2xl'
            >
              ⮞
            </button>

          </div>
        </div>


        <div className='flex flex-col w-full'>

          {/* Community Members */}
          <div className='bg-teal-600 py-6 w-full overflow-hidden'>
            <h2 className='text-xl md:text-2xl mb-4 text-white mx-10'>Community Members</h2>

            <div className="relative w-full overflow-hidden">
              <div className="flex animate-scroll gap-6 px-6">
                {members.concat(members).map((member, index) => (
                  <div
                    key={`${member.id}-${index}`}
                    className="relative flex-none w-40 h-48 rounded-lg overflow-hidden shadow-lg"
                  >
                    <img
                      src={member.photoUrl}
                      alt={member.name}
                      className='w-full h-full object-cover'
                    />
                    {/* Name at bottom */}
                    < div className="absolute bottom-0 w-full bg-black/60 text-white text-xs text-center py-1" >
                      {member.name}
                    </div>
                  </div>
                )
                )}
              </div>
            </div>
          </div>

          {/* News */}
          <div className='bg-gray-400 p-4 w-full' >
            <h2 className='text-xl md:text-2xl font-semibold mb-2 mx-10'>News & Announcements</h2>

            <div>
              {newsList.map((news, index) => (
                <div key={index} className='mb-4 p-4 bg-gray-300 rounded-lg'>
                  <h3 className='font-semibold text-lg md:text-xl'>{news.title}</h3>
                  <p className='text-gray-700 mt-1 text-sm md:text-lg sm:text-base'>{news.content}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Youtube Section*/}
          <div className='bg-purple-500 p-4 w-full min-h-[420px]' >
            <h2 className='text-xl md:text-2xl font-semibold mb-4 text-white'>Youtube Videos</h2>

            <div
              ref={youtubeScrollRef}
              className='flex space-x-6 overflow-x-auto scrollbar-hide px-6 sm:px-10 md:px-16 lg:px-24 justify-start items-center'
            >
              {youtubeVideos.map((video, index) => {
                const videoId = video.videoUrl?.split('v=')[1]?.split('&')[0];
                if (!videoId) return null;

                return (
                  <div
                    key={video.id}
                    onClick={() => {
                      if (video.videoUrl) {
                        window.open(video.videoUrl, '_blank', 'noopener, noreferrer')
                      }
                    }}

                    className={`flex-none relative cursor-pointer transition-all duration-500 ease-in-out
                    ${index === youtubeIndex ? 'w-[90%] md:w-[70%] h-[360px] z-20' : 'w-56 sm:w-60 md:w-64 lg:w-72 h-[180px]'
                      }
                    `}
                  >
                    <img
                      src={`https://img.youtube.com/vi/${videoId}/0.jpg`}
                      alt={video.title}

                      className='w-full h-full object-cover rounded-lg shadow-md'
                    />

                    {/* Title */}
                    {video.title && (
                      <div className='absolute top-0 left-0 w-full text-white font-bold text-sm md:text-base lg:text-xl px-3 py-2 pointer-events-none z-10 truncate '>{video.title}
                      </div>
                    )}

                    {/* Play Button */}
                    <div className='absolute inset-0 flex items-center justify-center pointer-events-none'>
                      <div className='w-16 h-12 bg-red-600 rounded-lg flex items-center justify-center shadow-lg hover:scale-105 transition-transform'>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="white"
                          viewBox="0 0 24 24"
                          className="w-6 h-6 ml-1"
                        >
                          <path d="M4 2v20l17-10L4 2z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

          </div>
        </div>

        {/* Footer */}
        <footer className='bg-blue-400 text-white p-6 md:p-8 w-full flex flex-col md:flex-row md:justify-between space-y-8 md:space-y-0 md:space-x-10'>

          <div className='flex flex-col md:flex-row md:items-start md:space-x-6 space-y-4 md:space-y-0'>

            <div className='flex flex-col space-y-2'>
              <h2 className='text-lg md:text-xl font-semibold mb-2'>Office</h2>
              <p>
                <strong>Address:</strong> Srinagar, Dalgate
              </p>

              <p className='mt-2'>
                <strong>Phone:</strong> +91-9999999999
              </p>
            </div>

            {/* Map */}
            <a
              href='https://www.google.com/maps/place/Dalgate+Bridge,+Srinagar+190001/@34.0806814,74.828168,17z/data=!3m1!4b1!4m6!3m5!1s0x38e18f786816e80b:0x6ee20c976eeb5d3d!8m2!3d34.0806814!4d74.828168!16s%2Fg%2F1ydp1td8s?entry=ttu&g_ep=EgoyMDI1MTIwMi4wIKXMDSoASAFQAw%3D%3D'
              target='_blank'
              rel='noopener noreferrer'
            >
              <div className='w-28 h-20 md:w-32 md:h-24 rounded-lg border-2 border-white overflow-hidden shadow-lg hover:opacity-90 transition'>
                {mapLogo && (
                  <img
                    src={mapLogo}
                    alt='CCIK Location Map'
                    className='w-full h-full object-cover'
                  />
                )}
              </div>
            </a>
          </div>

          {/* Explore Menu */}
          <div className='flex flex-col space-y-4'>
            <h2 className='text-lg md:text-xl font-semibold mb-2'>EXPLORE</h2>

            <ul className='space-y-2'>
              <li>
                <a
                  href='/'
                  className='cursor-pointer'
                >
                  About the Chamber
                </a>
              </li>
              <li>
                <a
                  href='/'
                  className='cursor-pointer'
                >
                  Role of the Chamber
                </a>
              </li>
              <li>
                <a
                  href='/'
                  className='cursor-pointer'
                >
                  Sectors
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links*/}
          <div className='flex flex-col space-y-4'>
            <h2 className='text-lg md:text-xl font-semibold mb-2'>QUICK LINKS</h2>

            <ul className='space-y-2'>
              <li>
                <a
                  href='/'
                  className='cursor-pointer'
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href='/'
                  className='cursor-pointer'
                >
                  Photo Gallery
                </a>
              </li>
              <li>
                <a
                  href='/'
                  className='cursor-pointer'
                >
                  Events
                </a>
              </li>
            </ul>
          </div>
        </footer >

        <p className="bg-blue-400 py-3 px-5 text-white md:text-base opacity-80">
          © {new Date().getFullYear()} CCIK – All Rights Reserved.
        </p>

      </div >
    </div >
  );
}

export default App;
