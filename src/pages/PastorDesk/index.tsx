// PastorDesk.tsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import HeaderWithBackButton from "../../components/HeaderWithBackButton";
import MainLayout from "../../MainLayout";
import { fetchPublicDeskPosts } from "../../store/pastorDeskSlice";
import { RootState, AppDispatch } from "../../store/store";

const PastorDesk = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { publicPosts, loading, error } = useSelector(
    (state: RootState) => state.pastorDesk
  );

  const [recentPosts, setRecentPosts] = useState<typeof publicPosts>([]);
  const [pastPosts, setPastPosts] = useState<typeof publicPosts>([]);

  useEffect(() => {
    // Fetch posts when component mounts
    dispatch(fetchPublicDeskPosts());
  }, [dispatch]);

  useEffect(() => {
    if (publicPosts && publicPosts.length > 0) {
      // Sort posts by date (newest first) and separate into recent (first 3) and past
      const sortedPosts = [...publicPosts].sort((a, b) => {
        // Create date strings for comparison (assuming month/year format)
        const dateA = new Date(`${a.month} 1, ${a.year}`);
        const dateB = new Date(`${b.month} 1, ${b.year}`);
        return dateB.getTime() - dateA.getTime();
      });

      const recent = sortedPosts.slice(0, 3);
      const past = sortedPosts.slice(3);

      setRecentPosts(recent);
      setPastPosts(past);
    }
  }, [publicPosts]);

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

  return (
    <MainLayout>
      <div className="px-4 pt-10 pb-20">
        <HeaderWithBackButton title="PASTOR'S DESK" />

        <div className="mt-8 font-poppins max-w-[1082px] mx-auto">
          {recentPosts.length > 0 && (
            <>
              <h2 className="text-lg font-medium mb-4 bg-indigo-900 text-white py-2 px-4 inline-block">
                RECENT NEWSLETTERS
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {recentPosts.map((post) => (
                  <Link
                    key={post.id}
                    to={`/pastor-desk/${post.id}`}
                    className="block p-[19.29px] rounded overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="relative">
                      <img
                        src={post.image || "/images/newsletter-placeholder.jpg"}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium text-sm mb-1 text-indigo-900 underline">
                        {post.month} {post.year} - {post.title}
                      </h3>
                      <p className="text-[13px] text-[#595859] line-clamp-3">
                        {post.message.length > 150
                          ? `${post.message.substring(0, 150)}...`
                          : post.message}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}

          {pastPosts.length > 0 && (
            <>
              <h2 className="text-lg font-medium mb-4 bg-indigo-900 text-white py-2 px-4 inline-block">
                PAST NEWSLETTERS
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {pastPosts.map((post) => (
                  <Link
                    key={post.id}
                    to={`/pastor-desk/${post.id}`}
                    className="rounded overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="h-48 bg-gray-200 relative">
                      <img
                        src={post.image || "/images/newsletter-placeholder.jpg"}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium text-sm mb-1 text-indigo-900 underline">
                        {post.month} {post.year} - {post.title}
                      </h3>
                      <p className="text-[13px] text-[#595859] line-clamp-3">
                        {post.message.length > 150
                          ? `${post.message.substring(0, 150)}...`
                          : post.message}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}

          {!loading && publicPosts.length === 0 && (
            <div className="text-center mt-10">
              <h2 className="text-xl font-medium text-gray-600">
                No Posts Available
              </h2>
              <p className="mt-2 text-gray-500">
                There are currently no pastor's desk posts to display.
              </p>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default PastorDesk;
