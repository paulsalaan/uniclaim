import { useEffect, useState } from "react";
import Header from "../components/HeaderComp";
import { useNavigate, Link } from "react-router-dom";
import InputFieldComp from "../components/InputFieldComp";
import PasswordInput from "../components/InputFieldwEyeComp";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ email: "", password: "", general: "" });

  //height vh fit
  useEffect(() => {
    const setViewportHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    setViewportHeight();
    window.addEventListener("resize", setViewportHeight);

    return () => {
      window.removeEventListener("resize", setViewportHeight);
    };
  }, []);

  // dummy valid user credentials
  const validEmail = "dummyuser@gmail.com";
  const validPassword = "password123";

  const navigate = useNavigate(); // Initialize the navigate function

  //error handling here
  const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const newError = { email: "", password: "", general: "" };
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    //check of empty inputs
    if (!trimmedEmail) newError.email = "Email is required";
    if (!trimmedPassword) newError.password = "Password is required";

    // e check niya if tinood ba na walay inputs ang email og password
    const hasEmptyFields = !trimmedEmail || !trimmedPassword;

    // dari na dayun tong mga error handling based kung unsay sulod sa input fields
    // error para sa email and password formats
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

    // gamiton ang mga errors
    setError(newError);
    console.log(newError);

    const isValid = !newError.email && !newError.password && !newError.general;
    if (isValid) navigate("/home");
  };

  //error and no error styling
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

            {/* Email and password fields */}
            <div>
              {/* Email InputField*/}
              <div className="mt-5">
                <InputFieldComp
                  label="Email"
                  placeholder="Enter email"
                  value={email}
                  error={error.email || error.general} // still passes the style error
                  showErrorText={!!error.email} // only shows text if email-specific error exists
                  inputClass={inputClass}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setEmail(e.target.value);
                    setError((prev) => ({ ...prev, email: "", general: "" }));
                  }}
                />
              </div>

              {/* Password */}
              <PasswordInput
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError((prev) => ({ ...prev, password: "", general: "" }));
                }}
                error={error.password}
                hasGeneralError={!!error.general}
              />
            </div>

            {/* General error */}
            {error.general && (
              <p className="text-xs text-red-500 text-center mt-3">
                {error.general}
              </p>
            )}

            {/* forgotpassword */}
            <Link
              to="/"
              className="text-manrope my-4 flex justify-end text-sm text-black hover:text-brand hover:underline"
            >
              Forgot Password?
            </Link>

            <div className="space-y-5">
              {/* submit button */}
              <button
                onClick={handleLogin}
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
