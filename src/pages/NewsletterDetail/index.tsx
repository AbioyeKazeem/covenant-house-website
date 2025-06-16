// // NewsletterDetail.tsx
// import { useState, useEffect } from "react";
// import { useParams, Link } from "react-router-dom";
// import HeaderWithBackButton from "../../components/HeaderWithBackButton";
// import MainLayout from "../../MainLayout";

// // Define the Newsletter interface with content property
// interface Newsletter {
//   id: number;
//   title: string;
//   date: string;
//   image: string;
//   content: string;
//   excerpt?: string;
// }

// const NewsletterDetail = () => {
//   const { id } = useParams();
//   const [newsletter, setNewsletter] = useState<Newsletter | null>(null);
//   const [relatedNewsletters, setRelatedNewsletters] = useState<Newsletter[]>(
//     []
//   );
//   const [loading, setLoading] = useState(true);

//   // Mock data - in a real app, you would fetch this from an API
//   const newsletters: Newsletter[] = [
//     {
//       id: 1,
//       title: "Joy Unspeakable",
//       date: "March 2025",
//       image: "/blog-details.png",
//       excerpt:
//         'I welcome you to the third month of the year of the "Onward Christian Soldier"...',
//       content: `
//         <div>
//           <p>I welcome you to the third month of the year of the "Onward Christian Soldier", our landmark year. Three is a significant number in the Bible because it means completion, perfection, divine fullness. It represents the Trinity: Father, Son, and Holy Spirit. The third day, third week, third month, and so on. The Father, Son, and Holy Spirit were all present at creation. I desire into your life this month that every good dream, idea, and hope shall be resurrected in Jesus' name.</p>

//           <blockquote>"When having not seen ye love; in whom, though now ye see him not, yet believing, ye rejoice with joy unspeakable and full of glory." (1 Peter 1:8)</blockquote>

//           <h3>JOY DEFINED</h3>
//           <p>Artificial Intelligence (AI) defines joy as: "That feeling you get when something lights you up inside—like when you hear your favorite song, laugh with friends, or see a beautiful sunset. It's that upbeat, feel-good high emotion, yet it has more depth compared to the memes. It's different from just feeling happy, more so joy often stays present even in tough times, like finding a little spark of hope or meaning when things aren't perfect."</p>

//           <p>According to the Bible:</p>
//           <ul>
//             <li>Joy is a facilitator of one's access to revelation (Isaiah 12:3, Psalm 89:15). It takes joy to access the path of life. Therefore, the more joyful one is, the greater one's access to revelation.</li>
//             <li>Joy is strength (Nehemiah 8:10).</li>
//             <li>Joy adds health and vitality as joyful people do not get weakened (Proverbs 17:22, 18:14; Nehemiah 8:10, Psalms 84:7).</li>
//             <li>Joy is the facilitator of supernatural fruitfulness (Psalms 67:4-7).</li>
//           </ul>

//           <p>Most sicknesses and diseases are traceable to a broken heart because the heart is the engine of the body. When the heart is broken, it breaks down the immune system, making one susceptible to diseases. A car with a broken engine cannot run. It will be grounded. The same applies to the human body. Our body cannot be supported by the heart when it is broken. This is seen in Proverbs 17:22: "A merry heart doeth good like a medicine: but a broken heart drieth the bones." It says if anyone cannot find joy in Christ, he cannot find it anywhere else (Luke 2:10-11; Psalm 16:11).</p>

//           <p>When one is joyless, one is helpless, downcast, and wandering in life. Without joy, one cannot keep Christ at the forefront of one's mind and one cannot obey God's word.</p>
//         </div>
//       `,
//     },
//     {
//       id: 2,
//       title: "God of Miracles - Jubilee",
//       date: "February 2025",
//       image: "/blog-details.png",
//       excerpt:
//         'Welcome you to February. As year of the "Onward Christian Soldier" unfolds...',
//       content: `
//         <div>
//           <p>Welcome you to February. As year of the "Onward Christian Soldier" unfolds, we are reminded of the faithfulness of God to His children. We believe this month will be filled with God's miraculous interventions in every area of your life.</p>

