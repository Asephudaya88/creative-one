import { ReactNode } from "react";
import { theme } from "../../styles/theme";

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "success" | "danger";
};

export default function Button({
  children,
  onClick,
  variant = "primary",
}: ButtonProps) {
  const colors = {
    primary: theme.colors.primary,
    secondary: theme.colors.secondary,
    success: theme.colors.success,
    danger: theme.colors.danger,
  };

  return (
    <button
      onClick={onClick}
      style={{
        background: colors[variant],
        color: "#fff",
        border: "none",
        padding: "12px 20px",
        borderRadius: theme.radius.md,
        cursor: "pointer",
        fontWeight: 600,
        boxShadow: theme.shadow.card,
        transition: "0.2s ease",
      }}
    >
      {children}
    </button>
  );
}