import Login from "../../components/login/Login";
import Signup from "../../components/signup/Signup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { newUserSignin, newUserSignup } from "../../api/auth";
import "./auth.css";
import { storeUserData } from "../../utils/userData";
import { ROLES } from "../../constants/userRoles";

function Authentication() {
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

    const redirectToPage = (userType) => {
      if (userType === ROLES.CUSTOMER) {
          navigate("/customer");
      } else if (userType === ROLES.CLIENT) {
          navigate("/client");
      } else {
          navigate("/admin");
      }
  };

  const handleLoginSubmit = (data) => {
    newUserSignin(data)
      .then((response) => {
        console.log(response);
        const { status, data, message } = response;
        if (status === 200) {
          if (message) {
            // case when login credentials are incorrect
            setErrorMessageLogin(message);
          } else {
            // success when api passes with corect credentials

            // store user data in the localstorage
            storeUserData(data);

            // navigate to the correct page on login based on user type
            const userType = data.userTypes;
            redirectToPage(userType);
          }
        }
      })
      .catch((error) => {
        // case when api fails due to network/auth issue
        setErrorMessageLogin(error?.response?.data?.message);
      });
  };

  const handleSignupSubmit = (data) => {
    newUserSignup(data)
      .then((response) => {
        const { message, status } = response;
        if (status === 201) {
          setShowSignup(false);
          setLoginMessage("Sign up Successful!! Please login");
        } else if (message) {
          setErrorMessageSignup(message);
        }
      })
      .catch((error) => {
        setErrorMessageSignup(error?.response?.data?.message || error?.message);
      });

    // 1. make an api call and post the data to signup
    // 2. if api call is successful, redirect to login page
    // 3. show a message to user that login is successful

    // if submit is successful

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
          loginMessage={loginMessage}
          errorMessageLogin={errorMessageLogin}
        />
      )}
    </div>
  );
}

export default Authentication;
