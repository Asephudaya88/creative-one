type Props = {
  user: {
    name: string;
    avatar: string;
    role: string;
  };

  onNotification: () => void;
};

import { Bell } from "lucide-react";

export default function HomeHeader({
  user,
  onNotification,
}: Props) {
  return (
    <div className="px-4 py-3 flex items-center justify-between bg-white/80 backdrop-blur-md sticky top-0 z-10 border-b border-slate-100">

      <div className="flex items-center gap-1">
        <span className="font-black text-base text-[#0c469b]">
          Creative
        </span>

        <span className="font-black text-base bg-gradient-to-r from-orange-500 via-emerald-500 to-blue-500 bg-clip-text text-transparent">
          one
        </span>
      </div>

      <div className="flex items-center gap-2">

        <button
          onClick={onNotification}
          className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 transition relative"
        >
          <Bell className="w-4 h-4" />

          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        <img
          src={user.avatar}
          className="w-9 h-9 rounded-full border border-slate-200 object-cover"
          alt={user.name}
        />

      </div>

    </div>
  );
}