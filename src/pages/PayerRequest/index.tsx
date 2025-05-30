import HeaderWithBackButton from "../../components/HeaderWithBackButton";
import MainLayout from "../../MainLayout";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import {
  submitPrayerRequest,
  clearPrayerRequestState,
} from "../../store/prayerSlice";

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

const PrayerForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, success, error } = useSelector(
    (state: RootState) => state.prayerRequest
  );

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    prayer_request: "",
    contact_team: false,
  });

  const [modal, setModal] = useState({
    isOpen: false,
    type: "success" as "success" | "error",
    title: "",
    message: "",
  });

  // Handle input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "radio") {
      setFormData((prev) => ({
        ...prev,
        contact_team: value === "yes",
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (
      !formData.first_name ||
      !formData.last_name ||
      !formData.email ||
      !formData.phone ||
      !formData.prayer_request
    ) {
      setModal({
        isOpen: true,
        type: "error",
        title: "Missing Required Fields",
        message:
          "Please fill in all required fields before submitting your prayer request.",
      });
      return;
    }

    dispatch(submitPrayerRequest(formData));
  };

  // Handle success/error states
  useEffect(() => {
    if (success) {
      setModal({
        isOpen: true,
        type: "success",
        title: "Prayer Request Submitted",
        message:
          "Your prayer request has been submitted successfully. Our prayer team will keep you in their prayers.",
      });
      // Reset form
      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        prayer_request: "",
        contact_team: false,
      });
      dispatch(clearPrayerRequestState());
    }

    if (error) {
      setModal({
        isOpen: true,
        type: "error",
        title: "Submission Failed",
        message: `We encountered an error while submitting your prayer request: ${error}. Please try again.`,
      });
      dispatch(clearPrayerRequestState());
    }
  }, [success, error, dispatch]);

  const closeModal = () => {
    setModal((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <MainLayout>
      <div className="py-[66px]">
        <HeaderWithBackButton
          title="PRAYER REQUEST"
          description="Call to Me, and I will answer you and show you great and mighty things which you do not know."
        />
        <p className="font-semibold text-center">Jeremiah 33:3</p>
        <div className="flex justify-center font-poppins p-4">
          <form className="w-full max-w-[810px] p-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px]">
              <div>
                <label className="block text-base font-medium text-[#000000]">
                  First Name *
                </label>
                <input
                  type="text"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleInputChange}
                  placeholder="Enter your first name"
                  className="w-full mt-1 px-[16px] py-[11.5px] border rounded-md bg-[#C1C9E57D] focus:outline-none focus:ring-2 focus:ring-[#2F2860] focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-base font-medium text-[#000000]">
                  Last Name *
                </label>
                <input
                  type="text"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleInputChange}
                  placeholder="Enter your last name"
                  className="w-full mt-1 px-[16px] py-[11.5px] border rounded-md bg-[#C1C9E57D] focus:outline-none focus:ring-2 focus:ring-[#2F2860] focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-base font-medium text-[#000000]">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email address"
                  className="w-full mt-1 px-[16px] py-[11.5px] border rounded-md bg-[#C1C9E57D] focus:outline-none focus:ring-2 focus:ring-[#2F2860] focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-base font-medium text-[#000000]">
                  Phone *
                </label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                  className="w-full mt-1 px-[16px] py-[11.5px] border rounded-md bg-[#C1C9E57D] focus:outline-none focus:ring-2 focus:ring-[#2F2860] focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-base font-medium text-[#000000]">
                Have our prayer team contact you?
              </label>
              <div className="flex items-center mt-2 space-x-4">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="contact"
                    value="yes"
                    checked={formData.contact_team === true}
                    onChange={handleInputChange}
                    className="form-radio text-[#2F2860] focus:ring-[#2F2860]"
                  />
                  <span>Yes</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="contact"
                    value="no"
                    checked={formData.contact_team === false}
                    onChange={handleInputChange}
                    className="form-radio text-[#2F2860] focus:ring-[#2F2860]"
                  />
                  <span>No</span>
                </label>
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-base font-medium text-[#000000]">
                Prayer Request *
              </label>
              <textarea
                name="prayer_request"
                value={formData.prayer_request}
                onChange={handleInputChange}
                placeholder="Enter your prayer request"
                className="w-[385px] min-h-[277px] mt-1 px-[16px] py-[11.5px] rounded-md bg-[#C1C9E57D] focus:outline-none focus:ring-2 focus:ring-[#2F2860] focus:border-transparent h-32"
                required
              ></textarea>
            </div>

            <div className="mt-6 max-w-[215px]">
              <button
                type="submit"
                disabled={loading}
                className="bg-[#2F2860] font-roboto text-white py-2 rounded-md w-full disabled:opacity-50 hover:bg-[#252050] transition-colors duration-200 flex items-center justify-center"
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
        </div>

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

export default PrayerForm;
