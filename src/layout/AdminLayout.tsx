"use client";
import React from "react";
import AdminSidebar from "@/components/common/AdminSidebar";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <div
        style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
      >
        <AdminSidebar />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default AdminLayout;
