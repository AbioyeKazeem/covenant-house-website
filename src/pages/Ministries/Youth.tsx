import HeaderWithBackButton from "../../components/HeaderWithBackButton";
import MainLayout from "../../MainLayout";

const YouthMinistry = () => {
  return (
    <MainLayout>
      <div className="pt-[43px] pb-[80px] px-4">
        <HeaderWithBackButton title="YOUTH MINISTRY" />
<div className="bg-white px-4 py-10">
  <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start gap-2">
        <div className="lg:w-1/2 w-full mt-4 pr-2">
      <h2 className="text-[22px] font-bold leading-snug mb-2">
        Raising a Generation of <br />
        <span className="text-black">Purpose, Passion & Power.</span>
      </h2>
      <p className="text-[14px] text-gray-800 leading-snug">
        The Youth Ministry is a place to grow in faith, connect in fellowship, and lead with purpose.
      </p>
    </div>
    <div className="lg:w-1/2 w-full relative min-h-[380px]">
      <img
        src="/youth1.jpg"
        alt="Youth Ministry group worship"
        className="absolute top-0 right-0 w-[90%] h-[300px] object-cover rounded-md shadow-lg z-10"
      />
      <img
        src="/youth2.jpg"
        alt="Youth Ministry hands joined"
        className="absolute bottom-0 left-0 w-[50%] h-[250px] object-cover rounded-md shadow-md z-20"
      />
    </div>
  </div>
</div>

<div className="bg-white text-center">
  <div className="bg-[#1E1A45] py-4">
    <h2 className="text-white text-lg md:text-xl font-mono font-semibold">
      A Home for Every Young Heart
    </h2>
  </div>
  <div className="px-6 py-6 max-w-3xl mx-auto">
    <p className="text-gray-800 text-[15px] leading-relaxed">
      Welcome to a community where young people are <br />
      empowered to discover their purpose, strengthen their <br />
      faith, and make a difference. Through worship, discipleship, <br />
      and service, we are building a legacy of passionate <br />
      believers who will shape the future.
    </p>
  </div>
  <div className="bg-[#1E1A45] py-4 px-4">
    <p className="text-white text-[14px] leading-snug max-w-2xl mx-auto">
      Don’t let anyone look down on you because you are young, but set an example for the believers in <br />
      speech, in conduct, in love, in faith, and in purity.
      <br />
      <span className="italic font-semibold">– 1 Timothy 4:12</span>
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
        Welcome to a community where young people are empowered to discover their purpose, strengthen their faith, and make a difference.
      </p>
    </div>

    <div className="w-full md:w-[60%] ml-auto">
      <div className="flex items-center mb-2">
        <h3 className="text-[15px] font-bold text-gray-900">Our Mission</h3>
        <div className="w-2 h-2 bg-gray-900 rounded-full mx-2"></div>
        <div className="flex-grow h-[2px] bg-gray-900"></div>
      </div>
      <p className="text-[14px] text-gray-700 leading-relaxed">
        Welcome to a community where young people are empowered to discover their purpose, strengthen their faith, and make a difference.
      </p>
    </div>

  </div>
</div>

<div className="bg-white py-20 px-4 text-center ">
  <h2 className="text-[14px] font-medium text-indigo-900 tracking-wide mb-8">
    The Pillars of <span className="font-semibold">Youth Engagement</span>
  </h2>

  <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-6">
    <div className="bg-white rounded-lg shadow-md w-[250px] p-4">
      <img
        src="/youthleft.jpg"
        alt="Service & Outreach"
        className="w-full h-[160px] object-cover rounded-md mb-3"
      />
      <p className="text-sm font-medium text-gray-800">Service & Outreach</p>
    </div>
    <div className="bg-white rounded-lg shadow-lg w-[250px] p-4 scale-[1.05]">
      <img
        src="/youthcenter.jpg"
        alt="Service & Outreach"
        className="w-full h-[160px] object-cover rounded-md mb-3"
      />
      <p className="text-sm font-semibold text-gray-900">Service & Outreach</p>
    </div>
    <div className="bg-white rounded-lg shadow-md w-[250px] p-4">
      <img
        src="/youthright.jpg"
        alt="Service & Outreach"
        className="w-full h-[160px] object-cover rounded-md mb-3"
      />
      <p className="text-sm font-medium text-gray-800">Service & Outreach</p>
    </div>
  </div>
  <div className="flex justify-center items-center space-x-2 mb-6">
    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
    <div className="w-2.5 h-2.5 bg-indigo-800 rounded-full"></div>
    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
  </div>
  <div className="text-sm text-gray-700">
    <p className="italic font-medium mb-1">Want to be a part of us?</p>
    <a href="/events" className="text-indigo-800 underline font-medium">
      See our upcoming events
    </a>
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
        alt="Anonymous"
        className="w-40 h-40 mx-auto object-cover rounded-xl shadow-md"
      />
      <p className="mt-0.5 text-sm font-semibold text-[#1D1D1D]">Anonymous</p>
      <p className="text-sm text-[#1D1D1D]">Youth Pastor</p>
    </div>
    <div className="text-center">
      <img
        src="/blankplaceholderfemale.jpg"
        alt="Anonymous"
        className="w-40 h-40 mx-auto object-cover rounded-xl shadow-md"
      />
      <p className="mt-0.5 text-sm font-semibold text-[#1D1D1D]">Anonymous</p>
      <p className="text-sm text-[#1D1D1D]">Executive</p>
    </div>
    <div className="text-center">
      <img
        src="/blankplaceholdermale.jpg"
        alt="Anonymous"
        className="w-40 h-40 mx-auto object-cover rounded-xl shadow-md"
      />
      <p className="mt-0.5 text-sm font-semibold text-[#1D1D1D]">Anonymous</p>
      <p className="text-sm text-[#1D1D1D]">Choirster</p>
    </div>
    <div className="text-center">
      <img
        src="/blankplaceholderfemale.jpg"
        alt="Anonymous"
        className="w-40 h-40 mx-auto object-cover rounded-xl shadow-md"
      />
      <p className="mt-0.5 text-sm font-semibold text-[#1D1D1D]">Anonymous</p>
      <p className="text-sm text-[#1D1D1D]">MIM Executive</p>
    </div>
    <div className="text-center">
      <img
        src="/blankplaceholdermale.jpg"
        alt="Anonymous"
        className="w-40 h-40 mx-auto object-cover rounded-xl shadow-md"
      />
      <p className="mt-0.5 text-sm font-semibold text-[#1D1D1D]">Anonymous</p>
      <p className="text-sm text-[#1D1D1D]">MIM Executive</p>
    </div>
    <div className="text-center">
      <img
        src="/blankplaceholderfemale.jpg"
        alt="Anonymous"
        className="w-40 h-40 mx-auto object-cover rounded-xl shadow-md"
      />
      <p className="mt-0.5 text-sm font-semibold text-[#1D1D1D]">Anonymous</p>
      <p className="text-sm text-[#1D1D1D]">MIM Executive</p>
    </div>
  </div>
</div>


</div>
    </MainLayout>
  );
};
export default YouthMinistry;
