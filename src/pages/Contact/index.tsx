import React, { useState, FormEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HeaderWithoutBackButton from "../../components/HeaderWithoutBackButton";
import MainLayout from "../../MainLayout";
import { MdEmail, MdPhone } from "react-icons/md";
import { BiHeadphone } from "react-icons/bi";
import { AppDispatch, RootState } from "../../store/store";
import {
  submitContactMessage,
  clearContactState,
} from "../../store/contactSlice";

// Modal Component
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "success" | "error";
  title: string;
  message: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  type,
  title,
  message,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 transform transition-all">
        <div className="p-6">
          <div className="flex items-center mb-4">
            {type === "success" ? (
              <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
            ) : (
              <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </div>
            )}
            <div className="ml-3">
              <h3 className="text-lg font-medium text-gray-900">{title}</h3>
            </div>
          </div>
          <div className="mb-6">
            <p className="text-gray-600 text-sm">{message}</p>
          </div>
          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2 bg-[#2F2860] text-white rounded-md hover:bg-[#252050] transition-colors duration-200 font-medium"
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error, success } = useSelector(
    (state: RootState) => state.contact
  );

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [modal, setModal] = useState({
    isOpen: false,
    type: "success" as "success" | "error",
    title: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (
      !formData.first_name ||
      !formData.last_name ||
      !formData.email ||
      !formData.phone ||
      !formData.message
    ) {
      setModal({
        isOpen: true,
        type: "error",
        title: "Missing Required Fields",
        message:
          "Please fill in all required fields before submitting your message.",
      });
      return;
    }

    dispatch(submitContactMessage(formData));
  };

  // Handle success/error states
  useEffect(() => {
    if (success) {
      setModal({
        isOpen: true,
        type: "success",
        title: "Message Sent Successfully",
        message:
          "Your message has been sent successfully! We'll get back to you soon.",
      });
      // Reset form
      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        message: "",
      });
      dispatch(clearContactState());
    }

    if (error) {
      setModal({
        isOpen: true,
        type: "error",
        title: "Submission Failed",
        message: `We encountered an error while sending your message: ${error}. Please try again.`,
      });
      dispatch(clearContactState());
    }
  }, [success, error, dispatch]);

  const closeModal = () => {
    setModal((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <MainLayout>
      <div className="pt-[43px] pb-[80px]">
        <HeaderWithoutBackButton title="OUR LOCATION" />
        <div className="max-w-[708px] h-[72px] mx-auto mt-2">
          <p className="text-[24px] leading-[100%] font-poppins font-semibold text-center text-black">
            3901 Claremont Ave NE, Albuquerque, NM 87110, USA
          </p>
        </div>

<div className="max-w-[898px] mx-auto -mt-1">
<iframe
  src="https://www.google.com/maps?q=3901%20Claremont%20Ave%20NE,%20Albuquerque,%20NM%2087110,%20USA&output=embed"
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
            <h4 className="font-semibold mb-2 text-center">
              For Prompt Response To Inquiries
            </h4>

            <p className="text-center">
              <strong>Finance:</strong> | Adediwura Aromolaran |{" "}
              <a
                href="mailto:finance@rccgna.org"
                className="text-blue-600 no-underline"
              >
                finance@rccgna.org
              </a>
            </p>

            <p className="text-center mt-2">
              <strong>Information and Other Inquiries:</strong> | Esther Oleru |{" "}
              <a
                href="mailto:eoleru@rccgna.org"
                className="text-blue-600 no-underline"
              >
                eoleru@rccgna.org
              </a>
            </p>

            <p className="text-center mt-2">
              <strong>Facilities:</strong> | Tony Fadele |{" "}
              <a
                href="mailto:tfadele@rccgna.org"
                className="text-blue-600 no-underline"
              >
                tfadele@rccgna.org
              </a>
            </p>

            <p className="text-center mt-2">
              <strong>IT/RPAD:</strong> | Femi Ogunyemi |{" "}
              <a
                href="mailto:fogunyemi@rccgna.org"
                className="text-blue-600 no-underline"
              >
                fogunyemi@rccgna.org
              </a>
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
        <h2 className="text-center text-[#2F2860] text-xl font-bold mb-4">
          CONTACT INFO
        </h2>
        <p className="text-center text-sm md:text-base text-[#000000] mb-8 font-poppins leading-relaxed">
          Need more information or looking for something? We are here to serve
          you. <br />
          Please let us know if we can be of any assistance and we'd be happy to
          help. <br />
          We would love to hear your thoughts, concerns or problems in any area
          of our ministry to help us improve and get better in serving you.{" "}
          <br />
          We look forward to your feedback and hearing from you.
        </p>

        {/* Success Message */}
        {/* Removed inline success/error messages as they're now handled by modal */}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Enter your first name"
              className="border border-[#E0E0E0] px-4 py-3 rounded-md w-full"
              name="first_name"
              value={formData.first_name}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              placeholder="Enter your last name"
              className="border border-[#E0E0E0] px-4 py-3 rounded-md w-full"
              name="last_name"
              value={formData.last_name}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="border border-[#E0E0E0] px-4 py-3 rounded-md w-full"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <input
              type="tel"
              placeholder="Enter your phone number"
              className="border border-[#E0E0E0] px-4 py-3 rounded-md w-full"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </div>

          <textarea
            name="message"
            placeholder="Enter your message"
            rows={5}
            className="border border-[#E0E0E0] px-4 py-3 rounded-md w-full"
            value={formData.message}
            onChange={handleInputChange}
            required
          />

          <div className="text-center">
            <button
              type="submit"
              disabled={loading}
              className="bg-[#2F2860] hover:bg-[#1f1b4d] disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-10 py-2 rounded-md font-semibold flex items-center justify-center"
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  SENDING...
                </>
              ) : (
                "SEND"
              )}
            </button>
          </div>
        </form>

        {/* Modal */}
        <Modal
          isOpen={modal.isOpen}
          onClose={closeModal}
          type={modal.type}
          title={modal.title}
          message={modal.message}
        />
      </div>
    </MainLayout>
  );
};

export default ContactPage;
