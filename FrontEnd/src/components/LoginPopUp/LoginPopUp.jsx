import React, { useContext, useState } from 'react'
import './LoginPopUp.css'
import cancel from "../../assets/cancel.png"
import axios from 'axios';
import { StoreContext } from '../pages/StoreContext';

const LoginPopUp = ({setShowLogin}) => {
  
  const {url, setToken, loadCartData} = useContext(StoreContext)
  const [currState, setCurrState]= useState("login");
  const [data, setData] = useState({
    name:"",
    email:"",
    password:""
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onLogin = async (event) => {
    event.preventDefault();

    let newUrl = url;

    if (currState === "login") {
      newUrl += "/api/user/login";
    } else {
      newUrl += "/api/user/register";
    }

    const response = await axios.post(newUrl, data);
  
    if (response.data.success) {
      setToken(response.data.token); // Set token via context
      localStorage.setItem("token", response.data.token); // Store token
      localStorage.setItem("email", data.email); // Store the email from the frontend data
      loadCartData(response.data.token);
      setShowLogin(false); // Close popup
    } else {
      alert(response.data.message); // Display error message
    }
  };

    return (
      <div className='login-popup'>
        <form onSubmit={onLogin} className='login-popup-container'>
          <div className='login-popup-title'>
              <h2>{currState === "login" ? "Login" : "Sign Up"}</h2>
              <img onClick={() =>setShowLogin(false)} src={cancel} alt="Close" />
          </div>

          <div className="login-popup-inputs" >
            {currState === "sign-up" && (<input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Your Name' required />)}
            <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Your Email' required />
            <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='Password' required />
          </div>

          <button type='submit'>{currState === "login" ? "Login" : "Create account"}</button>

          <div className="Login-popup-condition">
            <input type="checkbox" required />
            <p>By continuing, I agree to the terms of use & privacy policy. </p>
          </div>

          {currState === "login" ?(
          <p>
            Don't have an account? {" "} 
            <span onClick={() => setCurrState("sign-up")}>Sign Up here</span>
          </p>
        ) : (
          <p>
            Already have an account? {" "}
            <span onClick={() => setCurrState("login")}>Login here</span>
          </p>
          )}  
        </form>
    </div>
  );
};

export default LoginPopUp
