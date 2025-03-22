import React from "react";
import { useNavigate } from "react-router-dom";

const cards = [
  {
    image: "/values.png",
    title: "Our Values",
    link: "/values",
  },
  {
    image: "/beliefs.png",
    title: "What We Believe",
    link: "/our-beliefs",
  },
  {
    image: "/priorities.png",
    title: "Our Priorities",
    link: "/our-priorities",
  },
];

const ChurchSection = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-[#DCEBFC] py-16 text-center px-2">
      {/* Section Title */}
      <div className="md:mb-[200px]">
        <h2 className="text-3xl md:text-4xl font-bold text-[#2F2860]">
          The Church of God
        </h2>
        <p className="text-lg text-[#100E22] font-bold mt-[16px]">
          A Place of Worship & Transformation
        </p>
      </div>

      {/* Cards Container */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-10 ">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`bg-white shadow-lg rounded-xl p-4 w-[280px] md:w-[300px] text-center transition ${
              index === 1 ? "md:-mt-[250px]" : "mt-0"
            }`}
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-[275px] object-cover rounded-lg"
            />
            <button
              onClick={() => navigate(card.link)}
              className="mt-4 border-2 border-[#2F2860] text-[#2F2860] px-6 py-2 rounded-md text-sm font-semibold hover:bg-[#2F2860] hover:text-white transition"
            >
              {card.title}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChurchSection;
