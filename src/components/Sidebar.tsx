import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();

  const menu = [
    { path: "/", label: "Dashboard" },
    { path: "/village", label: "Village" },
    { path: "/water", label: "Water" },
    { path: "/foundation", label: "Foundation" },
    { path: "/school", label: "School" },
    { path: "/studio", label: "Studio" },
  ];

  return (
    <div style={{ width: 220, background: "#111", color: "#fff", padding: 20 }}>
      <h3>Creative One</h3>

      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {menu.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            style={{
              color: "#fff",
              textDecoration: "none",
              padding: "8px",
              borderRadius: 6,
              background: location.pathname === item.path ? "#333" : "transparent"
            }}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}