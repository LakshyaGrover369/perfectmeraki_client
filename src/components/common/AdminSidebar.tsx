"use client";
import React from "react";
import { useRouter } from "next/router";

const sidebarItems = [
  { label: "Dashboard", icon: "🏠", route: "/admin/admin-dashboard" },
  { label: "Users", icon: "👥", route: "/admin/users-list" },
  { label: "Add Products", icon: "🛒", route: "/admin/add-product" },
];

const AdminSidebar: React.FC = () => {
  const router = useRouter();

  return (
    <aside
      style={{
        width: "240px",
        height: "90vh",
        background: "linear-gradient(180deg, #2ecc40 0%, #27ae60 100%)",
        color: "#fff",
        padding: "24px 0",
        boxShadow: "2px 0 8px rgba(44, 204, 64, 0.08)",
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        left: 0,
        zIndex: 10,
      }}
    >
      <div
        style={{
          fontWeight: "bold",
          fontSize: "1.5rem",
          textAlign: "center",
          marginBottom: "2rem",
        }}
      >
        Admin Panel
      </div>
      <nav>
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {sidebarItems.map((item) => (
            <li
              key={item.label}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "12px 32px",
                cursor: "pointer",
                transition: "background 0.2s",
              }}
              onClick={() => router.push(item.route)}
              onMouseOver={(e) =>
                (e.currentTarget.style.background = "#219150")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.background = "transparent")
              }
            >
              <span style={{ marginRight: "16px", fontSize: "1.2rem" }}>
                {item.icon}
              </span>
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default AdminSidebar;
