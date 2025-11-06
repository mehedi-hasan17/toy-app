import React, { use, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { GoogleAuthProvider, sendPasswordResetEmail, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/fire.int";
import { CiRead, CiUnread } from "react-icons/ci";
import { toast } from "react-toastify";

const Loging = () => {
  
  const { signin, setError, error, setUser } = use(AuthContext);
  const provider = new GoogleAuthProvider();
  const navigat = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const singInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const loggedUser = result.user;
        setUser(loggedUser);
        navigat(location.state?.from || "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const location = useLocation();
  const nevigate = useNavigate();


  const emailRef = useRef()
  const heandleForgetPassword= async (e) => {
    e.preventDefault()
    const email = emailRef.current.value
    console.log(email);
    
    sendPasswordResetEmail(auth, email)
  .then(( ) => {
    console.log("Chake Youe email reset Password");
    
    toast.success("Chake Youe email reset Password")
  //  console.log(result);
   
  })
  .catch((error) => {
    toast.error(error.message)
  });
  }
  const heandelLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signin(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        alert("Login successful.");
        e.target.reset();
        nevigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        const errorCode = error.code;
        setError(errorCode);
      });
  };
  return (
    <div className="flex items-center justify-center my-4">
      <div className="card bg-base-100  w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={heandelLogin} className="card-body">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              ref={emailRef}
              name="email"
              className="input"
              placeholder="Email"
              required
            />
            <label className="label">Password</label>
           <div className="relative">
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
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <div>
              <button type="button" onClick={heandleForgetPassword} 
              className="hover:underline cursor-pointer">Forgot password?</button>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
            <button
              onClick={singInWithGoogle}
              type="button"
              className="btn bg-white text-black border-[#e5e5e5]"
            >
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>
          </fieldset>
          <h1 className=" text-center ">
            Dont’t Have An Account ?
            <Link to="/register">
              <span className="text-red-500 hover:underline">Register</span>
            </Link>
          </h1>
        </form>
      </div>
    </div>
  );
};

export default Loging;
