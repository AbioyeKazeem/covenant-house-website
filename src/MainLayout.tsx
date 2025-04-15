import React, { ReactNode } from "react";
import Header from "./components/header";
import Footer from "./components/footer";

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="bg-[#FDFBFE]">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
