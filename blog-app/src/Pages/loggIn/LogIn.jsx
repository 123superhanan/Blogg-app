import React, {useState} from 'react'
import "./LogIn.css"
import { Link } from 'react-router-dom'

const LogIn = () => {
const [signstate, setSignState] = useState("Sign In");

  return (
    <>
      <div className="loginPage">
        <div className="logInPage-content">
            <h3>{signstate}</h3>

            <form action="">
            {signstate === "Sign Up"? <input type="text" placeholder='Enter Name'/>:<></>}
            <input type="email" placeholder='Enter Email'/>
           
            <input type="Password" placeholder='Enter Password'/>

            <div className="form-help">
          <div className="remeber">
          <input type="checkbox" />
          <label htmlFor="">Remember Me</label>
          </div>
            <p>Need Help?</p>
          </div>
            </form>
            <button>{signstate}</button>
            <div className="form-switch">
            {signstate==="Sign In"?
            
          <p>New To MetaBlog ? <span  onClick={()=>{setSignState("Sign Up")}}>Sign Up Now</span></p>:
          <p>Already Have a Account <span onClick={()=>{setSignState("Sign In")}}>Sign In Now</span></p>}
          </div>
        </div>
      </div>
    </>
  )
}

export default LogIn
