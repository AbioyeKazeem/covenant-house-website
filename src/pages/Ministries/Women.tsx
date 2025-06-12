import HeaderWithBackButton from "../../components/HeaderWithBackButton";
import MainLayout from "../../MainLayout";

const WomenMinistry = () => {
  return (
    <MainLayout>
      <div className="pt-[43px] pb-[80px] px-4">
        {/* Back Button and Title */}
        <HeaderWithBackButton title="WOMEN MINISTRY" />


<div className="relative w-full h-[450px] mt-10">
  <img
    src="/womenmain.jpg"
    alt="Women of Faith"
    className="w-full h-full object-cover"
  />
  <div className="absolute inset-0 bg-black bg-opacity-25 flex items-end pb-2 px-4">
    <div className="w-full text-center">
      <h2 className="text-white tracking-wide text-[24px] md:text-[32px] font-semibold drop-shadow-sm mb-2">
        Women of Faith, Strength, and Purpose
      </h2>
      <p className="text-white text-[14px] md:text-[18px] drop-shadow-sm max-w-xl mx-auto mb-3">
        Empowering women to grow spiritually, serve wholeheartedly, and inspire the next generation.
      </p>
      <div className="inline-flex items-center text-sm md:text-base font-medium text-[#A78BFA]">
       <a href="#vision-mission" className="text-white">Our Vision & Mission</a>
        <span className="mx-2 text-white">|</span>
        <a href="#upcoming-events" className="text-white">Upcoming Events</a>
      </div>
    </div>
  </div>
</div>


<div className="bg-[#2C1A5E] text-white text-center py-12 px-4">
  <h2 className="text-[17px] font-semibold tracking-wide mb-3">A Sisterhood of Faith</h2>
  <p className="max-w-2xl mx-auto text-[14px] leading-relaxed mb-4">
    The Women’s Ministry is a sanctuary of faith and fellowship, guiding women to live with purpose,
    lead with grace, and serve with love. Through prayer, discipleship, and service, we uplift one another in Christ.
  </p>
  <p className="italic text-[13px] leading-relaxed">
    She is clothed with strength and dignity, and she laughs without fear of the future. <br />
    <span className="not-italic font-medium block mt-1">– Proverbs 31:25</span>
  </p>
</div>



<div className="mt-8 px-4 max-w-5xl mx-auto text-center">
  <h2 className="text-[20px] font-semibold text-[#1D1D1D] mb-4">
    About <span className="text-[#6B21A8]">Us</span>
  </h2>
  <p className="text-[15px] text-gray-700 leading-relaxed max-w-3xl mx-auto mb-10">
    The Women’s Ministry is a community of faith-driven women dedicated to spiritual growth, empowerment, and service.
    We are committed to nurturing a deep relationship with God, fostering sisterhood, and equipping women to live purposefully
    in their families, careers, and society. Through prayer, mentorship, and outreach, we create a space where women can thrive,
    support one another, and impact the world for Christ.
  </p>
  <div className="bg-white rounded-md p-6 shadow-md">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
     <div>
        <h3 className="text-[15px] font-semibold text-white bg-[#4C1D95] px-3 py-1 inline-block rounded mb-3">
          Our Vision
        </h3>
        <p className="text-[14px] text-gray-800 leading-relaxed">
          Empowering women to grow in faith, lead with integrity, and serve with purpose, building strong families,
          communities, and a deeper relationship with Christ.
        </p>
      </div>
      <div>
        <h3 className="text-[15px] font-semibold text-white bg-[#4C1D95] px-3 py-1 inline-block rounded mb-3">
          Our Mission
        </h3>
        <ul className="list-disc list-inside text-[14px] text-gray-800 leading-relaxed space-y-1">
          <li>To deepen spiritual growth through Bible study, prayer, and worship.</li>
          <li>To encourage and support women in all stages of life through mentorship and counseling.</li>
          <li>To promote unity and sisterhood by fostering meaningful connections and community engagement.</li>
          <li>To equip women for leadership in their families, careers, and ministries.</li>
          <li>To serve and uplift the church and society through outreach programs, charity work, and discipleship.</li>
        </ul>
      </div>
    </div>
  </div>
</div>


<div className="mt-8 px-4 text-center max-w-3xl mx-auto">
  <h2 className="text-lg font-semibold text-[#1D1D1D] mb-3">
    Ministry’s Focus Areas – <span className="text-[#6B21A8]">The Pillars of Womanhood</span>
  </h2>
  <p className="text-gray-700 mb-4">
    Our ministry is dedicated to nurturing spiritual growth, fostering fellowship, and serving with love. We aim to equip individuals to live out their faith, strengthen their families, and impact the community for Christ.
  </p>
  <p className="italic text-sm text-gray-600">
    "Let your light so shine before men, that they may see your good works, and glorify your Father which is in heaven"
  </p>
  <p className="text-sm font-medium text-gray-700 mt-1">— Matthew 5:16</p>
</div>



{/* Women Programs */}
<div className="mt-10 px-4 max-w-6xl mx-auto flex flex-col items-center">
  <div className="grid grid-cols-2 gap-8">
    <div className="text-center">
      <img
        src="/womenmentor1.jpg"
        alt="Men’s Fellowship & Prayer Meetings"
        className="w-full rounded-md shadow-md"
      />
      <p className="mt-2 text-sm font-semibold text-[#1D1D1D]">
        Discipleship & Mentorship
      </p>
     <p className="mt-6"> Guiding women in their faith journey through small groups and bible studies</p>
    </div>

    <div className="text-center">
      <img
        src="/womenmentor2.jpg"
        alt="Bible Study & Discipleship"
        className="w-full rounded-md shadow-md"
      />
      <p className="mt-2 text-sm font-semibold text-[#1D1D1D]">Bible Study & Discipleship</p>
    <p className="mt-6"> Guiding women in their faith journey through small groups and bible studies</p>

    </div>

    <div className="text-center">
      <img
        src="/womenmentor2.jpg"
        alt="Mentorship & Leadership"
        className="w-full rounded-md shadow-md"/>
      <p className="mt-2 text-sm font-semibold text-[#1D1D1D]">Mentorship & Leadership</p>
    <p className="mt-6"> Guiding women in their faith journey through small groups and bible studies</p>
    </div>

    <div className="text-center">
      <img
        src="/womenmentor1.jpg"
        alt="Service & Outreach"
        className="w-full rounded-md shadow-md"/>
    <p className="mt-2 text-sm font-semibold text-[#1D1D1D]">Service & Outreach</p>
<p className="mt-6"> Guiding women in their faith journey through small groups and bible studies</p>
    </div>
  </div>
</div>



<div className="mt-8 flex justify-center">
  <button className="border border-[#1D4ED8] text-[#1D4ED8] px-6 py-2 rounded-md text-sm font-medium hover:bg-[#E5F1FF] transition">
    View Upcoming Events
  </button>
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
        src="/womenleader1.jpg"
        alt="John Chukwu"
        className="w-40 h-40 mx-auto object-cover rounded-xl shadow-md"
      />
      <p className="mt-0.5 text-sm font-semibold text-[#1D1D1D]">Angnes Jade</p>
      <p className="text-sm text-[#1D1D1D]">MIM Executive</p>
    </div>
    <div className="text-center">
      <img
        src="/womenleader2.jpg"
        alt="Michael Adegbenro"
        className="w-40 h-40 mx-auto object-cover rounded-xl shadow-md"
      />
      <p className="mt-0.5 text-sm font-semibold text-[#1D1D1D]">Amanda Kolu</p>
      <p className="text-sm text-[#1D1D1D]">MIM Executive</p>
    </div>
    <div className="text-center">
      <img
        src="/womenleader3.jpg"
        alt="David Johnson"
        className="w-40 h-40 mx-auto object-cover rounded-xl shadow-md"
      />
      <p className="mt-0.5 text-sm font-semibold text-[#1D1D1D]">Geneveive Nneji</p>
      <p className="text-sm text-[#1D1D1D]">MIM Executive</p>
    </div>
    <div className="text-center">
      <img
        src="/womenleader2.jpg"
        alt="Ayinde Tolu"
        className="w-40 h-40 mx-auto object-cover rounded-xl shadow-md"
      />
      <p className="mt-0.5 text-sm font-semibold text-[#1D1D1D]">Sewa Afolabi</p>
      <p className="text-sm text-[#1D1D1D]">MIM Executive</p>
    </div>
    <div className="text-center">
      <img
        src="/womenleader3.jpg"
        alt="Michael Ali"
        className="w-40 h-40 mx-auto object-cover rounded-xl shadow-md"
      />
      <p className="mt-0.5 text-sm font-semibold text-[#1D1D1D]">Grace Alinko</p>
      <p className="text-sm text-[#1D1D1D]">MIM Executive</p>
    </div>
    <div className="text-center">
      <img
        src="/womenleader1.jpg"
        alt="Solomon Alex"
        className="w-40 h-40 mx-auto object-cover rounded-xl shadow-md"
      />
      <p className="mt-0.5 text-sm font-semibold text-[#1D1D1D]">Sade Wellington</p>
      <p className="text-sm text-[#1D1D1D]">MIM Executive</p>
    </div>
  </div>
</div>


</div>
    </MainLayout>
  );
};
export default WomenMinistry;
