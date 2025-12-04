import { useState, useEffect } from 'react'
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import './App.css'

const firebaseConfig = {
  apiKey: "AIzaSyD2axl1P1mxq7zM0gIJpnEvy5paTEgEc_0",
  authDomain: "govwebsite-ed150.firebaseapp.com",
  projectId: "govwebsite-ed150",
  storageBucket: "govwebsite-ed150.firebasestorage.app",
  messagingSenderId: "303229867698",
  appId: "1:303229867698:web:34fe9d099d19c3eef15bab",
  measurementId: "G-32MVGWKGV6"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function App() {
  const [members, setMembers] = useState([])
  const [newsList, setNewsList] = useState([])
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');

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
        console.error('Error fetching members:', error);
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

    fetchMembers();
    fetchNews();
  }, []);

  const addNews = () => {
    if (newTitle && newContent) {
      setNewsList([...newsList, { title: newTitle, content: newContent }]);
      setNewTitle('');
      setNewContent('');
    }
  };

  return (
    <div className='w-full min-h-screen bg-gray-100'>

      <header className='bg-blue-900 text-white p-8 flex items-center relative'>

        {/* Logo */}
        <a
          href='http://localhost:5173/'
          className='mr-6'
        >
          <img
            src="/logo_ccik.png"
            alt="CCIK Logo"
            className='w-20 h-20 rounded-full shadow-lg'
          />
        </a>

        {/* Title */}
        <h1 className='text-4xl text-center'>CHAMBER OF COMMERCE & INDUSTRIES - KASHMIR (CCIK)</h1>

        {/* Instagram */}
        <a
          href='https://www.instagram.com/the_ccik/'
          target='_blank'
          rel='noopener noreferrer'
          className='ml-6'
        >
          <img
            src='/instagram.png'
            alt='Instagram'
            className='w-7 h-7 hover:opacity-80 transition'
          />
        </a>

        {/* Navigation Menu */}
        <div className='absolute left-1/2 transform -translate-x-1/2 mt-24'>
          <nav className='bg-emerald-600 text-white px-6 py-2 rounded-2xl shadow-md flex space-x-6 text-lg font-medium'>

            {/* Home */}
            <a
              href='/'
              className='hover:text-teal-950 transition'
            >
              Home
            </a>

            {/* The Chamber */}
            <div className='relative group'>
              <button className='hover:text-teal-950 transition'>
                The Chamber ▾
              </button>

              {/*Dropdown Menu */}
              <div className='absolute left-0 hidden group-hover:block bg-white shadow-lg rounded-2xl mt-2 w-44 py-2 z-50'>
                <a
                  href='/'
                  className='block px-4 py-2 hover:bg-gray-100 rounded-md'
                >
                  CCIK Office Bearers
                </a>
                <a
                  href='/'
                  className='block px-4 py-2 hover:bg-gray-100 rounded-md'
                >
                  Commitee Members
                </a>
                <a
                  href='/'
                  className='block px-4 py-2 hover:bg-gray-100 rounded-md'
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
              <div className='absolute left-0 hidden group-hover:block bg-white shadow-lg rounded-2xl mt-2 w-44 py-2 z-50'>
                <a
                  href='/'
                  className='block px-4 py-2 hover:bg-gray-100 rounded-md'
                >
                  CCIK Office Bearers
                </a>
                <a
                  href='/'
                  className='block px-4 py-2 hover:bg-gray-100 rounded-md'
                >
                  Commitee Members
                </a>
                <a
                  href='/'
                  className='block px-4 py-2 hover:bg-gray-100 rounded-md'
                >
                  Past Presidents
                </a>
              </div>
            </div>

            {/* Sectors */}
            <div className='relative group'>
              <button className='hover:text-teal-950 transition'>
                Sectors ▾
              </button>

              {/*Dropdown Menu */}
              <div className='absolute left-0 hidden group-hover:block bg-white shadow-lg rounded-2xl mt-2 w-44 py-2 z-50'>
                <a
                  href='/'
                  className='block px-4 py-2 hover:bg-gray-100 rounded-md'
                >
                  CCIK Office Bearers
                </a>
                <a
                  href='/'
                  className='block px-4 py-2 hover:bg-gray-100 rounded-md'
                >
                  Commitee Members
                </a>
                <a
                  href='/'
                  className='block px-4 py-2 hover:bg-gray-100 rounded-md'
                >
                  Past Presidents
                </a>
              </div>
            </div>
          </nav>

        </div>

      </header>

      <div className='flex w-full mx-auto mt-6 p-6 bg-white'>
        {/* Community Members */}
        <div className='flex-2 overflow-hidden relative'>
          <h2 className='text-2xl font-semibold mb-4'>Community Members</h2>

          <div className='flex animate-scroll whitespace-nowrap '>
            {members.map((member, index) => (
              <div key={index} className='mr-6 text-center'>
                <div className="w-36 h-36 rounded-full overflow-hidden mx-auto bg-gray-200">
                  <img
                    src={member.photoUrl}
                    alt={member.name}
                    className='w-36 h-36 rounded-full object-cover mx-auto'
                  />
                </div>
                <p className='mt-2 font-medium'>{member.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* News */}
        <div className='flex-1 pl-6 border-2 border-b-gray-300' >
          <h2 className='text-2xl font-semibold mb-4'>News & Announcements</h2>

          <div>
            {newsList.map((news, index) => (
              <div key={index} className='mb-4 p-4 bg-gray-100 rounded-lg'>
                <h3 className='font-semibold text-xl'>{news.title}</h3>
                <p className='text-gray-700 mt-1'>{news.content}</p>
              </div>
            ))}
          </div>

          {/* Post Announcement */}

          {/*<div className='mt-6'>
            <h3 className='text-xl font-semibold mb-2'>Post New Announcement</h3>

            <input
              type='text'
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              placeholder='Title'
              className='block w-full mb-3 p-3 border rounded-lg'
            />

            <textarea
              value={newContent}
              onChange={(e) => setNewContent(e.target.value)}
              placeholder='content'
              className='block w-full mb-3 p-3 border rounded-lg h-28'
            />

            <button
              onClick={addNews}
              className='w-full p-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition'
            >
              Post
            </button> 
          </div> */}
        </div>
      </div>
    
    {/* Footer */}
      <footer className='bg-blue-400 text-white mt-10 p-8 '>
        <h2 className='text-2xl font-semibold mb-3'>Office</h2>

        <p className='text-lg'>
          <strong>Address:</strong> Srinagar, Dalgate
        </p>

        <p className='text-lg mt-2'>
          <strong>Phone:</strong> +91-9999999999
        </p>

  </footer>
</div>
  );
}

export default App
