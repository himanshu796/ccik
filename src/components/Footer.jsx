export default function Footer({ mapLogo }) {
    return (
        <footer className='bg-blue-400 text-white p-6 md:p-8 w-full flex flex-col space-y-8'>

            <div className='flex flex-col md:flex-row md:justify-between space-y-8 md:space-y-0 md:space-x-10'>

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
            </div>

            <p className="bg-blue-400 py-3 px-5 text-white md:text-base opacity-80 mt-8 text-center">
                © {new Date().getFullYear()} CCIK – All Rights Reserved.
            </p>

        </footer >
    );
}

