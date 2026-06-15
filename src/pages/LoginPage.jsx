import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";
import AuthLayout from "../layouts/AuthLayout";

function LoginPage() {
  const { isAuthenticated } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const tujuan = location.state?.from?.pathname ?? "/dasbor";

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (isAuthenticated) {
      const savedUser = JSON.parse(localStorage.getItem("user_laundry_admin"));

      if (savedUser?.role === "member") {
        navigate("/member", {
          replace: true,
        });
      } else {
        navigate("/dasbor", {
          replace: true,
        });
      }
    }
  }, [isAuthenticated, navigate]);

  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const user = await login(form);

      if (user.role === "member") {
        navigate("/member", {
          replace: true,
        });
      } else {
        navigate("/dasbor", {
          replace: true,
        });
      }
    } catch {
      setError("Username/email atau password salah");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout>
      <div className="text-center mb-8">
        <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-4xl">🧺</span>
        </div>

        <h1 className="text-2xl font-bold">LaundryKu</h1>

        <p className="text-gray-500">Sistem Manajemen Laundry</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 text-sm font-medium">
            Username / Email
          </label>

          <input
            type="text"
            placeholder="admin atau admin@gmail.com"
            className="w-full border rounded-lg px-4 py-2"
            value={form.username}
            onChange={(e) =>
              setForm({
                ...form,
                username: e.target.value,
              })
            }
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">Password</label>

          <input
            type="password"
            placeholder="Masukkan password"
            className="w-full border rounded-lg px-4 py-2"
            value={form.password}
            onChange={(e) =>
              setForm({
                ...form,
                password: e.target.value,
              })
            }
          />
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
        >
          {loading ? "Memproses..." : "Masuk"}
        </button>
      </form>

      <div className="mt-6 text-center text-xs text-gray-500">
        <p>
          Admin Username: <b>admin</b>
        </p>
        <p>
          Admin Email: <b>admin@gmail.com</b>
        </p>
        <p>
          Admin Password: <b>admin</b>
        </p>

        <br />

        <p>
          Member Username: <b>member</b>
        </p>
        <p>
          Member Email: <b>member@gmail.com</b>
        </p>
        <p>
          Member Password: <b>member</b>
        </p>
      </div>
    </AuthLayout>
  );
}

export default LoginPage;
