import { useState, useEffect } from 'react'
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../../firebase';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function OfficeBearersPage() {
    const [members, setMembers] = useState([])

    useEffect(() => {
        const q = query(collection(db, 'members'), orderBy('rank', 'asc'))
        getDocs(q).then(snap => {
            setMembers(snap.docs.map(doc => doc.data()))
        })
    }, []);

    return (
        <div>
            <Header />

            <div className='pt-32'>

                <div className="w-full flex flex-col items-center bg-[#C5D89D] justify-center px-4 py-12 md:py-14 md:px-8 lg:py-16 ">
                    <div className='border border-black px-4 py-2 text-center text-lg mx-auto mb-4'>
                        The Chamber
                    </div>
                    <h2 className="text-2xl md:text-3xl text-center font-semibold mb-6 ">
                        CCIK Office Bearers
                    </h2>
                </div>

                <div className="pt-10 pb-12 px-4 md:px-8 bg-[#F6F0D7] w-full">
                    <div className='max-w-6xl mx-auto flex flex-col lg:flex-row gap-8'>

                        {/* List of Office Bearers */}
                        <div className="flex flex-col gap-6 w-full">
                            {members.map((m, i) => (
                                <div
                                    key={i}
                                    className="flex flex-col sm:flex-row gap-6 bg-[#F9F8F6] p-4 rounded-lg shadow items-center sm:items-start"
                                >
                                    <img
                                        src={m.photoUrl}
                                        alt={m.name}
                                        className="w-32 h-32 rounded-lg object-cover"
                                    />
                                    <div className='text-center sm:text-left'>
                                        <h3 className="text-lg font-semibold">{m.name}</h3>
                                        <p className="text-base">{m.title}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Services */}
                        <div className='w-full '>
                            <div className='bg-[#F9F8F6] shadow-lg p-6 top-32 rounded-lg'>
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
            </div>

            <Footer />
        </div>

    )
}
