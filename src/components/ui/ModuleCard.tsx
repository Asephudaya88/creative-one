type ModuleCardProps = {
  title: string;
  description: string;
  icon: string;
};

export default function ModuleCard({
  title,
  description,
  icon,
}: ModuleCardProps) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: 12,
        padding: 20,
        transition: "0.2s",
        cursor: "pointer",
        background: "#fff",
      }}
    >
      <div style={{ fontSize: 40 }}>{icon}</div>

      <h3>{title}</h3>

      <p>{description}</p>
    </div>
  );
}