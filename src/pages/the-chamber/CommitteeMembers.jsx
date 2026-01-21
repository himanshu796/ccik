import { useState, useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function CommitteeMembers() {
    const [members, setMembers] = useState([])
    const [loading, setLoading] = useState(true)
    const [cooptedmembers, setCooptedMembers] = useState([])

    useEffect(() => {
        const fetchMembers = async () => {
            try {
                const snap = await getDocs(collection(db, 'committee-members'))
                const data = snap.docs.map(doc => ({
                    id: doc.id,
                    name: doc.data().name,
                    business: doc.data().business
                }))
                setMembers(data);
            } catch (error) {
                console.error('Error fetching members:', error)
            } finally {
                setLoading(false);
            }
        }

        const fetchCooptedMembers = async () => {
            try {
                const snap = await getDocs(collection(db, 'co-opted-members'))
                const data = snap.docs.map(doc => ({
                    id: doc.id,
                    name: doc.data().name,
                    business: doc.data().business
                }))
                setCooptedMembers(data);
            } catch (error) {
                console.error('Error fetching co-opted members:', error)
            }
        }

        fetchCooptedMembers();
        fetchMembers();
    }, []);

    return (
        <div>
            <Header />

            <div className='pt-32'>

                <div className="w-full flex flex-col items-center bg-amber-300 justify-center px-4 py-12 md:py-14 md:px-8 lg:py-16 ">
                    <div className='border border-black px-4 py-2 text-center text-lg mx-auto mb-4'>
                        The Chamber
                    </div>

                </div>

                <div className="pt-10 pb-4 px-4 md:px-8 bg-green-200 w-full">
                    <div className='max-w-6xl mx-auto'>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

                            {/* List of Executive Committee Members */}

                            <div className='bg-red-50 shadow p-10 md:p-12'>
                                <h2 className="text-2xl md:text-3xl text-center font-bold mb-8">
                                    Executive Committee Members
                                </h2>

                                {loading ? (
                                    <p className="text-center">Loading members...</p>
                                ) : (

                                    <div className='flex flex-col gap-6'>
                                        {members.map(m => (
                                            <div
                                                key={m.id}
                                                className="bg-blue-200 p-4 rounded-lg shadow"
                                            >
                                                <h3 className="text-lg font-bold text-black">
                                                    {m.name}
                                                </h3>
                                                <p className="text-base mt-1 text-gray-500">
                                                    {m.business}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Co-opted Members */}
                            <div className='flex flex-col bg-green-200 gap-8'>

                                <div className='bg-blue-200 shadow p-10 md:p-12'>
                                    <h2 className="text-2xl md:text-3xl text-center font-bold mb-8">
                                        Co-opted Members
                                    </h2>

                                    <div className='flex flex-col gap-6'>
                                        {cooptedmembers.map(m => (
                                            <div
                                                key={m.id}
                                                className="bg-red-50 p-4 rounded-lg shadow"
                                            >
                                                <h3 className="text-lg font-bold text-black">{m.name}</h3>
                                                <p className="text-base mt-1 text-gray-500">{m.business}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>



                                {/* Services */}
                                <div className='w-full '>
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
                    </div>
                </div>
            </div>


            <Footer />
        </div >

    )
}
