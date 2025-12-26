    import { useState, useEffect } from 'react'
    import { collection, getDocs } from 'firebase/firestore';
    import { db } from '../firebase';
    import Header from '../components/Header';
    import Footer from '../components/Footer';

    export default function OfficeBearersPage() {
        const [members, setMembers] = useState([])

        useEffect(() => {
            getDocs(collection(db, 'members')).then(snap => {
                setMembers(snap.docs.map(doc => doc.data()))
            })
        }, []);

        return (
            <div>
                <Header />

                <div className="pt-28 px-6">
                    <h2 className="text-2xl font-bold mb-6">CCIK Office Bearers</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        {members.map((m, i) => (
                            <div key={i} className="bg-gray-100 p-4 rounded-lg shadow">
                                <img src={m.photoUrl} className="w-32 h-32 rounded-full mx-auto" />
                                <h3 className="text-center font-semibold mt-2">{m.name}</h3>
                                <p className="text-center text-sm text-gray-600">{m.position}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <Footer />
            </div>
        )
    }
