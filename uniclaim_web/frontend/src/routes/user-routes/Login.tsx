import { useEffect, useState } from "react";
import Header from "../../layout/HeaderComp";
import { useNavigate, Link } from "react-router-dom";
import InputFieldComp from "../../components/InputFieldComp";
import PasswordInput from "../../components/InputFieldwEyeComp";
import { useAuth } from "@/context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ email: "", password: "", general: "" });

  // const { isAuthenticated, login } = useAuth();
  // const navigate = useNavigate();
  const { login } = useAuth();
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (isAuthenticated) navigate("/", { replace: false });
  // }, [isAuthenticated, navigate]);

  // fix height for mobile screens
  useEffect(() => {
    const setViewportHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    setViewportHeight();
    window.addEventListener("resize", setViewportHeight);
    return () => window.removeEventListener("resize", setViewportHeight);
  }, []);

  const validEmail = "test@gmail.com";
  const validPassword = "password";

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newError = { email: "", password: "", general: "" };
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    if (!trimmedEmail) newError.email = "Email is required";
    if (!trimmedPassword) newError.password = "Password is required";

    const hasEmptyFields = !trimmedEmail || !trimmedPassword;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!hasEmptyFields) {
      if (!emailRegex.test(trimmedEmail))
        newError.email = "Invalid email format";
      if (trimmedPassword.length < 8)
        newError.password = "Password must be at least 8 characters";
    }

    const noInputErrors = !newError.email && !newError.password;
    if (noInputErrors) {
      const isEmailValid = trimmedEmail === validEmail;
      const isPasswordValid = trimmedPassword === validPassword;

      if (!isEmailValid || !isPasswordValid)
        newError.general = "Invalid email or password";
    }

    setError(newError);

    const isValid = !newError.email && !newError.password && !newError.general;

    if (isValid) {
      login(); // update context + localStorage
      navigate("/"); // navigate to dashboard
    }
  };

  const inputClass = (hasError: string) =>
    `w-full p-2.5 rounded-lg border ${
      hasError
        ? "border-red-500 ring-1 ring-red-400"
        : "border-gray-300 focus:ring-1 focus:ring-black"
    } focus:outline-none`;

  return (
    <>
      <div className="h-screen-fix flex flex-col p-5">
        <Header />
        <div className="flex-1 flex flex-col items-center justify-center font-manrope">
          <div className="w-full max-w-sm px-4 space-y-3">
            <h1 className="text-lg text-brand font-bold text-center">
              User Login
            </h1>
            <h1 className="text-3xl text-black font-bold text-center">
              Log in your account
            </h1>
            <p className="text-sm text-gray-600 text-center">
              Welcome back, it’s good to see you again
            </p>

            {/* ✅ Wrap input and button in a <form> to allow Enter key login */}
            <form onSubmit={handleLogin}>
              <div className="mt-5">
                <InputFieldComp
                  label="Email"
                  placeholder="Enter email"
                  value={email}
                  error={error.email || error.general}
                  showErrorText={!!error.email}
                  inputClass={inputClass}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setEmail(e.target.value);
                    setError((prev) => ({ ...prev, email: "", general: "" }));
                  }}
                />
              </div>

              <PasswordInput
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError((prev) => ({
                    ...prev,
                    password: "",
                    general: "",
                  }));
                }}
                error={error.password}
                hasGeneralError={!!error.general}
              />

              {/* General error */}
              {error.general && (
                <p className="text-xs text-red-500 text-center mt-3">
                  {error.general}
                </p>
              )}

              <Link
                to="/"
                className="text-manrope my-4 flex justify-end text-sm text-black hover:text-brand hover:underline"
              >
                Forgot Password?
              </Link>

              <div className="space-y-5">
                <button
                  className="bg-brand w-full py-2 text-white rounded-lg hover:bg-teal-600 hover:cursor-pointer transition-all duration-200"
                  type="submit"
                >
                  Login
                </button>

                <Link
                  to="/adminlogin"
                  className="block w-full border text-center text-brand hover:text-teal-600 hover:border-teal-600 py-2 border-brand rounded-lg"
                >
                  Login as admin
                </Link>
              </div>
            </form>

            <div className="mt-5">
              <h1 className="text-sm text-center">
                Don't have an account?{" "}
                <Link to="/register" className="text-brand hover:underline">
                  Register here
                </Link>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
