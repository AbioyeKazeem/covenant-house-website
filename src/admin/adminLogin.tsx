import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/authSlice";
import { RootState } from "../store/store";
import { useNavigate } from "react-router-dom";
import { AppDispatch } from "../store/store";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error, isAuthenticated } = useSelector(
    (state: RootState) => state.auth
  );
  const navigate = useNavigate();

  useEffect(() => {
    const darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDarkMode(darkMode);

    if (isAuthenticated) {
      navigate("/admin");
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please fill in all fields!");
      return;
    }

    try {
      await dispatch(login({ email, password })).unwrap();
    } catch (error) {
      // Error is already handled by the slice
    }
  };

  return (
    <div
      className={`flex h-screen ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Left Side of the Login Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8">
        <h2 className="text-3xl font-bold mb-6 animate-fadeIn">Sign In</h2>
        {error && <div className="mb-4 text-red-500">{error}</div>}

        <form className="w-full max-w-md" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-lg font-medium">Email</label>
            <input
              type="email"
              className="w-full px-4 py-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-800 dark:border-gray-700"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-4 relative">
            <label className="block text-lg font-medium">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              className="w-full px-4 py-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-800 dark:border-gray-700"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="absolute top-9 right-3 text-gray-600 dark:text-gray-400"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁"}
            </button>
          </div>

          <div className="flex items-center justify-between mb-4">
            <label className="flex items-center text-lg">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-lightpurple text-white py-3 text-lg rounded-full hover:bg-orange-500 transition duration-300"
            disabled={loading}
          >
            {loading ? "Logging In..." : "Log In"}
          </button>
        </form>
      </div>

      {/* Right Side of the Login Form */}
      <div className="hidden md:flex w-1/2 bg-darkpurple text-white items-center justify-center p-8">
        <div className="text-center animate-slideIn">
          <h2 className="text-3xl font-bold">Welcome to Admin Login!</h2>
          <p className="mt-2 text-lg">
            "Behold, I am the LORD, the God of all flesh: is there anything too
            hard for me?" - Jeremiah 32:27
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
