import Login from "../../components/login/Login";
import Signup from "../../components/signup/Signup";
import { useState } from "react";
import { useNavigate} from 'react-router-dom';
import "./auth.css";

function Auth() {
  const [showSignup, setShowSignup] = useState(false);
  const [loginMessage, setLoginMessage] = useState("");
  const [errorMessageLogin, setErrorMessageLogin] = useState("");
  const [errorMessageSignup, setErrorMessageSignup] = useState("");

  const navigate = useNavigate();

  const goToSignup = () => {
    setShowSignup(true);
  };

  const goToLogin = () => {
    setShowSignup(false);
  };

//   const redirectToPage = userType => {
//     if (userType === ROLES.CUSTOMER) {
//         navigate("/customer");
//     } else if (userType === ROLES.CLIENT) {
//         navigate("/client");
//     } else {
//         navigate("/admin");
//     }
// };

  const handleLoginSubmit = (data) => {

    console.log(data);
    
    navigate('/customer')

    setErrorMessageLogin('login error');
  };

  const handleSignupSubmit = (data) => {
    console.log(data);

    setShowSignup(false);
    setLoginMessage("signup successful! please login");
    // 1. make an api call and post the data to signup
    // 2. if api call is successful, redirect to login page
    // 3. show a message to user that login is successful

    // if submit is successful
    setErrorMessageSignup('signup error');
    // if submit is failure
    // dont call setignup(false)
  };


  return (
    <div>
      {showSignup ? (
        <Signup
          onSignupSubmit={handleSignupSubmit}
          goToLogin={goToLogin}
          errorMessageSignup={errorMessageSignup}
        />
      ) : (
        <Login
          onLoginSubmit={handleLoginSubmit}
          goToSignup={goToSignup}
          errorMessageLogin={errorMessageLogin}
        />
      )}
    </div>
  );
}

export default Auth;
