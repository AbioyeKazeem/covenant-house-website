import { useNavigate } from "react-router-dom";
import HeaderWithBackButton from "../../components/HeaderWithBackButton";
import MainLayout from "../../MainLayout";

const MenMinistry = () => {
  const navigate = useNavigate(); 

  return (
    <MainLayout>
      <div className="pt-[43px] pb-[80px] px-4">
        <HeaderWithBackButton title="MEN MINISTRY" />

        <div className="text-center mt-6">
          <p className="text-[20px] font-poppins font-medium text-black italic mb-2">
            "Men of Faith, Strength, and Service."
          </p>
          <p className="text-[14px] font-poppins text-black">
            Guided by God, United in Brotherhood.
          </p>
        </div>

        <div className="relative w-full max-w-[850px] h-[360px] mx-auto mt-10">
          <img
            src="/MenLightBlue.jpg"
            alt="Light Blue Layer"
            className="absolute top-[-14px] right-[2px] w-[50%] z-0"
          />
          <img
            src="/MenDarkBlue.jpg"
            alt="Dark Blue Layer"
            className="absolute top-[-30px] left-[-30px] w-[80%] z-10"
          />
          <img
            src="/Men1.jpg"
            alt="Men Ministry"
            className="relative z-20 w-[75%] mx-auto rounded-md shadow-xl"
          />
        </div>

        <div className="mt-4 text-center max-w-[700px] mx-auto">
          <h2 className="text-[20px] font-semibold tracking-wide text-[#1D1D1D] mb-1">
            About The Men's Ministry
          </h2>
          <img src="/Line.jpg" alt="Arrow underline" className="mx-auto mt-[-4px]" />
          <p className="italic text-[16px] text-gray-700">
            Be watchful, stand firm in the faith, act like men, be strong
          </p>
          <p className="text-[14px] text-gray-600 mt-1 font-medium">
            – 1 Corinthians 16:13
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-start max-w-6xl mx-auto px-4">
          <div className="text-[#1D1D1D] font-poppins text-[14px] leading-relaxed">
            <h3 className="font-semibold text-[16px] mb-2">Our Vision</h3>
            <p className="mb-4">
              Empowering men to grow in faith, lead with integrity, and serve with purpose,
              building strong families, communities, and a deeper relationship with Christ.
            </p>

            <h3 className="font-semibold text-[16px] mb-2">Our Mission</h3>
            <p>
              Our mission is to nurture godly men by fostering spiritual growth, leadership,
              and brotherhood. Through Bible study, prayer, mentorship, and fellowship, we equip
              men to lead with integrity in their homes, workplaces, and communities. We are committed
              to strengthening faith, building strong relationships, and encouraging men to serve with
              purpose, making a lasting impact on the church and society.
            </p>
          </div>
          <div className="flex items-start">
            <img
              src="/menmission.jpg"
              alt="Men Ministry Worship"
              className="w-full max-h-[260px] max-w-[400px] object-cover rounded-md shadow-md"
            />
          </div>
        </div>

        <div className="mt-16 px-4 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-6 items-center">
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center">
              <img
                src="/menprog1.jpg"
                alt="Men’s Fellowship & Prayer Meetings"
                className="w-full rounded-md shadow-md"
              />
              <p className="mt-2 text-sm font-semibold text-[#1D1D1D]">
                Men’s Fellowship & Prayer Meetings
              </p>
            </div>

            <div className="text-center">
              <img
                src="/menbible.jpg"
                alt="Bible Study & Discipleship"
                className="w-full rounded-md shadow-md"
              />
              <p className="mt-2 text-sm font-semibold text-[#1D1D1D]">
                Bible Study & Discipleship
              </p>
            </div>

            <div className="text-center">
              <img
                src="/menmentor.jpg"
                alt="Mentorship & Leadership"
                className="w-full rounded-md shadow-md"
              />
              <p className="mt-2 text-sm font-semibold text-[#1D1D1D]">
                Mentorship & Leadership
              </p>
            </div>

            <div className="text-center">
              <img
                src="/menservice.jpg"
                alt="Service & Outreach"
                className="w-full rounded-md shadow-md"/>
              <p className="mt-2 text-sm font-semibold text-[#1D1D1D]">
                Service & Outreach
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center h-full space-y-2">
            <div className="bg-[#E5F1FF] text-[#1D4ED8] px-4 py-2 text-[14px] font-medium rounded text-center">
              Programs and Activities
            </div>
            <img src="/Line.jpg" alt="Arrow underline" />
          </div>
        </div>
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => navigate("/events")}
            className="border border-[#1D4ED8] text-[#1D4ED8] px-6 py-2 rounded-md text-sm font-medium hover:bg-[#E5F1FF] transition">
            View Upcoming Events
          </button>
        </div>

        <div className="bg-[#D7C9F2] pt-12 pb-4 px-4 mt-20">
          <div className="text-center mb-10">
            <h2 className="text-lg font-medium text-[#1D1D1D]">Our Leadership</h2>
            <img src="/Line.jpg" alt="Arrow underline" className="mx-auto mt-1 w-20" />
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="text-center">
              <img
                src="/menleader1.jpg"
                alt="John Chukwu"
                className="w-40 h-40 mx-auto object-cover rounded-xl shadow-md"
              />
              <p className="mt-0.5 text-sm font-semibold text-[#1D1D1D]">John Chukwu</p>
              <p className="text-sm text-[#1D1D1D]">MIM Executive</p>
            </div>
            <div className="text-center">
              <img
                src="/menleader2.jpg"
                alt="Michael Adegbenro"
                className="w-40 h-40 mx-auto object-cover rounded-xl shadow-md"
              />
              <p className="mt-0.5 text-sm font-semibold text-[#1D1D1D]">Michael Adegbenro</p>
              <p className="text-sm text-[#1D1D1D]">MIM Executive</p>
            </div>
            <div className="text-center">
              <img
                src="/menleader3.jpg"
                alt="David Johnson"
                className="w-40 h-40 mx-auto object-cover rounded-xl shadow-md"
              />
              <p className="mt-0.5 text-sm font-semibold text-[#1D1D1D]">David Johnson</p>
              <p className="text-sm text-[#1D1D1D]">MIM Executive</p>
            </div>
            <div className="text-center">
              <img
                src="/menleader2.jpg"
                alt="Ayinde Tolu"
                className="w-40 h-40 mx-auto object-cover rounded-xl shadow-md"
              />
              <p className="mt-0.5 text-sm font-semibold text-[#1D1D1D]">Ayinde Tolu</p>
              <p className="text-sm text-[#1D1D1D]">MIM Executive</p>
            </div>
            <div className="text-center">
              <img
                src="/menleader3.jpg"
                alt="Michael Ali"
                className="w-40 h-40 mx-auto object-cover rounded-xl shadow-md"
              />
              <p className="mt-0.5 text-sm font-semibold text-[#1D1D1D]">Michael Ali</p>
              <p className="text-sm text-[#1D1D1D]">MIM Executive</p>
            </div>
            <div className="text-center">
              <img
                src="/menleader1.jpg"
                alt="Solomon Alex"
                className="w-40 h-40 mx-auto object-cover rounded-xl shadow-md"
              />
              <p className="mt-0.5 text-sm font-semibold text-[#1D1D1D]">Solomon Alex</p>
              <p className="text-sm text-[#1D1D1D]">MIM Executive</p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
export default MenMinistry;
