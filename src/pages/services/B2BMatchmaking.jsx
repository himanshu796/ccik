import { useState, useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function B2BMatchmaking() {

    return (
        <div>
            <Header />

            <div className='pt-32'>

                <div className="w-full flex flex-col items-center bg-amber-300 justify-center px-4 py-12 md:py-14 md:px-8 lg:py-16 ">
                    <div className='border border-black px-4 py-2 text-center text-lg mx-auto mb-4'>
                        Services
                    </div>
                    <h2 className="text-2xl md:text-3xl text-center font-bold mb-8">
                        B2B Matchmaking
                    </h2>

                </div>

                <div className="pt-10 pb-4 px-4 md:px-8 bg-green-200 w-full">
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-start'>
                        <p className="bg-white shadow-lg p-6">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos cumque repellat autem perspiciatis laborum voluptas, illum id non maiores, consectetur maxime rem eius, deleniti et vitae quas alias quasi nostrum!
                            <br /><br />
                            Neque, vel harum modi, laudantium adipisci molestiae velit sed tempore facere explicabo, earum voluptas voluptate quae eaque hic labore. Nesciunt nobis praesentium iusto in at earum numquam enim modi doloribus?
                            <br /><br />
                            Officia illo molestiae culpa rem molestias laborum in aut nisi explicabo iusto. Labore numquam cupiditate reiciendis laborum commodi deserunt quidem optio non accusamus, quod eaque fugiat itaque, atque et velit.
                        </p>



                        {/* Services */}

                        <div className='bg-gray-50 shadow-lg p-6 top-32'>
                            <h3 className='text-2xl font-bold mb-4 border-b pb-2'>
                                Services Offered by CCIK
                            </h3>

                            <ul className='space-y-3'>
                                <li className='text-lg cursor-pointer transition-all duration-200'>
                                    ➤ Membership Support
                                </li>
                                <li className='text-lg cursor-pointer transition-all duration-200'>
                                    ➤ Business Advisory
                                </li>
                                <li className='text-lg cursor-pointer transition-all duration-200'>
                                    ➤ Trade Facilitation
                                </li>
                                <li className='text-lg cursor-pointer transition-all duration-200'>
                                    ➤ B2B Matchmaking
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div >

    )
}
