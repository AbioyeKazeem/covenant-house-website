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
            title="God"
            content="As revealed unto us by the Bible, we believe that there is only one God; Who is the Creator of both visible and invisible creatures – 
Gen. 1:1;
Ps. 86:9-10; 
Is. 43:10-11;
John 1:1-3. 
Only God will be in existence forever. Ez. 3:14;In God every creature receives life -John 5:26."
          />
          <Accordion
            title="Jesus Christ"
            content="Jesus of Nazareth is the Christ, the Son of the living God. He came to the world purposely to save sinners according to the scriptures. He has existed throughout eternity, one of the persons of the Holy Trinity. He is the Son, the only begotten Son of God and the beloved of God. His coming to the world had been foretold before He ever came in the flesh to die for us. He was born by Virgin Mary, conceived of the Holy Spirit, without sin. He lived a perfect life, preached the gospel of the kingdom of God, performed miracles, healed the sick and raised the dead. He voluntarily surrendered his life to his enemies to be crucified. He then resurrected, and ascended to heaven to become our high priest. Jesus Christ will return to establish the kingdom of God on earth, and rule as King of Kings and Lord of Lords with His saints forever. Matthew 17:15-17, John 1:1-14, Acts 2:32-33, Hebrews 4:14-15, Revelation 1:13:16"
          />
          <Accordion
            title="The Holy Spirit"
            content="The Holy Spirit is the third Person in the TRINITY. He has the same power, the same glory with God the Father and God the Son – John 14:16-17; John 15:26; Matt. 3:16; Acts 13:24. He is one with Father and the Son who is to be worshiped and served. Three Persons that become one are the source of blessings to all the living creatures in Heaven and on earth – Matt. 28:19; II Cor. 13:14; I John 1:5-7.
The Holy Spirit has a great work to perform. He Teaches, He Speaks to men, and bears witness in us – Acts 16:6-7;
He performs the work of regeneration for man- John 3:5-6; 
He also performs the work of Sanctification in the born again souls until they are fully sanctified – John 16:8; Eph 1:17-19; II Thess. 2:13; I Cor. 6:11. 
This same Holy Spirit endows believers with gifts they can use – I Cor 12:7; He empowers one in the Lord. Acts 1:8."
          />
          <Accordion
            title="The Trinity"
            content="We believe in the Divine Trinity. One Triune God exists in three Persons – Father, Son and Holy Spirit – eternal in being, identical in nature, equal in power and glory and having the same attributes and perfections

Matthew 3:16-17,
2 Corinthians 13:14,
Hebrews 9:14,
1 Peter 1:2,
1 John 5:7"
          />
          <Accordion
            title="The Fall of Man"
            content="Man (Adam) was created in the image of God before whom he walked in innocence, holiness, and purity, but by voluntary disobedience and transgression, he fell from the glory of God to the depths of sin. The consequence of this is that all mankind became sinners by nature having been born after the fallen image of Adam. In his fallen state man is incapable of pleasing God or having any relationship with Him. Every man is totally inclined to evil, guilt and without excuse, deserving the condemnation and judgment of a just and Holy God.

Genesis 1:26-31,
Genesis 2:7,
Psalm 139:14,
Col. 1:16,
Psalm 51:5,
Mark 1:15"/>

<Accordion title="Salvation"
content="Sin is an inward spiritual attitude of rebellion towards God, which is expressed in outward acts of disobedience. Man in his fallen state cannot approach God or save himself and therefore needs a savior. Jesus Christ came to save us from our sins. Himself without sin, He took our sins upon Him, died in our place, and rose again from the dead, that we might be forgiven and receive eternal life. The word salvation in the Greek means “soteria” which is translated “saving” or “deliverance” and preservation from destruction and judgment. To appropriate salvation, we must acknowledge our sins and repent from them; we must believe that Christ died for us, and rose again; we must receive the risen Christ as our personal Savior, and we must publicly confess Him as our Lord. Hebrews 9:29
Romans 3:10,23
Acts 3:19,
Romans 10:8-13,
Jude 3:24"/>

<Accordion title="Sanctification"
content="The word sanctification in the Greek language is “hagiasmos” meaning (1) to be apart from sin (2) consecrated unto God, to be conformed to His holiness, purity, and perfection of character. The scripture teaches that “sanctified” is what the believer is [not a process, but a state, which the believer has already entered into once and for all. Acts 20:32; Romans 15:16; 2 Thessalonians 2:13; Hebrews 10:10-14; Ephesians 5:25-26; 1 Peter 1:2; Acts 26:18], and “perfect” is what he is expected to be. Perfection is a spiritual growth for those who have been sanctified and consecrated. Therefore it is the total yielding of one’s life to the Holy Spirit, living the crucified life; being an overcomer; and being conformed to the image of Christ Himself. Perfection and true holiness are impossible without the indwelling of the Holy Spirit. All attempts at achieving perfection without the Holy Spirit generally results in frustration and failure, inasmuch as “flesh”
cannot crucify flesh.
1 Peter 2:21-22,
1 Peter 1:15,
John 3:8-9,
Corinthians 10:13,
Matthew 5:48"/>

<Accordion title="Baptism of The Holy Spirit"
content="The baptism in the Holy Ghost is a supernatural enduement with power from heaven to equip the Christian for effective witness and service. The initial evidence of Holy Spirit Baptism is speaking in unknown tongue as the spirit give utterance. The unknown tongue is a prayer language given to the believer, understood by God but unknown to man. It enables the Christian to build up his own spiritual life by direct and continual communion with God, and is the gateway into a life in which both the gifts and fruits of the Holy Ghost should be manifested. In the New Testament church, this experience was considered normal for all believers.
Joel 2:28,
Luke 3:16,
Acts 2:38-39,
Acts 19:2,
Mark 16:17"/>

