import { theme } from "../../styles/theme";

type StatisticCardProps = {
  title: string;
  value: string;
  icon: string;
};

export default function StatisticCard({
  title,
  value,
  icon,
}: StatisticCardProps) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: theme.radius.lg,
        boxShadow: theme.shadow.card,
        padding: 20,
        display: "flex",
        alignItems: "center",
        gap: 16,
      }}
    >
      <div style={{ fontSize: 36 }}>{icon}</div>

      <div>
        <h2
          style={{
            margin: 0,
            color: theme.colors.primary,
          }}
        >
          {value}
        </h2>

        <p
          style={{
            margin: 0,
            color: "#666",
          }}
        >
          {title}
        </p>
      </div>
    </div>
  );
}