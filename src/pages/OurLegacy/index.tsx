import MainLayout from "../../MainLayout";
import Accordion from "../../components/Accordion";
import HeaderWithBackButton from "../../components/HeaderWithBackButton";
import React from "react";

const OurLegacy = () => {
  return (
    <MainLayout>
      <div className=" pt-[43px] pb-[80px] ">
        <HeaderWithBackButton
          title="OUR LEGACY"
          description="One generation shall commend Your works to another, and shall declare Your mighty acts. Psalm 145:4"
        />

        {/* Accordions */}
        <div className="mt-8 flex flex-col gap-4 w-full max-w-[773px] mx-auto px-4 md:px-0">
          <Accordion
            title="Abraham Our Father" 
            content="Legacy is important to all people; As Israel’s legacy has its root from Abraham so does the legacy of the Redeemed Christian Church of God; God reaffirmed His promise to Abraham in Genesis 17: 1-9; In Genesis 26: 1-5 it was Isaac’s turn to enjoy a legacy"
          />
          <Accordion
            title="A Legacy Is Born"
            content="Abraham’s obedience created a wonderful legacy for his son, Isaac. Genesis 26: 12-16; 
Jacob further enjoyed the legacy of his fathers Genesis 35:12-15;

“And the land which I gave Abraham and Isaac, to thee I will give it, and to thy seed after thee will I give the land.”; 

Passing on the Touch from Abraham to Isaac…;

In Genesis 26: 1-5 it was Isaac’s turn to enjoy a legacy;

“…And the Lord appeared to Isaac and said, Go not down to Egypt; dwell in the land which I shall tell thee of.”;

Then Isaac sowed in the land, and received in the same year a hundredfold: and the Lord Blessed him"/>
          <Accordion
            title="From Isaac to Jacob"
            content="Jacob enjoyed the legacy of his fathers; “And Jacob called the name of the place where God spoke with him, Bethel.” –Genesis 35: 12-15; Israel continued to enjoy the legacy when God raised Moses to lead Israel out of Egypt;The spoken word over the children of Israel could not be kept bound by the Egyptians; “I am the God of thy father, the God of Abraham, the God of Isaac, and the God of Jacob”; “I have surely seen the affliction of my people which are in Egypt, and have heard their cry…for I know their sorrows”; "/>
          <Accordion
            title="One Generation to Another"
            content="Today we who are the seed of Abraham by faith in Christ Jesus, enjoy the legacy of Israel. For He hath remembered his covenant forever, the word which he commanded to a thousand generations."/>
          <Accordion
            title="History Of RCCG"
            content="God was the foundation as He called out a man.; RCCG started in Nigeria in 1952 by a man of God; Reverend Josiah Akindayomi; Though an illiterate he was mighty in the word; “And God has chosen the weak things of the world to confound the things which are mighty”; Reverend Josiah Akindayomi “Papa”"
          />
          <Accordion
            title="Papa's Legacy"
            content="JAs Israel is enjoying the covenant of Abraham today, so is RCCG enjoying God’s covenant with late Pa Akindayomi; RCCG has always been blessed with continuity in Leadership. This has helped to stabilize the Mission; 
            Papa was ably assisted by his wife (also late, known as Mama Akindayomi). Papa’s early team was made up of Aaron’s and Ur’s among whom are…
            The General Overseer a.k.a “Daddy G.O” and his wife; Deputy General Overseer Governing council member Served alongside Papa; Assistant General Overseer Pastor P.O. Ojo; Assistant General Overseer Pastor Michael Ojo;  Assistant General Overseer Pastor D.A. Otegbade; Assistant General Overseer Pastor A.A. Aderibigbe; Assistant General Overseer Pastor D.A. Ilori; Assistant General Overseer Pastor J.A. Akindele"/>
        
        <Accordion
            title="Papa Handed Over"
            content="To the present General Overseer Pastor Enoch. A Adeboye A.k.a. “Daddy G.O”;

There were 40 parishes in all when Pastor Adeboye took over the leadership; God began to fulfill the covenant He made with the founder through Pastor Adeboye; RCCG since the 80’s Phenomenal growth started; 1990: Model parishes were planted.

First English service started at the headquarter church in Ebute Metta, Lagos state in Nigeria; 

RCCG Engaged in various outreach programs including:

Christ the Redeemer’s Friends Universal (CRFU); Christ Redeemer’s Welfare (CRW); Jesus in the Market Places (JIM); Redeemed Christian fellowships on College campuses; Missions established in foreign countries in the 90’s; Over 6000 parishes worldwide to date In Africa, Europe, Asia, middle-east and North and South America; About over 300 churches in North America"/>

<Accordion
            title="Popular Church Program"
            content="The Holy Ghost Service; A monthly all night miracle service; First Friday @ the Redemption camp in Lagos Nigeria; Millions in attendance from around the world; Now held in London quarterly; And in some cities in North America including Washington DC, Toronto ON, etc; A more complete audio visual DVD will be produced during the Legacy Week includes :Voice recordings of Pa Akindayomi; Detailed Bio of the General Overseer; Detailed Bio of the AGO’s; Video clips from various ministrations and events; Historical buildings and new sanctuaries worldwide."/>

        
        </div>
      </div>
    </MainLayout>
  );
};

export default OurLegacy;
