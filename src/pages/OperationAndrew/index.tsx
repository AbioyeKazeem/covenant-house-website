import HeaderWithBackButton from "../../components/HeaderWithBackButton";
import MainLayout from "../../MainLayout";
import React from "react";

const OpreationAdrew = () => {
  return (
    <MainLayout>
      <div className="py-[66px]">
        <HeaderWithBackButton title="OPERATION ANDREW" />
        <div className="max-w-[831px] mx-auto font-poppins text-center italic text-[#100E22] my-[36px] px-4">
          <p>
            The purpose of this tool is to inspire passion for evangelism.
            Evangelism by itself is not a program or an event.
          </p>
          <p>
            It is only means to an end, not an end itself. Evangelism is an
            outflow of what God is doing in the hearts of His people.
          </p>
          <p>
            This must be backed with prayer. The devil will not give up it’s
            lawful captive free.
          </p>

          <p className="text-[#100E22] font-medium italic pt-[12px]">
            -Isa 49:24-25; Mt 12:29; Mk 3:27
          </p>
        </div>

        <div className="max-w-[1015px] mx-auto mt-[35px] px-4">
          <img src="/operation-andrew.png" alt="operation" className="" />
        </div>

        <section className="max-w-[1015px] mx-auto font-poppins mt-[60px] px-4">
          <div className="">
            {/* Heading */}
            <h2 className="font-medium text-[18px] text-[#2F2860] mb-[12px]">
              Inspiring Passion For Evangelism
            </h2>

            <p className="mb-[20px]">
              Operation Andrew was named after the disciple who introduced his
              brother Peter to Jesus (Jn 1:40-41). In Operation Andrew, members
              distribute a simple card with a space to write seven names of
              others who need salvation. People then commit to pray for those
              listed.
            </p>

            {/* Key Points */}
            <p className="">
              Operation Andrew focuses on prayerfully motivated evangelism by
              encouraging you to do the following:
            </p>
            <ul className="list-none">
              <li>
                <strong className=" uppercase">Look Around</strong> your mission
                field where you live, work, or go to school.
              </li>
              <li>
                <strong className=" uppercase">Look Up</strong> because God
                changes people through prayer.
              </li>
              <li>
                <strong className=" uppercase">Look Out</strong> for ways to
                cultivate friendship with each person, with the intention of
                sharing your faith.
              </li>
              <li>
                <strong className=" uppercase">Look Forward</strong> by inviting
                those on your list to special church services.
              </li>
              <li>
                <strong className=" uppercase">Look After</strong> and encourage
                those who respond to Christ or who even begin to show interest
                in the gospel. Continue to love and pray for those who do not
                respond.
              </li>
            </ul>

            {/* How to Use Section */}
            <p className="mt-6">
              Here’s how you can use Operation Andrew in your congregation:
            </p>
            <ul className="list-decimal list-inside  ">
              <li className="">
                Have a special service where the pastor teaches about Operation
                Andrew. Distribute two Operation Andrew cards to each person at
                the service.
              </li>

              <li className="">
                Ask people to write down the names of people for whom they are
                committing to pray – for salvation.
              </li>

              <li className="">
                Ask people to demonstrate a tangible commitment, such as coming
                forward and leaving one copy of their card in a special place at
                your church.
              </li>

              <li className="">
                Schedule specific times for the congregation to bring their
                Operation Andrew cards. Pray together for the salvation of
                others.
              </li>

              <li className="">
                Challenge the congregation to invite those on their Operation
                Andrew cards to specific evangelistic services.
              </li>
            </ul>

            {/* Closing Statement */}
            <p className="">
              These steps properly executed will inspire evangelism. Remember,
              evangelism is not a program; it flows from personal, godly
              relationships. It's not an accident; it is intentional, and it is
              powered through prayer.
            </p>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default OpreationAdrew;
