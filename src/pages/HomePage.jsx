import { useState, useEffect, useRef } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { data } from 'react-router-dom';

export default function HomePage() {
    const [members, setMembers] = useState([])
    const [ccikLogo, setCcikLogo] = useState(null)
    const [instagramLogo, setInstagramLogo] = useState(null)
    const [facebookLogo, setFacebookLogo] = useState(null)
    const [mapLogo, setMapLogo] = useState(null)
    const [slideshowImages, setSlideshowImages] = useState([]);
    const [galleryImages, setGalleryImages] = useState([]);
    const [slideIndex, setSlideIndex] = useState(0);
    const [youtubeIndex, setYoutubeIndex] = useState(0);
    const [upcomingEvents, setUpcomingEvents] = useState([]);
    const [newsList, setNewsList] = useState([]);
    const [youtubeVideos, setYoutubeVideos] = useState([]);
    const [sectors, setSectors] = useState([]);

    const scrollRef = useRef(null);
    const youtubeScrollRef = useRef(null);

    useEffect(() => {

        const fetchAll = async () => {

            {/* Fetch Members*/ }
            setMembers((await getDocs(collection(db, 'members')))
                .docs.map(d => ({
                    id: d.id,
                    ...d.data()
                })));

            {/* Fetch Logos*/ }
            const logoSnap = await getDocs(collection(db, 'logo'));
            logoSnap.forEach(doc => {
                const d = doc.data();

                if (d.type === 'ccik') {
                    setCcikLogo(d.logoUrl);
                }
                if (d.type === 'instagram') {
                    setInstagramLogo(d.logoUrl)
                }
                if (d.type === 'facebook') {
                    setFacebookLogo(d.logoUrl)
                }
                if (d.type === 'map') {
                    setMapLogo(d.logoUrl)
                }
            })

            {/* Fetch Slideshow Images*/ }

            setSlideshowImages((await getDocs(collection(db, "slideshow")))
                .docs.map(d => ({
                    id: d.id,
                    imageUrl: d.data().imageUrl
                })));

            {/* Fetch Small Images*/ }

            setGalleryImages((await getDocs(collection(db, "gallery")))
                .docs.map(d => ({
                    id: d.id,
                    imageUrl: d.data().imageUrl
                })));

            {/* Fetch Upcoming Events */ }

            setUpcomingEvents((await getDocs(collection(db, 'upcomingEvents')))
                .docs.map(d => ({
                    id: d.id,
                    ...d.data()
                })));

            {/* Fetch News */ }
            setNewsList((await getDocs(collection(db, "news")))
                .docs.map(d => ({
                    id: d.id,
                    ...d.data()
                })));

            {/* Fetch Youtube Videos*/ }
            setYoutubeVideos((await getDocs(collection(db, "videos")))
                .docs.map(d => ({
                    id: d.id,
                    ...d.data()
                })));

            {/* Fetch Sectors */ }
            setSectors((await getDocs(collection(db, "sectors")))
                .docs.map(d => ({
                    id: d.id,
                    ...d.data()
                })));
        };
        fetchAll();
    }, []);

    useEffect(() => {
        if (slideshowImages.length === 0) return;

        const interval = setInterval(() => {
            setSlideIndex(prev => (prev + 1) % slideshowImages.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [slideshowImages]);


    useEffect(() => {
    if (!youtubeScrollRef.current || youtubeVideos.length === 0) return;

    const interval = setInterval(() => {
        setYoutubeIndex(prev => {
            const nextIndex = (prev + 1) % youtubeVideos.length;

            const container = youtubeScrollRef.current;
            const videoElements = container.children;
            const activeVideo = videoElements[nextIndex];

            if (activeVideo) {
                const containerWidth = container.offsetWidth;
                const videoWidth = activeVideo.offsetWidth;
                const scrollLeft = activeVideo.offsetLeft - (containerWidth / 2) + (videoWidth / 2);

                container.scrollTo({
                    left: scrollLeft,
                    behavior: "smooth"
                });
            }

            return nextIndex;
        });
    }, 3500);

    return () => clearInterval(interval);
}, [youtubeVideos]);


    return (
        <div className="w-full min-h-screen">

            <Header
                ccikLogo={ccikLogo}
                instagramLogo={instagramLogo}
                facebookLogo={facebookLogo}
            />

            <div className='pt-28'>

                {/* Slideshow Section */}
                <div className="overflow-hidden w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[360px] relative">
                    <div
                        className="flex h-full transition-transform duration-500 ease-in-out"
                        style={{
                            transform: `translateX(-${slideIndex * 100}%)`
                        }}
                    >
                        {slideshowImages.map((img, index) => (
                            <div
                                key={img.id}
                                className="w-full h-full flex-shrink-0"
                            >
                                <img
                                    src={img.imageUrl}
                                    alt={`slide-${index}`}
                                    className='w-full h-full object-cover'
                                />
                            </div>
                        ))}
                    </div>
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
                            className='flex overflow-x-auto snap-x snap-mandatory scroll-smooth md:space-x-4 scrollbar-hide'
                        >
                            {slideshowImages.map((img, index) => (
                                <div key={index} className='flex-none w-full md:w-auto snap-center'>
                                    <img
                                        src={img.imageUrl}
                                        onClick={() => setSlideIndex(index)}
                                        className={`w-full md:w-48 h-30 object-cover rounded-lg shadow-md transition-all ${index === slideIndex ?
                                            'border-2 border-indigo-800' : 'border-2 border-transparent'}`}
                                        style={{ cursor: 'pointer' }}
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Right Arrow button */}
                        <button
                            onClick={() => {
                                if (!scrollRef.current) return;

                                const imgWidth = 140;
                                const isLast = slideIndex === slideshowImages.length - 1;

                                if (isLast) {
                                    setSlideIndex(0);
                                    scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' })
                                } else {
                                    setSlideIndex(slideIndex + 1);
                                    scrollRef.current.scrollBy({ left: imgWidth, behavior: 'smooth' })
                                }
                            }}
                            className='px-3 py-2 text-red-700 text-2xl'
                        >
                            ⮞
                        </button>
                    </div>
                </div>


                {/* Services & Upcoming Events Section*/}
                <div className='w-full py-8 px-4 md:px-10 mt-8'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>

                        {/* Services */}
                        <div className='bg-gray-100 rounded-xl shadow-lg p-6'>
                            <h2 className='text-xl md:text-2xl font-semibold mb-4 text-blue-900'>Services</h2>

                            <div className='flex flex-wrap justify-center gap-6'>
                                {['Membership Support', 'Business Advisory', 'Trade Facilitation', 'B2B Matchmaking'].map((service, index) => (
                                    <div
                                        key={index}
                                        className='w-24 h-24 md:w-28 md:h-28 rounded-full border-2 border-red-900 flex items-center text-center text-sm md:text-base font-medium text-emerald-900 shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer'>{service}</div>
                                ))}
                            </div>
                        </div>

                        {/* Upcoming Events */}
                        <div className='bg-slate-400 rounded-xl shadow-lg p-6'>
                            <h2 className='text-xl md:text-2xl font-semibold mb-4 text-blue-900'>
                                Upcoming Events</h2>

                            <div className='flex flex-col space-y-6'>
                                {upcomingEvents.map((event) => (
                                    <div
                                        key={event.id}
                                        className='flex flex-col md:flex-row bg-yellow-200 rounded-lg shadow-lg overflow-hidden'
                                    >
                                        {/* Event Image */}
                                        {event.imageUrl && (
                                            <div className='w-full md:w-44 lg:w-52 shrink-0 bg-gray-100'>
                                                <img
                                                    src={event.imageUrl}
                                                    alt={event.title}
                                                    className='w-full h-auto object-contain'
                                                />
                                            </div>
                                        )}

                                        {/* Event details*/}
                                        <div className='flex flex-col justify-center p-4 text-center md:text-left'>
                                            <h3 className='text-base md:text-2xl font-bold text-red-800'>{event.title}</h3>
                                            <p className='text-sm md:text-2xl lg:text-base text-teal-900 mt-2'>{event.date}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>


                <div className='flex flex-col w-full'>

                    {/* Community Members */}
                    <div className='bg-teal-600 py-6 w-full overflow-hidden'>
                        <h2 className='text-xl md:text-2xl mb-4 text-white mx-10'>Community Members</h2>

                        <div className="relative w-full overflow-hidden">
                            <div className="animate-scroll gap-6 px-6">
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
                                        <div className="absolute bottom-0 w-full bg-black/60 text-white text-xs text-center py-1" >
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

                                        className={`flex-none relative cursor-pointer transition-all duration-500 ease-in-out ${index === youtubeIndex ?
                                            'w-[90%] md:w-[70%] h-[280px] z-20' : 'w-56 sm:w-60 md:w-64 lg:w-72 h-[180px]'
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

                    {/* Sectors Section*/}
                    <div className='bg-green-300 p-6 w-full'>
                        <h2 className='text-xl md:text-2xl font-semibold mb-4 text-white'>Sectors</h2>

                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                            {sectors.map((sector) => (
                                <div
                                    key={sector.id}
                                    className='group flex flex-col items-center bg-gray-200 rounded-xl overflow-hidden shadow-md transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.03] hover:shadow-2xl'
                                >
                                    {sector.imageUrl && (
                                        <img
                                            src={sector.imageUrl}
                                            alt={sector.name}
                                            className='w-full h-36 object-cover'
                                        />
                                    )}
                                    <div className='w-full p-2 text-center font-semibold text-gray-800'>{sector.name}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>

            <Footer mapLogo={mapLogo} />
        </div >
    )
}