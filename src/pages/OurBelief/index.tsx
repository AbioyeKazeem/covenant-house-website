import MainLayout from "../../MainLayout";
import Accordion from "../../components/Accordion";
import HeaderWithBackButton from "../../components/HeaderWithBackButton";
import React from "react";

const OurBelief = () => {
  return (
    <MainLayout>
      <div className=" pt-[43px] pb-[80px] ">
        <HeaderWithBackButton
          title="WE BELIEVE IN"
          description="Our faith is rooted in the unchanging truth of God’s Word. We believe in the power of the Gospel to transform lives and guide us in our daily walk with Christ."
        />

        {/* Accordions */}
        <div className="mt-8 flex flex-col gap-4 w-full max-w-[773px] mx-auto px-4 md:px-0">
          <Accordion
            title="The Bible"
            content="We believe that the Bible is 'God’s Word'. The truths revealed in it did not have their origin with men, but with God. The Holy Spirit inspired the human authors of the Bible. We therefore believe that the Bible is without error, completely true, relevant and an up-to-date book."
          />
          <Accordion
            title="Divine Healing"
            content="Sickness is a direct consequence of the fall of man and his continuance in sin. Redemption not only dealt with sin but also its consequences, which includes sickness and diseases. Christ died on the cross; bore not only our sins, but also our sicknesses. Healing for our bodies from God comes to us through appropriation of the finished work of Christ on the cross of Calvary by faith in the word of God and manifestation of the gift of healing. Not only believers receive healing for our bodies, but also we may minister healing and deliverance to others in the name of Jesus. This can be accomplished by laying on of hands, praying for others in absentia and by getting bible believing church elders to anoint them with oil in the name of the Lord."
          />
          <Accordion
            title="Jesus Christ"
            content="We believe that Jesus Christ is the Son of God, fully divine and fully human, and the only way to salvation."
          />
          <Accordion
            title="The Bible"
            content="The Bible is our foundation, and we believe it contains the inspired and infallible Word of God."
          />
          <Accordion
            title="Salvation"
            content="Sin is an inward spiritual attitude of rebellion towards God, which is expressed in outward acts of disobedience. Man in his fallen state cannot approach God or save himself and therefore needs a savior. Jesus Christ came to save us from our sins. Himself without sin, He took our sins upon Him, died in our place, and rose again from the dead, that we might be forgiven and receive eternal life. The word salvation in the Greek means “soteria” which is translated “saving” or “deliverance” and preservation from destruction and judgment. To appropriate salvation, we must acknowledge our sins and repent from them; we must believe that Christ died for us, and rose again; we must receive the risen Christ as our personal Savior, and we must publicly confess Him as our Lord."
          />
          <Accordion
            title="Jesus Christ"
            content="Jesus of Nazareth is the Christ, the Son of the living God. He came to the world purposely to save sinners according to the scriptures. He has existed throughout eternity, one of the persons of the Holy Trinity. He is the Son, the only begotten Son of God and the beloved of God. His coming to the world had been foretold before He ever came in the flesh to die for us. He was born by Virgin Mary, conceived of the Holy Spirit, without sin. He lived a perfect life, preached the gospel of the kingdom of God, performed miracles, healed the sick and raised the dead. He voluntarily surrendered his life to his enemies to be crucified. He then resurrected, and ascended to heaven to become our high priest. Jesus Christ will return to establish the kingdom of God on earth, and rule as King of Kings and Lord of Lords with His saints forever."
          />
        </div>
      </div>
    </MainLayout>
  );
};

export default OurBelief;
