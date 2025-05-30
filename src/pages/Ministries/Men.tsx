import HeaderWithBackButton from "../../components/HeaderWithBackButton";
import MainLayout from "../../MainLayout";


const MinistriesPage = () => {
  return (
    <MainLayout>
      <div className="pt-[43px] pb-[80px] px-4">
        <HeaderWithBackButton title="MINISTRIES" />
        <div className="max-w-[708px] h-[72px] mx-auto mt-2">
          <p className="text-[24px] leading-[100%] font-poppins font-semibold text-center text-black">
            Men of Faith, Strenght, and Service
          </p>
        </div>
        <div className="max-w-[898px] mx-auto mt-10 grid grid-cols-3 grid-rows-3 gap-6 justify-items-center items-center">
        <p className="text-[24px] leading-[100%] font-poppins font-semibold text-center text-black">
            Guided by God, United in Brotherhood
          </p>
      
         
        </div>
      </div>
    </MainLayout>
  );
};

export default MinistriesPage;
