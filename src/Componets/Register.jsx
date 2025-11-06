import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import { auth } from "../firebase/fire.int";
import { AuthContext } from "../Provider/AuthProvider";
import { CiRead, CiUnread } from "react-icons/ci";

const Register = () => {
  const { setUser } = useContext(AuthContext);
  const [nameError, setNameError] = useState("");
  const [showPassword, setShowPassword] = useState(false); // ✅ password toggle
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value.trim();
    const photoURL = e.target.PhotoUrl.value.trim();
    const email = e.target.email.value.trim();
    const password = e.target.password.value;

    if (name.length < 5) {
      setNameError("Name should be more than 5 characters");
      toast.error("Name should be more than 5 characters");
      return;
    } else setNameError("");

    if (!/[A-Z]/.test(password)) {
      toast.error("Password must contain at least one uppercase letter.");
      return;
    }
    if (!/[a-z]/.test(password)) {
      toast.error("Password must contain at least one lowercase letter.");
      return;
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long.");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        updateProfile(user, { displayName: name, photoURL })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL });
            toast.success("Registration successful!");
            e.target.reset();
            navigate("/");
          })
          .catch(() => toast.error("Failed to update profile."));
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <div className="flex items-center justify-center my-4">
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Enter Your Name"
              required
            />
            {nameError && <p className="text-sm text-red-400">{nameError}</p>}

            <label className="label">Photo URL</label>
            <input
              type="text"
              name="PhotoUrl"
              className="input"
              placeholder="Enter Your Photo URL"
              required
            />

            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Enter Your Email"
              required
            />

            <div className="relative">
              <label className="label">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                className="input"
                placeholder="Enter Your Password"
                required
              />
              <span
                className="absolute bottom-2 right-6 cursor-pointer text-xl text-gray-500"
                onClick={() => setShowPassword(!showPassword)} 
              >
                {showPassword ? <CiUnread /> : <CiRead />}
              </span>
            </div>

            <button type="submit" className="btn btn-neutral mt-4">
              Register
            </button>
          </fieldset>
        </form>
      </div>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default Register;
