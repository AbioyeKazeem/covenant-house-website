// PastorDesk.tsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HeaderWithBackButton from "../../components/HeaderWithBackButton";
import MainLayout from "../../MainLayout";

// Define the Newsletter type interface
interface Newsletter {
  id: number;
  title: string;
  date: string;
  image: string;
  excerpt: string;
}

const PastorDesk = () => {
  // Specify the type for the newsletters state
  const [newsletters, setNewsletters] = useState<Newsletter[]>([
    {
      id: 1,
      title: "Joy Unspeakable",
      date: "March 2025",
      image: "/blog1.png",
      excerpt:
        'I welcome you to the third month of the year of the "Onward Christian Soldier", our landmark year. Three is a significant number in the Bible because it means...',
    },
    {
      id: 2,
      title: "God of Miracles - Jubilee",
      date: "February 2025",
      image: "/blog2.png",
      excerpt:
        'Welcome you to February. As year of the "Onward Christian Soldier" unfolds, we are reminded of the faithfulness of God to His children. We believe this month will be...',
    },
    {
      id: 3,
      title: "The Onward Christian Soldier",
      date: "January 2025",
      image: "/blog3.png",
      excerpt:
        "Welcome to 2025! As it unfolds before us, we see it as a year to press on, to move forward, to make progress in every area of our lives. This is a year for mighty men of valor...",
    },
    {
      id: 4,
      title: "Fight for your family",
      date: "November 2023",
      image: "/blog1.png",
      excerpt:
        "This month we focus on the importance of family and our role as Christians in protecting and nurturing our homes...",
    },
    {
      id: 5,
      title: "Revive us, O Lord",
      date: "October 2023",
      image: "/blog2.png",
      excerpt:
        "This month we seek spiritual renewal and revival in our personal lives and in our church community...",
    },
    {
      id: 6,
      title: "The Speed of Love",
      date: "September 2023",
      image: "/blog3.png",
      excerpt:
        "Love moves at a divine pace. This month we explore how God's love operates and how we can embody it...",
    },
  ]);

  // Also specify types for the derived states
  const [recentNewsletters, setRecentNewsletters] = useState<Newsletter[]>([]);
  const [pastNewsletters, setPastNewsletters] = useState<Newsletter[]>([]);

  useEffect(() => {
    // Separate newsletters into recent (last 3) and past
    const recent = newsletters.slice(0, 3);
    const past = newsletters.slice(3);

    setRecentNewsletters(recent);
    setPastNewsletters(past);
  }, [newsletters]);

  return (
    <MainLayout>
      <div className="px-4 pt-10 pb-20">
        <HeaderWithBackButton title="PASTOR'S DESK" />

        <div className="mt-8 font-poppins max-w-[1082px] mx-auto">
          <h2 className="text-lg font-medium mb-4 bg-indigo-900 text-white py-2 px-4 inline-block">
            RECENT NEWSLETTERS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {recentNewsletters.map((newsletter) => (
              <Link
                key={newsletter.id}
                to={`/pastor-desk/${newsletter.id}`}
                className="block p-[19.29px] rounded overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className=" relative">
                  <img
                    src={
                      newsletter.image || "/images/newsletter-placeholder.jpg"
                    }
                    alt={newsletter.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-sm mb-1 text-indigo-900 underline">
                    {newsletter.date} - {newsletter.title}
                  </h3>
                  <p className="text-[13px] text-[#595859] line-clamp-3">
                    {newsletter.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <h2 className="text-lg font-medium mb-4 bg-indigo-900 text-white py-2 px-4 inline-block">
            PAST NEWSLETTERS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pastNewsletters.map((newsletter) => (
              <Link
                key={newsletter.id}
                to={`/pastor-desk/${newsletter.id}`}
                className="rounded overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="h-48 bg-gray-200 relative">
                  <img
                    src={
                      newsletter.image || "/images/newsletter-placeholder.jpg"
                    }
                    alt={newsletter.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-sm mb-1 text-indigo-900 underline">
                    {newsletter.date} - {newsletter.title}
                  </h3>
                  <p className="text-[13px] text-[#595859] line-clamp-3">
                    {newsletter.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default PastorDesk;
