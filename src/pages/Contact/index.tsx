import HeaderWithoutBackButton from "../../components/HeaderWithoutBackButton";
import MainLayout from "../../MainLayout";
import { MdEmail, MdPhone } from "react-icons/md";
import { BiHeadphone } from "react-icons/bi";

const ContactPage = () => {
  return (
    <MainLayout>
      <div className="pt-[43px] pb-[80px]">
        <HeaderWithoutBackButton title="OUR LOCATION" />
        <div className="max-w-[708px] h-[72px] mx-auto mt-2">
          <p className="text-[24px] leading-[100%] font-poppins font-semibold text-center text-black">
            17/19 Idowu Taylor St, Victoria Island, Lagos 106104, Lagos, Nigeria
          </p>
        </div>

        <div className="max-w-[898px] mx-auto mt-10">
          <iframe
            src="https://www.google.com/maps?q=17/19%20Idowu%20Taylor%20St,%20Victoria%20Island,%20Lagos%20106104&output=embed"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="rounded-xl"
            title="Google Maps location of RCCG Covenant House"
          />
        </div>

        {/* Contact Info Icons */}
        <div className="max-w-[900px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 text-center text-sm font-poppins">
          {/* Email */}
          <div>
            <MdEmail className="mx-auto mb-2 w-6 h-6 text-[#2F2860]" />
            <p className="font-semibold">Email Us</p>
            <p>info@rccgchr.org</p>
            <p>webmaster@rccgchr.org</p>
          </div>

          {/* Prompt Response */}
          <div>
            <BiHeadphone className="mx-auto mb-2 w-6 h-6 text-[#2F2860]" />
            <h4 className="font-semibold mb-2 text-center">For Prompt Response To Inquiries</h4>

            <p className="text-center">
              <strong>Finance:</strong> | Adediwura Aromolaran | <a href="mailto:finance@rccgna.org" className="text-blue-600 no-underline">finance@rccgna.org</a>
            </p>

            <p className="text-center mt-2">
              <strong>Information and Other Inquiries:</strong> | Esther Oleru | <a href="mailto:eoleru@rccgna.org" className="text-blue-600 no-underline">eoleru@rccgna.org</a>
            </p>

            <p className="text-center mt-2">
              <strong>Facilities:</strong> | Tony Fadele | <a href="mailto:tfadele@rccgna.org" className="text-blue-600 no-underline">tfadele@rccgna.org</a>
            </p>

            <p className="text-center mt-2">
              <strong>IT/RPAD:</strong> | Femi Ogunyemi | <a href="mailto:fogunyemi@rccgna.org" className="text-blue-600 no-underline">fogunyemi@rccgna.org</a>
            </p>
          </div>

          {/* Phone */}
          <div>
            <MdPhone className="mx-auto mb-2 w-6 h-6 text-[#2F2860]" />
            <p className="font-semibold">Call Us On</p>
            <p>Office: (903) 213-8006</p>
            <p>Fax: (903) 920-0461</p>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="max-w-[850px] mx-auto px-4 pt-4 pb-2 -mt-10">
        <h2 className="text-center text-[#2F2860] text-xl font-bold mb-4">CONTACT INFO</h2>
        <p className="text-center text-sm md:text-base text-[#000000] mb-8 font-poppins leading-relaxed">
          Need more information or looking for something? We are here to serve you. <br />
          Please let us know if we can be of any assistance and we’d be happy to help. <br />
          We would love to hear your thoughts, concerns or problems in any area of our ministry to help us improve and get better in serving you. <br />
          We look forward to your feedback and hearing from you.
        </p>

        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Enter your first name"
              className="border border-[#E0E0E0] px-4 py-3 rounded-md w-full"
              name="first_name"
            />
            <input
              type="text"
              placeholder="Enter your last name"
              className="border border-[#E0E0E0] px-4 py-3 rounded-md w-full"
              name="last_name"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="border border-[#E0E0E0] px-4 py-3 rounded-md w-full"
              name="email"
            />
            <input
              type="tel"
              placeholder="Enter your phone number"
              className="border border-[#E0E0E0] px-4 py-3 rounded-md w-full"
              name="phone"
            />
          </div>

          <textarea
            name="message"
            placeholder="Enter your message"
            rows={5}
            className="border border-[#E0E0E0] px-4 py-3 rounded-md w-full"
          />

          <div className="text-center">
            <button
              type="submit"
              className="bg-[#2F2860] hover:bg-[#1f1b4d] text-white px-10 py-2 rounded-md font-semibold"
            >
              SEND
            </button>
          </div>
        </form>
      </div>
    </MainLayout>
  );
};

export default ContactPage;
