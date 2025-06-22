import { Link } from "react-router-dom";
import InputField from "../../components/GeneralInputComp";
import Header from "../../layout/HeaderComp";
import { useEffect, useState } from "react";

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  contactNum?: string;
  password?: string;
  confirmPassword?: string;
}

export default function Register() {
  // fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNum, setContactNum] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // for errors
  const [regError, setRegError] = useState<FormErrors>({});

  // handle submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: FormErrors = {};

    if (!firstName.trim()) newErrors.firstName = "First name is required";
    if (!lastName.trim()) newErrors.lastName = "Last name is required";
    if (!email.trim()) newErrors.email = "Email is required";
    if (!contactNum.trim()) newErrors.contactNum = "Email is required";
    if (!password.trim()) newErrors.password = "Password is required";
    if (!confirmPassword.trim())
      newErrors.confirmPassword = "This field is required";
    else if (password.length < 8)
      newErrors.password = "Password must be at least 8 characters";

    // error handling for contactnum
    if (!contactNum.trim()) newErrors.contactNum = "Contact number is required";
    else if (!/^\d{11}$/.test(contactNum))
      newErrors.contactNum = "Contact number must be 11 digits";

    // error handling for confirm password
    if (!confirmPassword.trim())
      newErrors.confirmPassword = "This field is required";
    else if (confirmPassword !== password)
      newErrors.confirmPassword = "Passwords do not match";

    setRegError(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Registering user:", {
        firstName,
        lastName,
        email,
        password,
      });
      // submit to API or next steps here
    }
  };

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

  return (
    <>
      <div className="h-screen-fix flex flex-col p-5">
        <Header />
        <div className="flex-1 flex flex-col items-center justify-center font-manrope py-15 md:py-15 md:p-0">
          <div className="w-full max-w-sm px-4 space-y-2 text-center">
            <h1 className="text-lg text-brand font-bold text-center">
              User Registration
            </h1>
            <h1 className="text-2xl text-black font-bold text-center sm:text-2xl md:text-3xl">
              Create an account
            </h1>
            <p className="text-sm text-gray-600 text-center">
              Create an account to start using Uniclaim
            </p>
          </div>

          {/* Registration Form */}
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-md mt-6 space-y-5 px-4"
          >
            {/* Full Name Fields */}
            <div className="flex flex-col space-y-5 md:space-y-0 md:flex-row md:gap-4">
              <div className="w-full">
                <InputField
                  label="First Name"
                  name="firstname"
                  type="text"
                  value={firstName}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setFirstName(e.target.value);
                    setRegError((prev) => ({
                      ...prev,
                      firstName: "",
                    }));
                  }}
                  placeholder="Enter your first name"
                  error={regError.firstName}
                />
              </div>
              <div className="w-full">
                <InputField
                  label="Last Name"
                  name="lastname"
                  type="text"
                  value={lastName}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setLastName(e.target.value);
                    setRegError((prev) => ({
                      ...prev,
                      lastName: "",
                    }));
                  }}
                  placeholder="Enter your last name"
                  error={regError.lastName}
                />
              </div>
            </div>

            {/* Email */}
            <InputField
              label="Email Address"
              name="email"
              type="email"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setEmail(e.target.value);
                setRegError((prev) => ({
                  ...prev,
                  email: "",
                }));
              }}
              placeholder="Enter your email"
              error={regError.email}
            />

            <InputField
              label="Contact Number"
              name="contactNum"
              type="text"
              value={contactNum}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setContactNum(e.target.value);
                setRegError((prev) => ({
                  ...prev,
                  contactNum: "",
                }));
              }}
              placeholder="Enter your contact number"
              error={regError.contactNum}
            />

            {/* Password */}
            <InputField
              label="Password"
              name="password"
              type="password"
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setPassword(e.target.value);
                setRegError((prev) => ({
                  ...prev,
                  password: "",
                }));
              }}
              placeholder="Enter your password"
              error={regError.password}
              showEyeIcon={true}
              showEyeSlashIcon={true}
            />

            <InputField
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setConfirmPassword(e.target.value);
                setRegError((prev) => ({
                  ...prev,
                  confirmPassword: "",
                }));
              }}
              placeholder="Re-enter your password"
              error={regError.confirmPassword}
              showEyeIcon={true}
              showEyeSlashIcon={true}
            />

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full mt-4 bg-brand text-white py-2 rounded-lg hover:bg-teal-600 transition-all"
            >
              Create an account
            </button>
          </form>

          <div className="mt-5">
            <h1 className="text-sm text-center">
              Already have an account?{" "}
              <Link to="/" className="text-brand hover:underline">
                Login Now
              </Link>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
