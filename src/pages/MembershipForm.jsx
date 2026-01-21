import Header from '../components/Header';
import Footer from '../components/Footer';
import membershipFormPdf from '../assets/membership-form.pdf';

export default function MembershipForm() {
    return (
        <div>
            <Header />

            <div className="min-h-screen bg-gray-100 flex flex-col px-4 items-center pt-32">

                {/* Page Title */}
                <h1 className="text-2xl md:text-3xl font-bold mb-6 text-blue-900">
                    CCIK Membership Form
                </h1>

                <div className="w-full max-w-5xl bg-white shadow-lg rounded-lg overflow-hidden">
                    <iframe
                        src={membershipFormPdf}
                        title="Membership Form"
                        className="w-full h-[80vh]"
                    >
                    </iframe>
                </div>

                <a
                    href={membershipFormPdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 mb-6 inline-block bg-red-600 hover:bg-teal-900 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition duration-200"
                >
                    Download Form
                </a>
            </div >

            <Footer />
        </div>
    )
}