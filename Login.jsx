import React, { useState } from 'react'
import './Login.css'



function Login() {


  const [user, setUser] = useState("");

  const [password, setPassword] = useState("");

  const [userErr, setUserErr] = useState(false);

  const [passErr, setPassErr] = useState(false);


  function Loginmanage(e) {
    if (user.length < 3 || password.length < 3) {
      alert("Please correct value")
    }
    else {
      alert("Welcome back")
    }
    e.preventDefault()

  }

  function usermanage(e) {
    let item = e.target.value;
    if (item.length < 3) {
      setUserErr(true)
    }
    else {
      setUserErr(false)
    }
    setUser(item)
  }

  function passmanager(e) {
    let item = e.target.value;
    if (item.length < 3) {
      setPassErr(true)
    }
    else {
      setPassErr(false)
    }
    setPassword(item)
  }


  return (

    <div className='bigcontain'>
       {/* header */}
       {/* <header className='header2'>
          <h1 >Multipal <span className='s1'>D</span>evelpoment  <span className='s1'>C</span>ompeny LTD.</h1>
        </header> */}

      <div className='continer23'>
      <h1  className='login_header'>Multipal <span className='s1'>D</span>evelpoment  <span className='s1'>C</span>ompeny LTD.</h1>
        {/* artical */}
        <article>
          <div className='main1'>



            <h1 className='login' id='l1'>LOGIN</h1>

            <form onSubmit={Loginmanage}>

              <input type=" text" placeholder='Username'
                onChange={usermanage} className='txt' />

              {userErr ? <span>Try again</span> : ""} <br />




              <input type=" password" placeholder='password' onChange={passmanager} className='passward' />

              {passErr ? <span>Password not valid</span> : ""}
              <br />

              <button type='submit' className='btn1'>Login</button>

           <p></p>
            </form>
          </div>
        </article>


      </div>
      {/* footer */}

      <footer>
        <div className="footer-content">
          <p>&copy; 2023 Login </p>
          <ul>
            <li><a href="/">Privacy Policy</a></li>
            <li><a href="/">Terms of Service</a></li>
            <li><a href="/">Contact Us</a></li>
          </ul>
        </div>
      </footer>

    </div>
  )
}

export default Login
