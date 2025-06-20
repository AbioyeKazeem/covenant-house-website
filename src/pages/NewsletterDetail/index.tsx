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
    // Split by double line breaks to create paragraphs, but also handle single line breaks
    let paragraphs = message.split("\n\n").filter((p) => p.trim());

    // If no double line breaks found, split by single line breaks
    if (paragraphs.length === 1) {
      paragraphs = message.split("\n").filter((p) => p.trim());
    }

    return paragraphs
      .map((paragraph, index) => {
        const trimmedParagraph = paragraph.trim();

        // Check if it's the salvation call-to-action
        if (
          trimmedParagraph.includes("To give your life to Jesus") ||
          trimmedParagraph.includes('text "saved"') ||
          trimmedParagraph.includes("covenanthouserccg@gmail.com")
        ) {
          // Format the salvation message with special styling
          let formattedText = trimmedParagraph;

          // Make email blue and underlined
          formattedText = formattedText.replace(
            /covenanthouserccg@gmail\.com/g,
            '<a href="mailto:covenanthouserccg@gmail.com" style="color: #2563eb; text-decoration: underline;">covenanthouserccg@gmail.com</a>'
          );

          return `<div key=${index} style="background-color: #fef3c7; padding: 16px; border-radius: 8px; margin: 20px 0; border: 1px solid #fbbf24;">
            <p style="margin: 0; line-height: 1.6; font-weight: 500;">${formattedText}</p>
          </div>`;
        }

        // Check if it's a title/heading (usually the first line)
        if (
          index === 0 &&
          trimmedParagraph.length < 50 &&
          !trimmedParagraph.includes(".")
        ) {
          return `<h2 key=${index} style="font-weight: bold; font-size: 28px; margin: 20px 0 8px 0; color: #312e81; text-align: center;">${trimmedParagraph}</h2>`;
        }

        // Check if it's a scripture reference (lines that look like "Book Chapter:Verse")
        if (trimmedParagraph.match(/^[A-Za-z\s]+\s+\d+:\d+(-\d+)?$/)) {
          return `<h3 key=${index} style="font-weight: 500; font-size: 16px; margin: 0 0 24px 0; color: #312e81; font-style: italic; text-align: center;">${trimmedParagraph}</h3>`;
        }

        // Check if it's a heading (shorter lines, all caps, or ending with certain patterns)
        if (
          (trimmedParagraph.length < 100 &&
            trimmedParagraph.toUpperCase() === trimmedParagraph) ||
          trimmedParagraph.endsWith(":") ||
          (trimmedParagraph.length < 50 && !trimmedParagraph.includes("."))
        ) {
          return `<h3 key=${index} style="font-weight: bold; font-size: 18px; margin: 20px 0 10px 0; color: #312e81;">${trimmedParagraph}</h3>`;
        }

        // Check if it's a quote (lines starting with quotes)
        if (
          trimmedParagraph.startsWith('"') &&
          trimmedParagraph.endsWith('"')
        ) {
          return `<blockquote key=${index} style="border-left: 4px solid #312e81; padding-left: 16px; margin: 16px 0; font-style: italic; color: #4b5563; background-color: #f8fafc; padding: 16px; border-radius: 4px;">${trimmedParagraph}</blockquote>`;
        }

        // Check for blessing line
        if (trimmedParagraph.includes("God bless")) {
          return `<p key=${index} style="margin: 20px 0; line-height: 1.6; font-weight: 600; color: #312e81; text-align: center;">${trimmedParagraph}</p>`;
        }

        // Regular paragraph
        return `<p key=${index} style="margin: 16px 0; line-height: 1.7; text-align: justify;">${trimmedParagraph}</p>`;
      })
      .join("");
  };

  return (
    <MainLayout>
      <div className="px-4 sm:px-6 lg:px-8 pt-10 pb-20">
        <HeaderWithBackButton title="PASTOR'S DESK" />

        <div className="mt-8 max-w-7xl mx-auto font-poppins">
          {/* Desktop and Tablet Layout */}
          <div className="hidden md:flex gap-8 lg:gap-12">
            {/* Main Content */}
            <div className="flex-1 max-w-4xl">
              {/* Image Section */}
              <div className="mb-6">
                <div className="bg-amber-50 p-4 rounded-md border border-amber-100">
                  <img
                    src={currentPost.image || "/blog-details.png"}
                    alt={currentPost.title}
                    className="w-full h-auto object-cover rounded"
                  />
                </div>
              </div>

              {/* Content Section */}
              <div>
                <div className="mb-6">
                  <h3 className="text-indigo-900 text-2xl lg:text-3xl font-medium text-center">
                    {currentPost.title}
                  </h3>
                </div>

                <div
                  className="prose max-w-none prose-lg"
                  dangerouslySetInnerHTML={{
                    __html: formatMessage(currentPost.message),
                  }}
                ></div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="w-80 flex-shrink-0">
              <div className="sticky top-8">
                <h3 className="text-lg font-medium mb-4 text-indigo-900">
                  RECENT MESSAGES
                </h3>

                <div className="space-y-3">
                  {relatedPosts.map((post) => (
                    <Link
                      key={post.id}
                      to={`/pastor-desk/${post.id}`}
                      className={`block hover:text-indigo-700 text-sm transition-colors duration-200 p-2 rounded-md hover:bg-indigo-50 ${
                        id && parseInt(id) === post.id
                          ? "text-indigo-700 font-medium bg-indigo-50"
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

          {/* Mobile Layout */}
          <div className="md:hidden">
            {/* Image Section */}
            <div className="mb-6">
              <div className="bg-amber-50 p-3 rounded-md border border-amber-100">
                <img
                  src={currentPost.image || "/blog-details.png"}
                  alt={currentPost.title}
                  className="w-full h-auto object-cover rounded"
                />
              </div>
            </div>

            {/* Title */}
            <div className="mb-6">
              <h3 className="text-indigo-900 text-xl sm:text-2xl font-medium text-center">
                {currentPost.title}
              </h3>
            </div>

            {/* Content */}
            <div className="mb-8">
              <div
                className="prose max-w-none prose-sm sm:prose-base"
                dangerouslySetInnerHTML={{
                  __html: formatMessage(currentPost.message),
                }}
              ></div>
            </div>

            {/* Related Posts - Mobile */}
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-medium mb-4 text-indigo-900">
                RECENT MESSAGES
              </h3>

              <div className="space-y-3">
                {relatedPosts.map((post) => (
                  <Link
                    key={post.id}
                    to={`/pastor-desk/${post.id}`}
                    className={`block hover:text-indigo-700 text-sm transition-colors duration-200 p-3 rounded-md hover:bg-indigo-50 border ${
                      id && parseInt(id) === post.id
                        ? "text-indigo-700 font-medium bg-indigo-50 border-indigo-200"
                        : "text-indigo-900 border-gray-200"
                    }`}
                  >
                    <div className="font-medium">
                      {post.month} {post.year}
                    </div>
                    <div className="text-xs mt-1 text-gray-600">
                      {post.title}
                    </div>
                  </Link>
                ))}
              </div>

              {relatedPosts.length === 0 && (
                <p className="text-gray-500 text-sm text-center py-4">
                  No other messages available
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default NewsletterDetail;
