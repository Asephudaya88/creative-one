import * as Icons from "lucide-react";

interface LucideIconProps {
  name: string;
  className?: string;
  size?: number;
}

export default function LucideIcon({ name, className = "w-5 h-5", size }: LucideIconProps) {
  // Safe resolver for lucide-react icons
  const IconComponent = (Icons as any)[name];
  
  if (!IconComponent) {
    // Fallback icon if named icon is not found
    const Fallback = Icons.HelpCircle;
    return <Fallback className={className} size={size} />;
  }

  return <IconComponent className={className} size={size} />;
}