//           <p>February marks our Jubilee celebration as a church. The Jubilee in biblical times was a special year of emancipation, restoration, and God's special favor. It was a time when debts were forgiven, slaves were freed, and land returned to its original owners.</p>

//           <p>In this our Jubilee year, we declare that:</p>
//           <ul>
//             <li>Every debt in your life is canceled</li>
//             <li>Every form of bondage is broken</li>
//             <li>Whatever you have lost shall be restored</li>
//             <li>God's special favor shall rest upon you</li>
//           </ul>

//           <p>As we celebrate God's faithfulness over the years, we are reminded of His promise in Joel 2:25-26: "I will restore to you the years that the swarming locust has eaten... You shall eat in plenty and be satisfied, and praise the name of the LORD your God, Who has dealt wondrously with you."</p>

//           <p>This month, expect God to show Himself strong as the God of miracles. Remember, the God who parted the Red Sea, brought water from the rock, and raised the dead is still in the business of working miracles today.</p>
//         </div>
//       `,
//     },
//     {
//       id: 3,
//       title: "The Onward Christian Soldier",
//       date: "January 2025",
//       image: "/blog-details.png",

//       excerpt:
//         "Welcome to 2025! As it unfolds before us, we see it as a year to press on...",
//       content: `
//         <div>
//           <p>Welcome to 2025! As it unfolds before us, we see it as a year to press on, to move forward, to make progress in every area of our lives. This is a year for mighty men of valor, Christian soldiers marching as to war, with the cross of Jesus going on before.</p>

//           <p>The theme for this year is "The Onward Christian Soldier." It is derived from the powerful hymn written by Sabine Baring-Gould in 1865, which reminds us of our call to spiritual warfare and advancement in the kingdom of God.</p>

//           <p>As Christian soldiers, we are called to:</p>
//           <ul>
//             <li>Put on the whole armor of God (Ephesians 6:11-18)</li>
//             <li>Fight the good fight of faith (1 Timothy 6:12)</li>
//             <li>Be strong in the Lord and in the power of His might (Ephesians 6:10)</li>
//             <li>Advance the kingdom of God (Matthew 11:12)</li>
//           </ul>

//           <p>This year, I challenge you to move forward in your spiritual life, your family life, your career, your ministry, and in every area where God has placed you. Remember, no Christian soldier gets crowned without discipline, focus, and determination.</p>

//           <p>Let us march onward, not in our own strength, but in the strength of the Lord, knowing that "the weapons of our warfare are not carnal but mighty in God for pulling down strongholds" (2 Corinthians 10:4).</p>
//         </div>
//       `,
//     },
//     {
//       id: 4,
//       title: "Fight for your family",
//       date: "November 2023",
//       image: "/blog-details.png",
//       excerpt: "This month we focus on the importance of family...",
//       content: `
//         <div>
//           <p>This month we focus on the importance of family and our role as Christians in protecting and nurturing our homes...</p>
//         </div>
//       `,
//     },
//     {
//       id: 5,
//       title: "Revive us, O Lord",
//       date: "October 2023",
//       image: "/blog-details.png",

//       excerpt: "This month we seek spiritual renewal and revival...",
//       content: `
//         <div>
//           <p>This month we seek spiritual renewal and revival in our personal lives and in our church community...</p>
//         </div>
//       `,
//     },
//     {
//       id: 6,
//       title: "The Speed of Love",
//       date: "September 2023",
//       image: "/blog-details.png",
//       excerpt:
//         "Love moves at a divine pace. This month we explore how God's love operates...",
//       content: `
//         <div>
//           <p>Love moves at a divine pace. This month we explore how God's love operates and how we can embody it...</p>
//         </div>
//       `,
//     },
//   ];

//   useEffect(() => {
//     // Simulate API call
//     setLoading(true);

//     setTimeout(() => {
//       const parsedId = id ? parseInt(id) : 0;
//       const foundNewsletter = newsletters.find((n) => n.id === parsedId);
//       setNewsletter(foundNewsletter || null);

//       // Get related newsletters (excluding current one)
//       const related = newsletters.filter((n) => n.id !== parsedId).slice(0, 3);
//       setRelatedNewsletters(related);

//       setLoading(false);
//     }, 500);
//   }, [id]);

