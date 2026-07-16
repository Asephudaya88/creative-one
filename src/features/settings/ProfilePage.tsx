import { User } from "../../types";

interface Props {
  user: User;
}

export default function ProfilePage({ user }: Props) {
  return (
    <div className="p-5 space-y-5">
      <div className="bg-white rounded-2xl shadow p-6 text-center">

        <img
          src={user.avatar}
          alt={user.name}
          className="w-24 h-24 rounded-full mx-auto border-4 border-blue-500 object-cover"
        />

        <h2 className="text-xl font-bold mt-4">
          {user.name}
        </h2>

        <p className="text-gray-500">
          {user.role}
        </p>

        <p className="text-sm text-gray-400 mt-2">
          {user.organization}
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow p-5">

        <h3 className="text-2xl font-bold text-green-800 mb-4">
          Informasi Akun
        </h3>

        <div className="space-y-3">

          <div>
            <small>Email</small>
            <p>{user.email}</p>
          </div>

          <div>
            <small>ID User</small>
            <p>{user.id}</p>
          </div>

          <div>
            <small>Saldo</small>
            <p>Rp {user.balance.toLocaleString("id-ID")}</p>
          </div>

        </div>

      </div>
    </div>
  );
}