import React, { useContext, useState } from 'react'
import './LoginPopUp.css'
import { assets } from '../../assets/assets';
import cancel from "../../assets/cancel.png"
import axios from 'axios';

const LoginPopUp = ({setShowLogin}) => {
  
  //const {url, setToken} = useContext(StoreContext)

    const [currState, setCurrState]= useState("login");
    
    const [data, setData] = useState({
      name:"",
      email:"",
      password:""
    })

    const onChangeHandler = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setData(data=>({...data, [name]: value}))
    }

    const onLogin = async (envent) => {
      event.preventDefault()
      let newUrl = url;
      if(currState === "Login"){
        newUrl += "/api/user/login"
      }
      else{
        newUrl += "/api/user/register"
      }

      const respone = await axios.post(newUrl,data);

      if(respone.data.success){
        setToken(respone.data.token);
        localStorage.setItem("token", respone.data.token);
        setShowLogin(false)
      }
      else{
        alert(respone.data.message)
      }

    }

    return (
      <div className='login-popup'>
        <form onSubmit={onLogin} className='login-popup-container'>
          <div className='login-popup-title'>
              <h2>{currState}</h2>
              <img onClick={() =>setShowLogin(false)} src={cancel} alt="" />
          </div>

          <div className="login-popup-inputs" >
            {currState==="Login"?<></>:<input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Your Name' required />}
            <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Your Email' required />
            <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='Password' required />
          </div>

          <button type='submit'>{currState === "Sign Up" ? "Create account" : "Login"}</button>

          <div className="Login-popup-condition">
            <input type="checkbox" required />
            <p>By continuing, I agree to the terms of use & privacy policy. </p>
          </div>

          {currState==="login"?(
          <p>
            Create a new account? {" "} 
            <span onClick={() => setCurrState("Sign Up")}>Click here</span>
          </p>
          ) : (
          <p>
            Already have an account? {" "}
            <span onClick={() => setCurrState("Login")}>Login here </span>
          </p>
          )}  

        </form>
    </div>
  );
}

export default LoginPopUp
