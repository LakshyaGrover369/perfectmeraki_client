import React from "react";
import Navbar from "../../../components/common/Navbar";
import Footer from "../../../components/common/Footer";
import AdminSidebar from "../../../components/common/AdminSidebar";

import { ReactNode } from "react";

interface AdminLayoutProps {
  children: ReactNode;
}

// No <html> or <body> here!
export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <div
        style={{
          width: "240px",
          top: 0,
          left: 0,
          height: "100vh",
          background: "#fff",
          borderRight: "1px solid #e5e7eb",
        }}
      >
        <AdminSidebar />
      </div>
      <div style={{ marginLeft: "240px", flex: 1, width: "100%" }}>
        {/* ...Admin Navbar, Sidebar, etc... */}
        {children}
      </div>
    </div>
  );
}

// export default function AdminLayout({ children }: AdminLayoutProps) {
//   return (
//     <div
//       className="admin-layout"
//       style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
//     >
//       <Navbar />
//       <AdminSidebar />
//       <div style={{ display: "flex", flex: 1 }}>
//         <main style={{ flex: 1, padding: "24px" }}>{children}</main>
//       </div>
//       <Footer />
//     </div>
//   );
// }
