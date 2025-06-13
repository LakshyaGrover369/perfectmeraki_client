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
      {/* Navbar at the top with highest z-index */}
      <div style={{ position: "sticky", top: 0, zIndex: 1000 }}>
        <Navbar />
      </div>
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          background: "#f4f6f8",
        }}
      >
        {/* Sidebar on the left with high z-index */}
        <div
          style={{
            width: 240,
            minHeight: "100vh",
            background: "#fff",
            boxShadow: "2px 0 8px rgba(0,0,0,0.05)",
            zIndex: 900,
            position: "sticky",
            top: "0",
          }}
        >
          <AdminSidebar />
        </div>
        {/* Main content area */}
        <main
          style={{
            flex: 1,
            // padding: "32px 24px",
            minHeight: "calc(100vh - 64px)",
            marginLeft: 0,
            zIndex: 1,
          }}
        >
          {children}
          {/* Footer at the bottom */}
          <div
            style={{
              zIndex: 800,
              background: "#fff",
              boxShadow: "0 -1px 6px rgba(0,0,0,0.04)",
            }}
          >
            <Footer />
          </div>
        </main>
      </div>
    </>
  );
};

export default AdminLayout;
