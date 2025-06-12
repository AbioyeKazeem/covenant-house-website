import { useNavigate } from "react-router-dom";
import HeaderWithBackButton from "../../components/HeaderWithBackButton";
import MainLayout from "../../MainLayout";

const ChildrenMinistry = () => {
   const navigate = useNavigate();
  return (
    <MainLayout>
      <div className="pt-[43px] pb-[80px] px-4">
        <HeaderWithBackButton title="CHILDREN MINISTRY" />
<div className="relative w-full h-[400px] md:h-[500px] overflow-hidden mt-5">
  <img
    src="/childrenslider.jpg"
    alt="Children Ministry background"
    className="absolute inset-0 w-full h-full object-cover"
  />
  <div className="absolute inset-0 bg-black bg-opacity-30"></div>
  <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-4">
    <h2 className="text-2xl md:text-4xl font-semibold leading-snug max-w-2xl">
      Guiding children to <br />
      grow in Christ through <br />
      <span className="text-pink-300 font-medium">love, learning, and laughter</span>
    </h2>
    <p className="mt-3 text-sm italic">Little Hearts, Big Faith!</p>
  </div>

  <button className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white bg-opacity-60 flex items-center justify-center">
    <svg
      className="w-4 h-4 text-black"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
  </button>
  <button className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white bg-opacity-60 flex items-center justify-center">
    <svg
      className="w-4 h-4 text-black"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
  </button>
</div>

<div className="bg-[#F9C9C9] px-4 py-12">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:gap-6 gap-8">
        <div className="md:w-[65%]">
      <h2 className="text-2xl md:text-3xl font-bold text-[#1C144E] mb-4 leading-snug">
        A Safe & Joyful <br /> Place to Grow
      </h2>
      <p className="text-sm text-[#1C144E] leading-relaxed">
        At our Children’s Ministry, we create a loving, fun, and faith-filled environment 
        where kids can discover God’s love. Through Bible stories, songs, and exciting activities, 
        we help little hearts grow into strong believers.
      </p>
    </div>
    <div className="bg-[#FADADA] border-2 border-[#1C144E] px-5 py-3 rounded-lg w-[220px] text-center shrink-0">
      <div className="text-[13px] text-[#1C144E] leading-relaxed">
        Train up a child in the <br />
        way he should go, and <br />
        when he is old, he will <br />
        not depart from it.
      </div>
      <p className="mt-3 text-sm font-semibold text-[#1C144E]">~ Proverbs 22:6</p>
    </div>
  </div>
</div>

<div
  className="relative bg-cover bg-center px-4 py-12"
  style={{
    backgroundImage: "url('/childreen.jpg')",
    minHeight: "500px",
  }}>
  <div className="max-w-6xl mx-auto h-full flex flex-col md:flex-row justify-between items-start md:items-stretch">
        <div className="w-full md:w-[250px] bg-[#1C144E] text-white p-5 rounded-md shadow-md mb-6 md:mb-0 md:self-start">
      <h3 className="text-[15px] font-semibold mb-2">Online Donation</h3>
      <p className="text-[13px] leading-relaxed">
        Every child is a gift from God, and through our Children’s Ministry, we are committed to 
        nurturing their faith, character, and future. Your generous donation helps provide resources 
        for Bible lessons, engaging activities, educational materials, and a safe, loving environment.
      </p>
      <div className="mt-4 text-center">
        <button onClick={() => navigate("/donate")}
        className="px-4 py-1.5 text-xs border border-white rounded hover:bg-white hover:text-[#1C144E] transition">
          Donate
        </button>
      </div>
    </div>

    <div className="hidden md:flex-grow md:block" />
    <div className="w-full md:w-[250px] bg-white text-[#1C144E] p-5 rounded-md shadow-md md:self-end">
      <h3 className="text-[15px] font-semibold mb-2">Upcoming Events</h3>
      <p className="text-[13px] leading-relaxed">
        Training programs are critical for effective teaching and running of your department. 
        At the National level, training is available every year in preparation for the annual convention.
      </p>
      <div className="mt-4 text-center">
        <button onClick={() => navigate("/events")}
         className="px-4 py-1.5 text-xs border border-[#1C144E] rounded hover:bg-[#1C144E] hover:text-white transition">
          View Events
        </button>
      </div>
    </div>
  </div>
</div>

<div className="bg-[#FFF5D7] py-12 px-2">
  <h2 className="text-center text-sm md:text-base font-semibold tracking-wide mb-8 text-[#1C144E]">
    Ministry Activities – Faith in Action!
  </h2>
  <div className="w-full flex md:justify-between items-start gap-3 overflow-x-auto md:overflow-visible px-1 scroll-smooth">
    <div className="bg-white rounded-md shadow p-2 w-[70%] sm:w-[45%] md:w-[23%] min-w-[150px] text-center flex-shrink-0">
      <img
        src="/bibleadventure.jpg"
        alt="Bible Adventures"
        className="w-full h-[220px] object-cover rounded-md"
      />
      <p className="mt-2 text-xs font-medium text-[#1C144E]">Bible Adventures</p>
    </div>
    <div className="bg-white rounded-md shadow p-2 w-[70%] sm:w-[45%] md:w-[23%] min-w-[150px] text-center flex-shrink-0">
      <img src="/worship.jpg" alt="Worship & Music" className="w-full h-[220px] object-cover rounded-md"/>
      <p className="mt-2 text-xs font-medium text-[#1C144E]">Worship & Music</p>
    </div>
    <div className="bg-white rounded-md shadow p-2 w-[70%] sm:w-[45%] md:w-[23%] min-w-[150px] text-center flex-shrink-0">
      <img src="/kindness.jpg" alt="Kindness in Action" className="w-full h-[220px] object-cover rounded-md" />
      <p className="mt-2 text-xs font-medium text-[#1C144E]">Kindness in Action</p>
    </div>
    <div className="bg-white rounded-md shadow p-2 w-[70%] sm:w-[45%] md:w-[23%] min-w-[150px] text-center flex-shrink-0">
      <img src="/bible2.jpg" alt="Bible Adventures" className="w-full h-[220px] object-cover rounded-md"/>
      <p className="mt-2 text-xs font-medium text-[#1C144E]">Bible Adventures</p>
    </div>
  </div>
  <div className="flex justify-center mt-6 space-x-1">
    <span className="w-2 h-2 bg-[#C0C0C0] rounded-full inline-block" />
    <span className="w-2 h-2 bg-[#1C144E] rounded-full inline-block" />
    <span className="w-2 h-2 bg-[#C0C0C0] rounded-full inline-block" />
    <span className="w-2 h-2 bg-[#C0C0C0] rounded-full inline-block" />
  </div>
</div>

<div className="bg-white rounded-xl shadow-md px-4 py-8 max-w-2xl mx-auto text-center mt-10 mb-8">
  <h3 className="text-[#8B008B] font-semibold italic text-base mb-4">
    Our Faith Confessions
  </h3>
  <p className="text-[#8B008B] text-sm leading-relaxed max-w-xl mx-auto">
    You shall teach them diligently to your children, and shall talk of them when you sit in your house, 
    when you walk by the way, when you lie down, and when you rise up.
  </p>
  <p className="text-[#8B008B] text-xs mt-4 font-semibold">Deut. 6:8 NKJV</p>
  <div className="flex justify-center mt-6 space-x-1">
    <span className="w-2 h-2 bg-[#E0E0E0] rounded-full inline-block" />
    <span className="w-2 h-2 bg-[#8B008B] rounded-full inline-block" />
    <span className="w-2 h-2 bg-[#E0E0E0] rounded-full inline-block" />
    <span className="w-2 h-2 bg-[#E0E0E0] rounded-full inline-block" />
  </div>
</div>

<div className="bg-[#D7C9F2] pt-12 pb-4 px-4 mt-8">
  <div className="text-center mb-10">
  <h2 className="text-lg font-medium text-[#1D1D1D]">
    Our Leadership
  </h2>
  <img src="/Line.jpg" alt="Arrow underline" className="mx-auto mt-1 w-20" />
</div>

  <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    <div className="text-center">
      <img
        src="/children1.jpg"
        alt="Angnes Jade"
        className="w-40 h-40 mx-auto object-cover rounded-xl shadow-md"
      />
      <p className="mt-0.5 text-sm font-semibold text-[#1D1D1D]">Angnes Jade</p>
      <p className="text-sm text-[#1D1D1D]">Executive</p>
    </div>
    <div className="text-center">
      <img
        src="/children2.jpg"
        alt="Michael Adegbenro"
        className="w-40 h-40 mx-auto object-cover rounded-xl shadow-md"
      />
      <p className="mt-0.5 text-sm font-semibold text-[#1D1D1D]">Amanda Kolu</p>
      <p className="text-sm text-[#1D1D1D]">Executive</p>
    </div>
    <div className="text-center">
      <img
        src="/children3.jpg"
        alt="David Johnson"
        className="w-40 h-40 mx-auto object-cover rounded-xl shadow-md"
      />
      <p className="mt-0.5 text-sm font-semibold text-[#1D1D1D]">Geneveive Nneji</p>
      <p className="text-sm text-[#1D1D1D]">Executive</p>
    </div>
    <div className="text-center">
      <img
        src="/children3.jpg"
        alt="Ayinde Tolu"
        className="w-40 h-40 mx-auto object-cover rounded-xl shadow-md"
      />
      <p className="mt-0.5 text-sm font-semibold text-[#1D1D1D]">Sewa Afolabi</p>
      <p className="text-sm text-[#1D1D1D]">Executive</p>
    </div>
    <div className="text-center">
      <img
        src="/children1.jpg"
        alt="Michael Ali"
        className="w-40 h-40 mx-auto object-cover rounded-xl shadow-md"
      />
      <p className="mt-0.5 text-sm font-semibold text-[#1D1D1D]">Grace Alinko</p>
      <p className="text-sm text-[#1D1D1D]">Executive</p>
    </div>
    <div className="text-center">
      <img
        src="/children2.jpg"
        alt="Solomon Alex"
        className="w-40 h-40 mx-auto object-cover rounded-xl shadow-md"
      />
      <p className="mt-0.5 text-sm font-semibold text-[#1D1D1D]">Sade Wellington</p>
      <p className="text-sm text-[#1D1D1D]">Executive</p>
    </div>
  </div>
</div>
</div>
    </MainLayout>
  );
};
export default ChildrenMinistry;
