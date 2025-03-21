import React, { ReactNode } from "react";
import Header from "./components/header";
import Footer from "./components/footer";

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="max-w-[1380px] mx-auto">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