//   if (loading) {
//     return (
//       <MainLayout>
//         <div className=" px-4 pt-10 pb-20">
//           <HeaderWithBackButton title="PASTOR'S DESK" />
//           <div className="flex justify-center items-center h-64">
//             <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-900"></div>
//           </div>
//         </div>
//       </MainLayout>
//     );
//   }

//   if (!newsletter) {
//     return (
//       <MainLayout>
//         <div className=" px-4 pt-10 pb-20">
//           <HeaderWithBackButton title="PASTOR'S DESK" />
//           <div className="text-center mt-10">
//             <h2 className="text-xl font-medium">Newsletter not found</h2>
//             <p className="mt-2">
//               The newsletter you're looking for doesn't exist or has been
//               removed.
//             </p>
//             <Link
//               to="/pastor-desk"
//               className="mt-4 inline-block bg-indigo-900 text-white px-4 py-2 rounded"
//             >
//               Back to Pastor's Desk
//             </Link>
//           </div>
//         </div>
//       </MainLayout>
//     );
//   }

//   return (
//     <MainLayout>
//       <div className="px-4 pt-10 pb-20">
//         <HeaderWithBackButton title="PASTOR'S DESK" />

//         <div className="mt-8 flex gap-[28px] max-w-[1080px] mx-auto font-poppins">
//           <div className="flex flex-col max-w-[715px] gap-6 mb-8">
//             <div className=" ">
//               <div className="bg-amber-50 p-4 rounded-md border border-amber-100">
//                 <img
//                   src={newsletter.image || "/blog-details.png"}
//                   alt={newsletter.title}
//                   className="w-full h-auto object-cover rounded"
//                 />
//               </div>
//             </div>

//             <div className="">
//               <div className="mb-4">
//                 <h3 className="text-indigo-900 text-xl font-medium">
//                   {newsletter.date} – {newsletter.title}
//                 </h3>
//               </div>

//               <div
//                 className="prose max-w-none"
//                 dangerouslySetInnerHTML={{ __html: newsletter.content }}
//               ></div>
//             </div>
//           </div>

//           <div className="mt-12">
//             <h3 className="text-lg font-medium mb-4 text-indigo-900">
//               RECENT MESSAGES
//             </h3>

//             <div className="space-y-2">
//               {newsletters.map((item) => (
//                 <Link
//                   key={item.id}
//                   to={`/pastor-desk/${item.id}`}
//                   className={`block hover:text-indigo-700 ${
//                     id && parseInt(id) === item.id
//                       ? "text-indigo-700 font-medium"
//                       : "text-indigo-900"
//                   }`}
//                 >
//                   {item.date} – {item.title}
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </MainLayout>
//   );
// };

// export default NewsletterDetail;

// NewsletterDetail.tsx
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import HeaderWithBackButton from "../../components/HeaderWithBackButton";
import MainLayout from "../../MainLayout";
import { fetchPublicDeskPosts, DeskPost } from "../../store/pastorDeskSlice";
import { RootState, AppDispatch } from "../../store/store";

const NewsletterDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const { publicPosts, loading, error } = useSelector(
    (state: RootState) => state.pastorDesk
  );

  const [currentPost, setCurrentPost] = useState<DeskPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<DeskPost[]>([]);

  useEffect(() => {
    // Fetch posts if not already loaded
    if (publicPosts.length === 0) {
      dispatch(fetchPublicDeskPosts());
    }
  }, [dispatch, publicPosts.length]);

  useEffect(() => {
    if (id && publicPosts.length > 0) {
      const parsedId = parseInt(id);
      const foundPost = publicPosts.find((post) => post.id === parsedId);
      setCurrentPost(foundPost || null);

      // Get related posts (excluding current one), sorted by date
      const related = publicPosts
        .filter((post) => post.id !== parsedId)
        .sort((a, b) => {
          const dateA = new Date(`${a.month} 1, ${a.year}`);
          const dateB = new Date(`${b.month} 1, ${b.year}`);
          return dateB.getTime() - dateA.getTime();
        })
        .slice(0, 6);

      setRelatedPosts(related);
    }
  }, [id, publicPosts]);

  if (loading) {
    return (
      <MainLayout>
        <div className="px-4 pt-10 pb-20">
          <HeaderWithBackButton title="PASTOR'S DESK" />
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-900"></div>
          </div>
        </div>
      </MainLayout>
    );
  }

  if (error) {
    return (
      <MainLayout>
        <div className="px-4 pt-10 pb-20">
          <HeaderWithBackButton title="PASTOR'S DESK" />
          <div className="text-center mt-10">
            <h2 className="text-xl font-medium text-red-600">Error</h2>
            <p className="mt-2 text-gray-600">{error}</p>
            <button
              onClick={() => dispatch(fetchPublicDeskPosts())}
              className="mt-4 bg-indigo-900 text-white px-4 py-2 rounded hover:bg-indigo-800"
            >
              Try Again
            </button>
          </div>
        </div>
      </MainLayout>
    );
  }

  if (!currentPost) {
    return (
      <MainLayout>
        <div className="px-4 pt-10 pb-20">
          <HeaderWithBackButton title="PASTOR'S DESK" />
          <div className="text-center mt-10">
            <h2 className="text-xl font-medium">Newsletter not found</h2>
            <p className="mt-2">
              The newsletter you're looking for doesn't exist or has been
              removed.
            </p>
            <Link
              to="/pastor-desk"
              className="mt-4 inline-block bg-indigo-900 text-white px-4 py-2 rounded hover:bg-indigo-800"
            >
              Back to Pastor's Desk
            </Link>
          </div>
        </div>
      </MainLayout>
    );
  }

  // Function to format the message content with basic HTML structure
  const formatMessage = (message: string) => {
    // Split by double line breaks to create paragraphs
    const paragraphs = message.split("\n\n").filter((p) => p.trim());

    return paragraphs
      .map((paragraph, index) => {
        // Check if it's a heading (usually shorter lines or lines with certain patterns)
        if (
          paragraph.length < 100 &&
          paragraph.toUpperCase() === paragraph &&
          paragraph.trim()
        ) {
          return `<h3 key=${index} style="font-weight: bold; margin: 20px 0 10px 0; color: #312e81;">${paragraph}</h3>`;
        }

        // Check if it's a quote (lines starting with quotes)
        if (paragraph.startsWith('"') && paragraph.endsWith('"')) {
          return `<blockquote key=${index} style="border-left: 4px solid #312e81; padding-left: 16px; margin: 16px 0; font-style: italic; color: #4b5563;">${paragraph}</blockquote>`;
        }

        // Regular paragraph
        return `<p key=${index} style="margin: 16px 0; line-height: 1.6;">${paragraph}</p>`;
      })
      .join("");
  };

  return (
    <MainLayout>
      <div className="px-4 pt-10 pb-20">
        <HeaderWithBackButton title="PASTOR'S DESK" />

        <div className="mt-8 flex gap-[28px] max-w-[1080px] mx-auto font-poppins">
          <div className="flex flex-col max-w-[715px] gap-6 mb-8">
            <div className="">
              <div className="bg-amber-50 p-4 rounded-md border border-amber-100">
                <img
                  src={currentPost.image || "/blog-details.png"}
                  alt={currentPost.title}
                  className="w-full h-auto object-cover rounded"
                />
              </div>
            </div>

            <div className="">
              <div className="mb-4">
                <h3 className="text-indigo-900 text-xl font-medium">
                  {currentPost.month} {currentPost.year} – {currentPost.title}
                </h3>
              </div>

              <div
                className="prose max-w-none"
                dangerouslySetInnerHTML={{
                  __html: formatMessage(currentPost.message),
                }}
              ></div>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-lg font-medium mb-4 text-indigo-900">
              RECENT MESSAGES
            </h3>

            <div className="space-y-2">
              {relatedPosts.map((post) => (
                <Link
                  key={post.id}
                  to={`/pastor-desk/${post.id}`}
                  className={`block hover:text-indigo-700 text-sm ${
                    id && parseInt(id) === post.id
                      ? "text-indigo-700 font-medium"
                      : "text-indigo-900"
                  }`}
                >
                  {post.month} {post.year} – {post.title}
                </Link>
              ))}
            </div>

            {relatedPosts.length === 0 && (
              <p className="text-gray-500 text-sm">
                No other messages available
              </p>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default NewsletterDetail;
