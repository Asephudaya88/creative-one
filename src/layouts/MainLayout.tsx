import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function MainLayout() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      
      {/* kiri */}
      <Sidebar />

      {/* kanan */}
      <div style={{ flex: 1, padding: 20, background: "#f5f5f5" }}>
        <Outlet />
      </div>

    </div>
  );
}