import HeaderWithBackButton from "../../components/HeaderWithBackButton";
import MainLayout from "../../MainLayout";

const ChoirMinistry = () => {
  return (
    <MainLayout>
      <div className="pt-[43px] pb-[80px] px-4 font-poppins">
        <HeaderWithBackButton title="CHOIR MINISTRY" />

        <div className="bg-white px-4 py-10">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start gap-2">
            <div className="lg:w-1/2 w-full mt-4 pr-2">
              <h2 className="text-[22px] font-bold leading-snug mb-2">
                Leading Worship with <br />
                <span className="text-black">Excellence & Anointing</span>
              </h2>
              <p className="text-[14px] text-gray-800 leading-snug">
                The Choir Ministry is dedicated to inspiring hearts and drawing people closer to God through spirit-filled music and heartfelt worship.
              </p>
            </div>
            <div className="lg:w-1/2 w-full relative min-h-[380px]">
              <img
                src="/music_ministry2.jpg"
                alt="Choir in Worship"
                className="absolute top-0 right-0 w-[90%] h-[300px] object-cover rounded-md shadow-lg z-10"
              />
              <img
                src="/worship1.jpg"
                alt="Hands Raised in Worship"
                className="absolute bottom-0 left-0 w-[50%] h-[250px] object-cover rounded-md shadow-md z-20"
              />
            </div>
          </div>
        </div>

        <div className="bg-white text-center">
          <div className="bg-[#1E1A45] py-4">
            <h2 className="text-white text-lg md:text-xl font-mono font-semibold">
              Ministering Through Sound & Spirit
            </h2>
          </div>
          <div className="px-6 py-6 max-w-3xl mx-auto">
            <p className="text-gray-800 text-[15px] leading-relaxed">
              Our music team passionately serves to create an atmosphere of praise and worship<br />
              that ushers the congregation into God's presence, prepares hearts for the Word,<br />
              and glorifies Christ in unity and excellence.
            </p>
          </div>
          <div className="bg-[#1E1A45] py-4 px-4">
            <p className="text-white text-[14px] leading-snug max-w-2xl mx-auto">
              Sing to the Lord, all the earth; proclaim his salvation day after day.<br />
              <span className="italic font-semibold">– 1 Chronicles 16:23</span>
            </p>
          </div>
        </div>

        <div className="bg-white px-4 py-10">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="w-full md:w-[60%]">
              <div className="flex items-center mb-2">
                <h3 className="text-[15px] font-bold text-gray-900">Our Vision</h3>
                <div className="w-2 h-2 bg-gray-900 rounded-full mx-2"></div>
                <div className="flex-grow h-[2px] bg-gray-900"></div>
              </div>
              <p className="text-[14px] text-gray-700 leading-relaxed">
                To lead people into God's presence through anointed worship and musical excellence.
              </p>
            </div>

            <div className="w-full md:w-[60%] ml-auto">
              <div className="flex items-center mb-2">
                <h3 className="text-[15px] font-bold text-gray-900">Our Mission</h3>
                <div className="w-2 h-2 bg-gray-900 rounded-full mx-2"></div>
                <div className="flex-grow h-[2px] bg-gray-900"></div>
              </div>
              <p className="text-[14px] text-gray-700 leading-relaxed">
                To serve faithfully in worship, glorifying God and inspiring the church through powerful and spirit-filled music.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white py-20 px-4 text-center">
          <h2 className="text-[14px] font-medium text-indigo-900 tracking-wide mb-8">
            The Heart of <span className="font-semibold">Worship Ministry</span>
          </h2>

          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-6">
            <div className="bg-white rounded-lg shadow-md w-[250px] p-4">
              <img
                src="/worship3.jpg"
                alt="Rehearsals"
                className="w-full h-[160px] object-cover rounded-md mb-3"
              />
              <p className="text-sm font-medium text-gray-800">Rehearsals & Training</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg w-[250px] p-4 scale-[1.05]">
              <img
                src="/worship2.jpg"
                alt="Live Worship"
                className="w-full h-[160px] object-cover rounded-md mb-3"
              />
              <p className="text-sm font-semibold text-gray-900">Live Worship</p>
            </div>
            <div className="bg-white rounded-lg shadow-md w-[250px] p-4">
              <img
                src="/worship4.jpg"
                alt="Choir Retreat"
                className="w-full h-[160px] object-cover rounded-md mb-3"
              />
              <p className="text-sm font-medium text-gray-800">Choir Retreats</p>
            </div>
          </div>

          <div className="flex justify-center items-center space-x-2 mb-6">
            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
            <div className="w-2.5 h-2.5 bg-indigo-800 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
          </div>

          {/* Updated CTA Section */}
          <div className="text-sm text-gray-700">
            <div className="bg-[#F3F0FF] border border-indigo-300 rounded-lg p-4 mb-4 shadow-sm max-w-md mx-auto">
              <p className="font-semibold text-indigo-900 mb-2 text-center">
                🎤 Want to join the Choir Ministry?
              </p>
              <a
                href="https://wa.me/234813286224?text=Hello%2C%20I%27m%20interested%20in%20joining%20the%20Choir%20Ministry"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-indigo-700 text-white py-2 px-4 rounded hover:bg-indigo-800 transition"
              >
                Message Us on WhatsApp
              </a>
            </div>

            <div className="text-center">
              <a href="/events" className="text-indigo-800 underline font-medium">
                See upcoming music programs
              </a>
            </div>
          </div>
        </div>

        <div className="bg-[#D7C9F2] pt-12 pb-4 px-4 mt-20">
  <div className="text-center mb-10">
    <h2 className="text-lg font-medium text-[#1D1D1D]">
      Our Leadership
    </h2>
    <img src="/Line.jpg" alt="Arrow underline" className="mx-auto mt-1 w-20" />
  </div>

  <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    <div className="text-center">
      <img
        src="/blankplaceholdermale.jpg"
        alt="Choir Leader"
        className="w-40 h-40 mx-auto object-cover rounded-xl shadow-md"
      />
      <p className="mt-0.5 text-sm font-semibold text-[#1D1D1D]">Anonymous</p>
      <p className="text-sm text-[#1D1D1D]">Choir Leader</p>
    </div>

    <div className="text-center">
      <img
        src="/blankplaceholderfemale.jpg"
        alt="Music Director"
        className="w-40 h-40 mx-auto object-cover rounded-xl shadow-md"
      />
      <p className="mt-0.5 text-sm font-semibold text-[#1D1D1D]">Anonymous</p>
      <p className="text-sm text-[#1D1D1D]">Music Director</p>
    </div>

    <div className="text-center">
      <img
        src="/blankplaceholdermale.jpg"
        alt="Worship Coordinator"
        className="w-40 h-40 mx-auto object-cover rounded-xl shadow-md"
      />
      <p className="mt-0.5 text-sm font-semibold text-[#1D1D1D]">Anonymous</p>
      <p className="text-sm text-[#1D1D1D]">Worship Coordinator</p>
    </div>

    <div className="text-center">
      <img
        src="/blankplaceholderfemale.jpg"
        alt="Vocal Coach"
        className="w-40 h-40 mx-auto object-cover rounded-xl shadow-md"
      />
      <p className="mt-0.5 text-sm font-semibold text-[#1D1D1D]">Anonymous</p>
      <p className="text-sm text-[#1D1D1D]">Vocal Coach</p>
    </div>

    <div className="text-center">
      <img
        src="/blankplaceholdermale.jpg"
        alt="Instrument Coordinator"
        className="w-40 h-40 mx-auto object-cover rounded-xl shadow-md"
      />
      <p className="mt-0.5 text-sm font-semibold text-[#1D1D1D]">Anonymous</p>
      <p className="text-sm text-[#1D1D1D]">Instrument Coordinator</p>
    </div>

    <div className="text-center">
      <img
        src="/blankplaceholderfemale.jpg"
        alt="Events & Logistics"
        className="w-40 h-40 mx-auto object-cover rounded-xl shadow-md"
      />
      <p className="mt-0.5 text-sm font-semibold text-[#1D1D1D]">Anonymous</p>
      <p className="text-sm text-[#1D1D1D]">Events & Logistics</p>
    </div>
  </div>
</div>

      </div>
    </MainLayout>
  );
};

export default ChoirMinistry;
