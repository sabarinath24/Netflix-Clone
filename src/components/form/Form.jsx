// import React, { useState } from "react";
// import Input from "../../components/input/Input";
// import Button from "../../components/button/Button";
// import "./form.css";
// import { Link, useNavigate } from "react-router-dom";
// import { login } from "../../api/movies";

// const Form = ({ isSignUp }) => {
//   const navigate = useNavigate();
//   const initialValue = {
//     username: "",
//     password: "",
//   };
//   const [user, setUser] = useState(initialValue);

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!isSignUp) {
//       try {
//         const success = await login(user);
//         if (success) {
//           navigate("/home");
//         } else {
//           console.log("Invalid Email and Password. Try Again.");
//         }
//       } catch (error) {
//         console.error("Error:", error.message);
//       }
//     } else {
//       localStorage.setItem("user", JSON.stringify(user));
//       console.log("Signed up successfully!");
//       navigate("/signin");
//     }
//   };

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setUser({ ...user, [name]: value });
//   };

//   return (
//     <div className="signin-container">
//       <div className="signin-box">
//         <h2 className="sign-text">{isSignUp ? "Sign Up" : "Sign In"}</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="input-box">
//             <Input
//               name="username"
//               type="text"
//               label="Email or Phone Number"
//               value={user.username}
//               onChange={handleChange}
//             />
//             <Input
//               name="password"
//               type="password"
//               label="Password"
//               value={user.password}
//               onChange={handleChange}
//             />
//             <div className="button-align">
//               <Button
//                 className="signinpage"
//                 size="x-large"
//                 color="white"
//                 round="round"
//                 bg="bg-1"
//                 value={isSignUp ? "Sign Up" : "Sign In"}
//               />
//             </div>
//           </div>
//         </form>
//         <div className="Or">
//           <p>OR</p>
//           <Button
//           value="Use a sign-in code"
//           className="sign-in-code"
//           color='white'
//           />
//           <Link to="#" className="forgotpassword">
//             Forgot Password?
//           </Link>
//         </div>
//         <div className="checkbox">
//           <div className="remember">
//             <Input type="checkbox" className="check" />
//             <p>Remember me</p>
//           </div>
//         </div>
//         {isSignUp ? (
//           <>
//             <div className="new">
//               <p>Already subscribed to Netflix?</p>
//               <Link to="/signin">Sign in</Link>
//             </div>
//           </>
//         ) : (
//           <>
//             <div className="new">
//               <p>New to Netflix?</p>
//               <Link to="/signup">Sign up now</Link>
//             </div>
//             <div className="para">
//               <p>
//                 This page is protected by Google reCAPTCHA to ensure you're not a bot. <span><a>Learn More.</a></span>
//               </p>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Form;

import React, { useState } from "react";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import "./form.css";
import { Link, useNavigate } from "react-router-dom";

const Form = ({ isSignUp }) => {
  const navigate = useNavigate();
  const initialValue = {
    username: "",
    password: "",
  };
  const [user, setUser] = useState(initialValue);
  const [message, setMessage] = useState(""); // Add state to display messages

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!isSignUp) {
      // Sign-in logic
      try {
        const storedUser = JSON.parse(localStorage.getItem("user")) || {};
        if (storedUser.username === user.username && storedUser.password === user.password) {
          navigate("/home");
        } else {
          console.log("Invalid Email or Password. Try Again.");
        }
      } catch (error) {
        console.error("Error:", error.message);
      }
    } else {
      // Sign-up logic
      const storedUser = JSON.parse(localStorage.getItem("user")) || {};

      if (storedUser.username === user.username) {
        console.log("Email ID already exists. Please sign in.");
        setMessage("Email ID already exists. Please sign in.");
      } else {
        localStorage.setItem("user", JSON.stringify(user));
        console.log("Signed up successfully!");
        navigate("/signin");
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div className="signin-container">
      <div className="signin-box">
        <h2 className="sign-text">{isSignUp ? "Sign Up" : "Sign In"}</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <Input
              name="username"
              type="text"
              label="Email or Phone Number"
              value={user.username}
              onChange={handleChange}
            />
            <Input
              name="password"
              type="password"
              label="Password"
              value={user.password}
              onChange={handleChange}
            />
            <div className="button-align">
              <Button
                className="signinpage"
                size="x-large"
                color="white"
                round="round"
                bg="bg-1"
                value={isSignUp ? "Sign Up" : "Sign In"}
              />
            </div>
          </div>
        </form>
        <div className="Or">
          <p>OR</p>
          <Button
            value="Use a sign-in code"
            className="sign-in-code"
            color='white'
          />
          <Link to="#" className="forgotpassword">
            Forgot Password?
          </Link>
        </div>
        <div className="checkbox">
          <div className="remember">
            <Input type="checkbox" className="check" />
            <p>Remember me</p>
          </div>
        </div>
        {isSignUp ? (
          <>
            <div className="new">
              <p>Already subscribed to Netflix?</p>
              <Link to="/signin">Sign in</Link>
            </div>
          </>
        ) : (
          <>
            <div className="new">
              <p>New to Netflix?</p>
              <Link to="/signup">Sign up now</Link>
            </div>
            <div className="para">
              <p>
                This page is protected by Google reCAPTCHA to ensure you're not a bot. <span><a>Learn More.</a></span>
              </p>
            </div>
          </>
        )}
        {message && <p className="error-message">{message}</p>} {/* Display message */}
      </div>
    </div>
  );
};

export default Form;
