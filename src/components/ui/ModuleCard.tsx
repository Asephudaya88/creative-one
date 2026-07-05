import Button from "./Button";
import { theme } from "../../styles/theme";

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
        background: "#fff",
        borderRadius: theme.radius.lg,
        boxShadow: theme.shadow.card,
        padding: 24,
        display: "flex",
        flexDirection: "column",
        gap: 16,
        transition: "0.25s",
        border: "1px solid #e5e7eb",
      }}
    >
      <div style={{ fontSize: 48 }}>{icon}</div>

      <div>
        <h2
          style={{
            margin: 0,
            color: theme.colors.dark,
          }}
        >
          {title}
        </h2>

        <p
          style={{
            color: "#666",
            marginTop: 10,
            lineHeight: 1.5,
          }}
        >
          {description}
        </p>
      </div>

      <Button>Buka Modul</Button>
    </div>
  );
}