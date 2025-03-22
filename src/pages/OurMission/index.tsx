import HeaderWithBackButton from "../../components/HeaderWithBackButton";
import MainLayout from "../../MainLayout";

const MissionPage = () => {
  return (
    <MainLayout>
      <div className=" pt-[43px] pb-[80px] ">
        <HeaderWithBackButton title="OUR MISSION" />
        {/* Image */}

        <div className="max-w-[898px] mx-auto">
          <img
            src="/Go-mission.png"
            alt="Our Mission"
            className="w-full rounded-lg shadow-md mt-[45px] "
          />

          {/* Description */}
          <p className="text-base text-[#000000] mt-[40px] font-poppins text-left">
            As received by the General Overseer (G.O.), Pastor E. A. Adeboye,
            and communicated to the Headquarters leaders, our vision and mission
            statement shall remain intact, with a qualifying addendum in view of
            the peculiarity of the demography in the North American region. They
            are as follows:
          </p>

          {/* Bullet Points */}
          <ul className="list-disc list-inside font-poppins text-left text-[#000000] mt-4">
            <li>To make heaven.</li>
            <li>To take as many people with us.</li>
            <li>To have a member of RCCG in every family of all nations.</li>
            <li>To accomplish No. 1 above, holiness will be our lifestyle.</li>
            <li>
              To accomplish No. 2 and 3 above, we will plant churches within
              five minutes walking distance in every city and town of developing
              countries and within five minutes driving distance in every city
              and town of developed countries.
            </li>
          </ul>

          {/* Closing Statement */}
          <p className="text-base text-[#000000] mt-2">
            We will pursue these objectives until every Nation in the world is
            reached for the Lord Jesus Christ.
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default MissionPage;