<Accordion title="Divine Healing"
content="Sickness is a direct consequence of the fall of man and his continuance in sin. Redemption not only dealt with sin but also its consequences, which includes sickness and diseases. Christ died on the cross; bore not only our sins, but also our sicknesses. Healing for our bodies from God comes to us through appropriation of the finished work of Christ on the cross of Calvary by faith in the word of God and manifestation of the gift of healing. Not only believers receive healing for our bodies, but also we may minister healing and deliverance to others in the name of Jesus. This can be accomplished by laying on of hands, praying for others in absentia and by getting bible believing church elders to anoint them with oil in the name of the Lord.

Luke 13:11-16,
James,
2 Corinthians 1:19-20,
1 John 3:8,
Mark 16:17-18"/>

<Accordion title="The Rapture Of The Church"
content="The rapture describes an event in the future when Jesus Christ will in the twinkling of an eye, change all believers (living and dead) to immortal, giving them a resurrected body, and catching them up to meet the Lord in the air. The word rapture simply means sudden snatching out of this world of the believers. The actual word used in the bible is “caught up”. This event marks the beginning of the seven years reign of Antichrist.
1 Thessalonians 4: 13-18,
1 Corinthians 15:23, 51-58,
Phil 3:2-21,
1 John 3:1-3,
Luke 21:31-35"/>

<Accordion title="The Rapture Great Tribulation"
content="This is a seven-year span of future world history of the reign of antichrist following immediately after the rapture: It will be the darkest time the world has ever known. It is “the day of vengeance of our Lord.” Man’s cup of iniquity is filled to overflowing, and God brings judgment upon the earth for man’s rejection of His son. During this period, the people of Israel will turn to Christ, when they will be reconciled to God through Him whom they rejected and whom they asked Pilate to crucify.
Daniel 9:24-27,
Isaiah 61:2,
Revelation 19,
1 Thessalonians 1:10,
Revelation 3:10"/>

<Accordion title="The Millenial Age"
content="The millennial age is period of one thousand years, in which the purpose of God is fully realized on the earth. It will be a time of theocratic kingdom. This period will come after the seven years reign of antichrist. After the Lord Jesus Christ has descended from heaven to earth and destroyed his enemies at the battle of Armageddon, He will set up His holy government which is going to be worldwide. It will be a time of peace, joy, holiness, glory, comfort, justice, full knowledge, the removal of curse and sickness.
Isaiah 11:1-10,
Isaiah 35:1-10,
Zechariah 9:9-10,
Zechariah 14:16-17,
Revelation 20:1-15"/>

<Accordion title="The Judgement Seat Of Christ"
content="The judgment seat of Christ is the judgment of believers. It is not a judgment of condemnation but a judgment of reward where believers will be rewarded according to our faithfulness in our service to God, quality of our Christian walk and the use of our God-given gifts and talents.
Romans 14:10,
II Corinthians 5:10,
I Peter 4: 17"/>

<Accordion title="The Eteernal Heaven"
content="The present earth that is so marred and cursed by Satan’s evil will pass away after the Great White Throne Judgment. After the dissolution of the present (atmospheric) heaven and earth at the end of the one thousand years (the millennium), God will create a new heaven and a new earth better than anything this world has ever known. The new earth will be the Christian heaven. It is the glorious eternal home of born-again believers.
Matthew 24:35,
Revelation 21:1-5,
John 14:1-3,
Revelation 22:1-5,
2 Peter 3:10"/>

<Accordion title="Eteernal Lake Of Fire Hell"
content="The lake of fire (commonly called hell) is the final abode of Satan and those sinners who reject Jesus as their Lord and savior. Hell is the place of eternal torment for the devil, his angels and all those who reject Christ as the savior.
Revelations 19:7,
Luke 16:19-31,
Revelations 20:10,15,
Matthew 25:33-34,
John 14:1-3,
Rev 7:15-17"/>

<Accordion title="Water Baptism"
content="Believing in Christ produces an inward change in our heart; baptism in water is an outward act of obedience, by which we testify of the change that has taken place in our hearts. By this act, we make ourselves one with Christ in His burial and in His resurrection; we are separated from the old life of sin and defeat; we come out of the water to lead a new life of righteousness and victory, made possible by God’s power in us.
Mark 16:16,
Matt 28:19-20,
Acts 2:38-41,
Acts 8:37-39,
Romans 6:4"/>

<Accordion title="Restitution"
content="Restitution is the act of restoring anything to it’s rightful owner; act of giving an equivalent for loss or damage. Restitution makes a person pay back just debts, restore stolen or misappropriated articles, uncover his crimes and confess his lies. This is to be done whether the person injured knew it or not – God knows.
Genesis 20:1-18,
Genesis 32:9-32,
Luke 19:8-10,
Philemon 7:21,
Acts 24:16
Note: Restitution that would implicate others or bring injury or harm to others, needs care and God’s wisdom.
In such cases, it is necessary to seek counseling from a faithful, experienced, competent, matured Christian teacher and preacher (who, of course, believes and teaches “the whole counsel of God”)."/>

<Accordion title="The Lord's Supper"
content="The Lord’s Supper, consisting of the elements – bread and the fruit of the vine is the symbol expressing our sharing the divine nature of our Lord Jesus Christ. It is a memorial of His suffering, death and a prophecy of His second coming. Jesus Christ commanded the church to do it in His remembrance. The bible record also shows the early church took this commandment seriously.
Luke 22: 14-19,
Acts 2: 42, 46,
2 Peter 1:4,
1 Corinthians 11:26"/>





        </div>
      </div>
    </MainLayout>
  );
};

export default OurBelief;
