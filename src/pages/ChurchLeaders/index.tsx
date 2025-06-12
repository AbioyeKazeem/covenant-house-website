import HeaderWithBackButton from "../../components/HeaderWithBackButton";
import MainLayout from "../../MainLayout";

const ChurchLeaders = () => {
  return (
    <MainLayout>
      <div className="pt-[43px] pb-[80px] px-4">
        {/* Back Button and Title */}
        <HeaderWithBackButton title="CHURCH LEADERS" />

<div className="bg-[#D7C9F2] pt-12 pb-4 px-4 mt-5">
  <div className="text-center mb-10">
  <h2 className="text-lg font-medium text-[#1D1D1D]">
    Church Leaders
  </h2>
  <img src="/Line.jpg" alt="Arrow underline" className="mx-auto mt-1 w-20" />
</div>
  <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    <div className="text-center">
      <img
        src="/children1.jpg"
        alt="Angnes Jade"
        className="w-40 h-40 mx-auto object-cover rounded-xl shadow-md"
      />
      <p className="mt-0.5 text-sm font-semibold text-[#1D1D1D]">Angnes Jade</p>
      <p className="text-sm text-[#1D1D1D]">Church Pastor</p>
    </div>
    <div className="text-center">
      <img
        src="/children2.jpg"
        alt="Michael Adegbenro"
        className="w-40 h-40 mx-auto object-cover rounded-xl shadow-md"
      />
      <p className="mt-0.5 text-sm font-semibold text-[#1D1D1D]">Amanda Kolu</p>
      <p className="text-sm text-[#1D1D1D]">Assistant Pastor</p>
    </div>
    <div className="text-center">
      <img
        src="/children3.jpg"
        alt="David Johnson"
        className="w-40 h-40 mx-auto object-cover rounded-xl shadow-md"
      />
      <p className="mt-0.5 text-sm font-semibold text-[#1D1D1D]">Geneveive Nneji</p>
      <p className="text-sm text-[#1D1D1D]">Executive</p>
    </div>
    <div className="text-center">
      <img
        src="/children3.jpg"
        alt="Ayinde Tolu"
        className="w-40 h-40 mx-auto object-cover rounded-xl shadow-md"
      />
      <p className="mt-0.5 text-sm font-semibold text-[#1D1D1D]">Sewa Afolabi</p>
      <p className="text-sm text-[#1D1D1D]">Executive</p>
    </div>
    <div className="text-center">
      <img
        src="/children1.jpg"
        alt="Michael Ali"
        className="w-40 h-40 mx-auto object-cover rounded-xl shadow-md"
      />
      <p className="mt-0.5 text-sm font-semibold text-[#1D1D1D]">Grace Alinko</p>
      <p className="text-sm text-[#1D1D1D]">Executive</p>
    </div>
    <div className="text-center">
      <img
        src="/children2.jpg"
        alt="Solomon Alex"
        className="w-40 h-40 mx-auto object-cover rounded-xl shadow-md"
      />
      <p className="mt-0.5 text-sm font-semibold text-[#1D1D1D]">Sade Wellington</p>
      <p className="text-sm text-[#1D1D1D]">Executive</p>
    </div>
    <div className="text-center">
      <img
        src="/children2.jpg"
        alt="Michael Adegbenro"
        className="w-40 h-40 mx-auto object-cover rounded-xl shadow-md"
      />
      <p className="mt-0.5 text-sm font-semibold text-[#1D1D1D]">Amanda Kolu</p>
      <p className="text-sm text-[#1D1D1D]">Assistant Pastor</p>
    </div>
     <div className="text-center">
      <img
        src="/children3.jpg"
        alt="David Johnson"
        className="w-40 h-40 mx-auto object-cover rounded-xl shadow-md"
      />
      <p className="mt-0.5 text-sm font-semibold text-[#1D1D1D]">Geneveive Nneji</p>
      <p className="text-sm text-[#1D1D1D]">Executive</p>
    </div>
     <div className="text-center">
      <img
        src="/children1.jpg"
        alt="Angnes Jade"
        className="w-40 h-40 mx-auto object-cover rounded-xl shadow-md"
      />
      <p className="mt-0.5 text-sm font-semibold text-[#1D1D1D]">Angnes Jade</p>
      <p className="text-sm text-[#1D1D1D]">Church Pastor</p>
    </div>
  </div>
</div>


</div>
    </MainLayout>
  );
};
export default ChurchLeaders;
