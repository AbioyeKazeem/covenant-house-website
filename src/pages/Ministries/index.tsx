import HeaderWithoutBackButton from "../../components/HeaderWithoutBackButton";
import MainLayout from "../../MainLayout";
import { Link } from "react-router-dom";

const MinistriesPage = () => {
  return (
    <MainLayout>
      <div className="pt-[43px] pb-[80px] px-4">
        <HeaderWithoutBackButton title="MINISTRIES" />
        <div className="max-w-[708px] h-[72px] mx-auto mt-2">
          <p className="text-[24px] leading-[100%] font-poppins font-semibold text-center text-black">
            Serving with Purpose, impacting Lives
          </p>
        </div>

        {/* Grid right below the text */}
        <div className="max-w-[600px] mx-auto mt-0 grid grid-cols-3 grid-rows-3 gap-2 justify-items-center items-center sm:max-w-[640px]">
          {/* Top Left - Women Ministry */}
          <div className="row-start-1 col-start-1">
            <Link to="/women-ministry">
              <div className="bg-white shadow-md rounded-lg overflow-hidden text-center w-[150px] cursor-pointer hover:shadow-lg transition">
                <img src="/Women.jpg" alt="Women Ministry" className="w-full h-[130px] object-cover" />
                <p className="py-2 border-t font-medium text-sm">Women Ministry</p>
              </div>
            </Link>
          </div>

          {/* Top Right - Men Ministry */}
          <div className="row-start-1 col-start-3">
            <Link to="/men-ministry">
              <div className="bg-white shadow-md rounded-lg overflow-hidden text-center w-[150px] cursor-pointer hover:shadow-lg transition">
                <img src="/Men.jpg" alt="Men Ministry" className="w-full h-[130px] object-cover" />
                <p className="py-2 border-t font-medium text-sm">Men Ministry</p>
              </div>
            </Link>
          </div>

          {/* Center - Music Ministry */}
          <div className="row-start-2 col-start-2">
            <Link to="/choir-ministry">
              <div className="bg-white shadow-md rounded-lg overflow-hidden text-center w-[150px] cursor-pointer hover:shadow-lg transition">
                <img src="/music_ministry.jpg" alt="Music Ministry" className="w-full h-[130px] object-cover" />
                <p className="py-2 border-t font-medium text-sm">Music Ministry</p>
              </div>
            </Link>
          </div>

          {/* Bottom Left - Youth Ministry */}
          <div className="row-start-3 col-start-1">
            <Link to="/youth-ministry">
              <div className="bg-white shadow-md rounded-lg overflow-hidden text-center w-[150px] cursor-pointer hover:shadow-lg transition">
                <img src="/Youth.jpg" alt="Youth Ministry" className="w-full h-[130px] object-cover" />
                <p className="py-2 border-t font-medium text-sm">Youth Ministry</p>
              </div>
            </Link>
          </div>

          {/* Bottom Right - Children Ministry */}
          <div className="row-start-3 col-start-3">
            <Link to="/Children-ministry">
              <div className="bg-white shadow-md rounded-lg overflow-hidden text-center w-[150px] cursor-pointer hover:shadow-lg transition">
                <img src="/children.jpg" alt="Children Ministry" className="w-full h-[130px] object-cover" />
                <p className="py-2 border-t font-medium text-sm">Children Ministry</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default MinistriesPage;
