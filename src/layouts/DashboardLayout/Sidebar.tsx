export default function Sidebar() {
  return (
    <aside
      style={{
        width: "240px",
        borderRight: "1px solid #ddd",
        padding: "20px",
      }}
    >
      <h3>Menu</h3>

      <ul>
        <li>🏠 Dashboard</li>
        <li>🏘 Creative Village</li>
        <li>💧 Creative Water</li>
        <li>🏫 Creative School</li>
        <li>🕌 Creative Foundation</li>
        <li>🎨 Creative Studio</li>
        <li>⚖ Creative Faraidh</li>
        <li>🤖 AI Center</li>
      </ul>
    </aside>
  );
}