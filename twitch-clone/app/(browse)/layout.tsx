import React from "react";
import Navbar from "./_components/navbar/Navbar";
import Sidebar from "./_components/Sidebar/Sidebar";
import Container from "./_components/Container/Container";

const BrowseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="flex h-full pt-20">
        <Sidebar />
        <Container>{children}</Container>
      </div>
    </>
  );
};

export default BrowseLayout;
