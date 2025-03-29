import MainLayout from "../../MainLayout";
import HeaderWithBackButton from "../../components/HeaderWithBackButton";
import React from "react";

const cards = [
  {
    id: 1,
    image: "/Frame4.png",
    text: "In North America there are over 800 parishes (Dec. 2015) spread in various Cities and States of USA and Canada. Also there are parishes in the Caribbean states of Haiti and Jamaica. There are parishes in South America, the Middle East, Australia, etc Today, God is still doing marvelous deeds through The Redeemed Christian Church of God, worldwide. One of the well-known programs of the church is the Holy Ghost Service, an all night miracle service that holds on the first Friday of every month at the Redemption Camp at Km. 46, Lagos – Ibadan expressway. The average headcount of those who attend the Service is in millions. The Holy Ghost Service now holds all around the worldmonthly but is led by Pastor Adeboye, half-yearly in London. Similarly, Pastor Adeboye leads these services in Washington DC and Toronto, Ontario, Canada once in a year and once in Europe every two years.",
    align: "left",
    subtext: "North America Operations RCCG Today",
    year: "2019",
  },
  {
    id: 2,
    image: "/Frame3.png",
    text: "Mentored by the General Overseer of RCCG, Pastor E. A. Adeboye, Pastor Fadel started the first parish of RCCG in North America – Winner’s Chapel, Detroit in 1991.",
    align: "right",
    subtext: "1st Parish in North America Started",
    year: "April 5, 1991",
  },
  {
    id: 3,
    image: "/Frame2.png",
    text: "Since 1981, an open explosion began with the number of parishes growing in leaps and bounds. At the last count, there are at least about 4000 parishes of the Redeemed Christian Church of God in Nigeria. On the International scene, the church is present in other African nations including C’ote D’Ivoire, Ghana, Zambia, Malawi, Zaire, Tanzania, Kenya, Uganda, Gambia, Cameroon, and South Africa. In Europe , the church is fully established in the following countries: United Kingdom, Netherlands, Spain, Italy, Germany, Greece, France, Switzerland, Austria, Denmark, Sweden and Norway.",
    align: "left",
    subtext: "Church Explosion",
    year: "July 4, 1981",
  },
  {
    id: 4,
    image: "/Frame4.png",
    text: "Amidst controversy, Pastor Adeboye’s appointment was formalized by the reading of Pa Akindayomi’s sealed pronouncement after his burial.",
    align: "right",
    subtext: "Pastor Adeboye Succeeds Pa Akindayomi",
    year: "November 22, 1980",
  },
];

const OurOrigin = () => {
  return (
    <MainLayout>
      <div className=" pt-[43px] pb-[80px] ">
        <HeaderWithBackButton
          title="OUR ORIGIN"
          description="Our Journey of Faith: How It All Began"
        />
        <div className="max-w-[898px] mx-auto px-5">
          <img
            src="/Go-mission.png"
            alt="Our Mission"
            className="w-full rounded-lg shadow-md mt-[45px]"
          />
          <div className="relative py-20">
            <div className="absolute left-1/2 transform -translate-x-1/2 top-5 w-[84px] h-1 bg-[#595859]"></div>
            {/* Vertical Line Starting Below Top Horizontal Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-5 bottom-5 w-1 bg-[#595859]"></div>
            {/* Bottom Horizontal Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 bottom-5 w-[84px] h-1 bg-[#595859]"></div>

            <div className="grid gap-16">
              {cards.map((card, index) => (
                <div
                  key={card.id}
                  className={`flex items-center ${
                    card.align === "right" ? "justify-end" : "justify-start"
                  }`}
                >
                  {card.align === "left" && (
                    <div className="w-1/2 text-right pr-24 relative">
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2  w-[84px] h-1 bg-gray-500"></div>
                      <p className="text-[#2F2860] italic font-bold text-lg">
                        {card.subtext}
                      </p>
                      <p className="text-[#2F2860] italic font-bold text-base">
                        {card.year}
                      </p>
                    </div>
                  )}

                  <div
                    className="w-1/2 flex flex-col items-center text-center"
                    style={{
                      paddingRight: card.align === "right" ? "34px" : "0",
                      paddingLeft: card.align === "left" ? "34px" : "0",
                    }}
                  >
                    <img
                      src={card.image}
                      alt={`Card ${card.id}`}
                      className="w-full h-40 object-cover rounded-lg"
                    />
                    <p className="text-[#000000] text-sm mt-4 text-justify">
                      {card.text}
                    </p>
                  </div>

                  {card.align === "right" && (
                    <div className="w-1/2 text-left pl-24 relative">
                      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-[84px] h-1 bg-gray-500"></div>
                      <p className="text-[#2F2860] italic text-lg font-bold">
                        {card.subtext}
                      </p>
                      <p className="text-[#2F2860] italic font-bold  text-base">
                        {card.year}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default OurOrigin;
