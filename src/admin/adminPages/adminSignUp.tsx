import { useState, useEffect } from "react";

const AdminSignup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDarkMode(darkMode);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !password || !confirmPassword) {
      alert("Please fill in all fields!");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Signing up with:", { name, email, password });
  };
  return (
    <div className={`flex h-screen ${ isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>

{/* Left Side of the Signup Form */}
<div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8">
<h2 className="text-3xl font-bold mb-6 animate-fadeIn">Create an Account</h2>
<form className="w-full max-w-md" onSubmit={handleSubmit}>
  <div className="mb-4">
    <label className="block text-lg font-medium">Name</label>
    <input type="text" className="w-full px-4 py-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-800 dark:border-gray-700" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
  </div>

  <div className="mb-4">
    <label className="block text-lg font-medium">Email</label>
    <input type="email" className="w-full px-4 py-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-800 dark:border-gray-700" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
  </div>
  <div className="mb-4 relative">
    <label className="block text-lg font-medium">Password</label>
    <input type={showPassword ? "text" : "password"} className="w-full px-4 py-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-800 dark:border-gray-700" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
    <button type="button" className="absolute top-9 right-3 text-gray-600 dark:text-gray-400" onClick={() => setShowPassword(!showPassword)}> {showPassword ? "🙈" : "👁"}</button>
  </div>
  <div className="mb-4 relative">
    <label className="block text-lg font-medium">Confirm Password</label>
    <input type={showConfirmPassword ? "text" : "password"} className="w-full px-4 py-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-800 dark:border-gray-700"placeholder="Confirm your password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
    <button type="button" className="absolute top-9 right-3 text-gray-600 dark:text-gray-400" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
      {showConfirmPassword ? "🙈" : "👁"}
    </button>
  </div>
  <div className="flex justify-center">
    <button type="submit" className="bg-lightpurple text-white py-2 px-6 text-sm rounded-full hover:bg-orange-500 transition duration-300">
      Sign Up
    </button>
  </div>
</form>
</div>
{/* Right Side of the Signup Form */}
  <div className="hidden md:flex w-1/2 bg-darkpurple text-white items-center justify-center p-8">
    <div className="text-center animate-slideIn">
      <h2 className="text-3xl font-bold">Join Us!</h2>
  <p className="mt-2 text-lg">"With God all things are possible." - Matthew 19:26 </p>
  </div>
  </div>
</div>
);};
export default AdminSignup;
