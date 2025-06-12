import { useNavigate } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();
  return (
    <footer className="bg-[#2F2860] text-white py-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column - Key Ministries and Quick Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Key Ministries Section */}
            <div>
              <h3 className="text-sm font-semibold mb-4 text-white">
                KEY MINISTRIES
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    to="men-ministry"
                    className="text-gray-300 hover:text-white transition-colors border-b border-[#F2F0FAD9] pb-1 inline-block"
                  >
                    Men Ministry
                  </Link>
                </li>
                <li>
                  <Link
                    to="women-ministry"
                    className="text-gray-300 hover:text-white transition-colors border-b border-[#F2F0FAD9] pb-1 inline-block"
                  >
                    Women Ministry
                  </Link>
                </li>
                <li>
                  <Link
                    to="youth-ministry"
                    className="text-gray-300 hover:text-white transition-colors border-b border-[#F2F0FAD9] pb-1 inline-block"
                  >
                    Youth Ministry
                  </Link>
                </li>
                <li>
                  <Link
                    to="children-ministry"
                    className="text-gray-300 hover:text-white transition-colors border-b border-[#F2F0FAD9] pb-1 inline-block"
                  >
                    Children Ministry
                  </Link>
                </li>
              </ul>
              <div className="mt-6">
                <button onClick={() => navigate("/ministries")}
                className="bg-[#ABB8E2ED] text-white px-4 py-2 rounded text-sm transition-colors">
                  View All Ministries
                </button>
              </div>
            </div>

            {/* Quick Links Section */}
            <div>
              <h3 className="text-sm font-semibold mb-4 text-white">
                QUICK LINKS
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    to="#"
                    className="text-gray-300 hover:text-white transition-colors border-b border-[#F2F0FAD9] pb-1 inline-block"
                  >
                    Pastor's Helpline
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-gray-300 hover:text-white transition-colors border-b border-[#F2F0FAD9] pb-1 inline-block"
                  >
                    Prayer Request
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-gray-300 hover:text-white transition-colors border-b border-[#F2F0FAD9] pb-1 inline-block"
                  >
                    Open Heavens
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-gray-300 hover:text-white transition-colors border-b border-[#F2F0FAD9] pb-1 inline-block"
                  >
                    RCCG Docs
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-gray-300 hover:text-white transition-colors border-b border-[#F2F0FAD9] pb-1 inline-block"
                  >
                    Sunday School Manual
                  </Link>
                </li>
              </ul>
              <div className="mt-6">
                <button onClick={() => navigate("/resources")}
                className="bg-[#ABB8E2ED]  text-white px-4 py-2 rounded text-sm transition-colors">
                  View All Resources
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Information */}
          <div className="max-w-[443px]">
            <h3 className="text-sm font-semibold mb-4 text-white">
              CONTACT INFORMATION
            </h3>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              We'd love to hear from you! Whether you have a question, need
              prayer, or want to visit us, feel free to reach out. We're here
              for you.
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gray-400" />
                <span className="text-gray-300 text-sm">
                  Email: rccgCH25@gmail.com
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gray-400" />
                <span className="text-gray-300 text-sm">
                  Phone: +234 1234 567 78
                </span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-gray-400" />
                <span className="text-gray-300 text-sm">
                  Location: 123 Street, Lagos, Nigeria.
                </span>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-3">
              <img src="/facebook.png" alt="Facebook" width={30} height={30} />
              <img src="/youtube.png" alt="YouTube" width={30} height={30} />
              <img src="/twitter.png" alt="Email" width={30} height={30} />
              <img src="/email.png" alt="Email" width={30} height={30} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
