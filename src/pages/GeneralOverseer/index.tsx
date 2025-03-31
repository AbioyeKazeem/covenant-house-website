import HeaderWithBackButton from "../../components/HeaderWithBackButton";
import MainLayout from "../../MainLayout";
import { useState } from "react";

const PastorProfile = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  const sections = [
    {
      title: "His Early Life and Career",
      content: [
        "Pastor E.A. Adeboye was born on 2nd March 1942 at Ifewara in the present day Osun State. His parents 9now of blessed memory) were indigenes of the town, which is about midway between Ilesha and Ondo towns.",
        "He had a strict Christian upbring which was engineered by a church going culture, which was the prevalent style of Christianity of those days. This church-going attitude gave him an appreciation of God, but made no extraordinary or outstanding Christian out of him.",
        "He under went primary and secondary education which were almost curtailed due to the problem of funds, barefooted and in tears. He recalls “for the first seventeen years of my life, I never had to wear shoes”. However, as God would have it, he survived against all odds to graduate from the University in 1967, at the age of 25. Between 1967 and 1975 he had added two more degrees, an M.Sc in hydrodynamics and a Ph.D in Applied Mathematics, and lectured at the University of Lagos and university of Ilorin. Before his lectureship at these Universities, the G.O had taught mathematics at two secondary schools viz: Okeigbo Grammar School, Okeigbo near Ondo and the Lagos Anglican Girls Grammar School, Surulere – Lagos.",
        "It would appear that his academic and professional career and achievement greatly prepared him for the office into which God was to call him later on.",
      ],
    },
    {
      title: "Becoming A Born Again Christian",
      content: [
        "His childhood Christian background had made him to appreciate God in the ordinary sense. However, it was not strict enough to preclude him from being an active young man engaging in all the perks to which a young lecturer and an educated man was “entitled”, even though he was married.",
        "Married in 1968 to his wife, Pastor (Mrs.) Folu Adeboye, the young couple was faced with the problem of recurrent caesarian section by which the wife had delivered their first two babies. Medical science had diagnosed that in view of the formation of pelvic bones, having babies by natural means was impossible and such advised against having further children. A solution had to be found.",
        "How his Christian background did not preclude him from trying out other areas outside of his Christian belief where solutions might be found. In any case, his Yoruba cultural background was not averse to syncretism. “Olorun ko ko aajo” his people are wont to say, that is “God (or belief in Him) is not opposed to native remedies”. The implication of which is that if prayers are not effective, the nature medicine-man is available.",
        "As part of the solution-seeking odyssey, the young University teacher and his wife were invited to the Redeemed Christian Church of god by his uncle, Rev. Chris Fajemirokun. Though leaded by unlettered men, the visibility of the power of God was not lost on the young couple. The church was then headed by Pastor Josiah Oluwafemi Akindayomi, the General Superintendent (GS), a man who did not have any formal education and spoke no English but his native Yoruba language. However, compared to his own educated mind, this man and the other men of God in the church were infinitely superior to him the knowledge and ways of god, and especially in their examination and exposition of the Bible. The sermons of the GS and those of his lieutenants were quite incisive, thought-provoking and soul-stirring. Here were men who despite their educational handicap would not compromise God’s standard.",
        "It was also here that he learnt that his way of life would lead him directly and unwaveringly in only one direction – HELL FIRE! He also learnt of the importance of looking up to Jesus as “the Author and Finisher of our faith” and the need “to cast all our cares upon Him”. So, when on 29th of July 1973, the altar call was made in the church for those who wanted to surrender their lives to Jesus, forsake their sinful ways, and become born again, the young man, who was to become the General Overseer of the church rushed forward, and in a remorseful show of penitence, gave his life unto Jesus! Reflecting later on his conversion he said, “something overwhelmed me that mighty: that I was close to hell and I didn’t know it. I suddenly realized that it is possible to have all the Ph.d’s in the world and still be on the losing side. I know all the formula but I did not know the one eternal life”.",
      ],
    },
    {
      title: "Growth And Development In The Lord",
      content: [
        "Life took on new meaning for the new convert as he now immersed himself totally in the work of God. The zeal for God became a consuming passion, and everything concerning him began to take a new turn. The difference between life as a Church goer and as a born-again Christian and child of God became manifestly clear. He put God first in everything and became baptised by immersion in water in September 1973.",
        "As a worker in the church, he labored assiduously to propagate the gospel of Jesus Christ through his personal life, evangelism, crusades etc. It was therefore no surprise when two years later on September 14, 1975, he was ordained with four other men of God, as a Pastor of the church. By this time, in view of his ability at interpreting, he had also become the English language interpreter to the General Superintendent, whose sermon was given in Yoruba language.",
        "To test their new faith in the Lord, and standing upon His promises, the Pastor’s wife who had been asked to stop bearing children became pregnant again. In the fullness of her term, she was delivered of a baby boy in 1978 at the church’s maternity center in Ebute-Metta, Lagos. The baby, which came against medical advice was delivered naturally by the Church’s midwives and was named OLUWADAMILARE. This miracle birth was a source of joy to the couple and they never tired of showing him off to friends and family as a physical manifestation of God’s faithfulness to those who serve him in spirit and in truth.",
        "A second miracle baby followed in 1982 through the same process of natural delivery, at the same maternity center of the church and by the same church midwives. The baby, named OLUWAGBEMILEKE became the final confirmation by the couple tot heir friends that with God nothing shall be impossible, and that when you are totally committed to and dependent on God, He will not let you down.",
        "At the Holy Ghost service of January 1997, the GO gave a personal testimony about total dependence on God, which related to his first miracle child. He recalled that when in 1981 the baby fell ill he prayed, fasted, spoke in tongues and generally travailed for the child to no effect. In fact, the condition of the child worsened as day after day, the baby refused to eat. On the tenth day, contrite and utterly broken, he now besought the face of the Lord, “Daddy, why have you refused to heal my child?” God replied him, “Since he is your child, you heal him yourself”. “Well in that case, recanted the man of God, “Daddy, heal your child”. And to the glory of God, in a moment of time the child had started playing and hungering for food.",
      ],
    },
    {
      title: "The Divine Call To Leadership",
      content: [
        "The appointment of Pastor E.A. Adeboye to the leadership of the Redeemed Christian Church of God as the General Overseer had been revealed even before he became a member of the Church. The revelation had come to the General Superintendent of the Church in early70s that his successor would be “a young educated man”.",
        "In those days it was very rare to see young educated men, especially University graduates in Pentecostal Churches, which were considered to be too fanatical for their own liberal consideration of life. Rather whenever they choose to attend churches, they settled for the more conventional ones which did not quite infringe on their freedom to continue to revel in the passions of the flesh. Thus when the young University lecturer became a member of the church in 1973, Pastor Akindayomi (the GS) was able to recognize his successor in the spirit, as the person the Lord had spoken to him about. His burning zeal for the Lord, his readiness to learn, even from people far intellectually inferior to him, his intensive study of the words of God as contained in the Bible further went to confirm the veracity of the revelation received by the General Superintendent. Coincidentally, about five years before he became the General Overseer of the church, Pastor Adeboye himself had some revelation concerning the appointment. After sharing it with his wife, they had been in complete consternation, and had fervently prayed and fasted for God to allow the cup pass over them. However, only the will of God would prevail. One year before the event, he had another divine revelation concerning the appointment.",
        "Before passing on into glory, the General Superintendent had revealed to select groups of the Church’s Councils at different instances, the divine will of God regarding his successor. From human perception, it was hardly comprehensible that a young man aged thirty-something, who joined the church just “yesterday” will become the leader of the church, over quite elderly men in their late forties, fifties and sixties who had been in the church for between fifteen and twenty years before! He also revealed that those who might not wish to see the fulfillment of the wish of God will be removed by God himself without affecting the progress of the church. In any case, God has said that His ways are not our ways.",
        "When the General Superintendent was therefore called by God to higher service on 2nd November, 1980, most members of the Church knew on whose shoulders the mantle of Elijah would fall, the question was, accepting the will of god.",
        "The will of God eventually prevailed and on 21st of January 1981 (after only seven years of accepting Jesus as his personal Lord and Savior), Pastor Enoch Adejare Adeboye, at the tender age of 38 was consecrated as the leader of the Redeemed Christian Church of God, and chose the title, “General overseer”.",
      ],
    },
  ];

  return (
    <MainLayout>
      <div className="pt-[58px] pb-[102px] font-poppins">
        <HeaderWithBackButton title="THE GENERAL OVERSEER" />
        <div className="max-w-[1033px] mx-auto mt-[51px]">
          <div className="">
            <div className="flex justify-between gap-[40px]">
              <div className="max-w-[423px]">
                <img
                  src="/overseer1.png"
                  alt="Pastor"
                  className="rounded-lg mx-auto md:mx-0"
                />
              </div>
              <div className="max-w-[570px]">
                <p className="font-normal text-[#000000] text-justify">
                  The General Overseer (G.O) of the Redeemed Christian Church of
                  God (RCCG) Pastor Enoch Adejare Adeboye is a man of God, who
                  has been a tremendous blessing and inspiration to numerous
                  people and drawn lost souls to salvation by the grace of God.
                </p>
                <p className="font-normal text-[#000000] text-justify">
                  Although he leads one of the fastest growing Christian
                  Churches in the country and probably in Africa today, majority
                  of the flock he ably shepherds apart from calling him “Daddy”
                  or “Father in the Lord” know little or nothing about him. This
                  is probably because of a philosophy which seems to emphasize
                  the power and glory of God in all that he does, rather than
                  highlight his own personal achievements or contribution to the
                  phenomenal growth of the church and the body of Christ. As he
                  will say whenever commended, “Glory be to God”.
                </p>
              </div>
            </div>

            <div className="flex pt-[91px] justify-between gap-[40px]">
              <div className="max-w-[540px]">
                <p className="text-justify">
                  In any case, the humility of Pastor Adeboye is so well-known
                  and reflected in everything that surrounds him. It has also
                  become the hallmark of the Redeemed Christian Church of God,
                  which he has led since he was appointed the head of the Church
                  in 1981. This piece is an attempt to bridge the gap regarding
                  necessary information about the General Overseer. The
                  intention is that the member of his congregation as well as
                  other Christians and Non-Christian alike can learn something
                  about his life, humble beginnings, relationship with God,
                  career and Christian ministry, and also that it is only
                  through total dedication and commitment to God that man can
                  achieve true holiness and elevation.
                </p>
                <div className="mt-[40px]">
                  {sections.map((section, index) => (
                    <div key={index} className="mb-2">
                      <button
                        className="w-full text-[#000000] font-bold text-left border-[#B9B7B9] border-b px-[8px] py-[16px] flex justify-between items-center"
                        onClick={() => toggleSection(index)}
                      >
                        {section.title}
                        <span>{openSection === index ? "-" : "+"}</span>
                      </button>
                      {openSection === index && (
                        <div className="mt-2  text-sm p-2 rounded-md">
                          {section.content.map((paragraph, i) => (
                            <p key={i} className="mb-2">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="max-w-[467px]">
                <img
                  src="/overseer2.png"
                  alt="Pastor Preaching"
                  className="rounded-lg mx-auto md:mx-0"
                />
              </div>
            </div>
          </div>

          <div className="flex space-x-4 mt-[33px] text-2xl">
            <img src="/facebook.png" alt="Facebook" width={30} height={30} />
            <img src="/youtube.png" alt="YouTube" width={30} height={30} />
            <img src="/twitter.png" alt="Email" width={30} height={30} />
            <img src="/email.png" alt="Email" width={30} height={30} />
          </div>

          <div className="mt-6 text-center">
            <button className="border-[#2F2860 px-[39px] py-[50px] rounded-md text-[#2F2860] text-[20px] font-bold">
              View This Year’s Prophecies
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default PastorProfile;
