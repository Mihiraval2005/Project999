import React, { useState } from 'react'
import './Services.css'

function Services() {
   const [text,setText] = useState("")
   const [number,setNumber] = useState("")
   const [radio,setRadio] = useState("")
   const [birthday_time,setBirthday_time] = useState("")
   const [email,setEmail] = useState("")
   const [myfile,setMyfile] = useState("")
   const [text1,setText1] = useState("")
   
    


  function backDeta(e){
    console.log( text,number,radio,birthday_time,email,myfile,text1)
    alert("Form is Complet Submitted in Compny deta");
    alert("welcome this compny");
    e.preventDefault()
  }

   
  return (
    <div>
      <div className='headdiv919'>
        {/* header */}
        <header className='header4'>
          <h1 className='headerh1'>Compeny Registration</h1>
        </header>
      </div>

      {/* artical */}


      <div className='artdiv4'>
        <h1 className='registration_Form'>Information</h1>
        <artical className='artical4'>
          <div className='border'>
            <form onSubmit={backDeta}>
              <h2 className='Detail'>Full name</h2>
              <input type="text" placeholder='Enter full name..' onChange={(e)=>setText(e.target.value)} className='txt5' /> <br /> <br /> <br />


              <h2 className='Detail'>Phone Number</h2>
              <input type="number" placeholder='Phone number'onChange={(e)=>setNumber(e.target.value)} className='phone_number' /><br /><br /><br />


              {/* radio */}
              <p className='Detail'>Select Gendar:</p>
              <div className="radio-button-container">
                <div className="radio-button">
                  <input type="radio" className="radio-button__input" id="radio1" name="radio-group" 
                   
                  />
                  <label className="radio-button__label" for="radio1"  onChange={(e)=>setRadio(e.target.value)}>
                    <span className="radio-button__custom"></span>
                    Male
                  </label>
                </div>
                <div class="radio-button">
                  <input type="radio" className="radio-button__input" id="radio2" name="radio-group"
            
                  />
                  <label className="radio-button__label" for="radio2" onChange={(e)=>setRadio(e.target.value)}>
                    <span className="radio-button__custom"></span>
                    Female
                  </label>
                </div>
                <div class="radio-button">
                  <input type="radio" className="radio-button__input" id="radio3" name="radio-group"
                
                  />
                  <label className="radio-button__label" for="radio3"   >
                    <span className="radio-button__custom"></span>
                    Other
                  </label>
                </div>
              </div><br /><br />

              {/* birthdaytime */}
              <label for="birthdaytime" className='Detail'>Birthday (date and time):</label><br /><br />
              <input type="datetime-local" id="birthdaytime"onChange={(e)=>setBirthday_time(e.target.value)} name="birthdaytime" className='date' /><br />
              <br /><br />


              {/* email */}
              <label for="email" className='Detail'>Enter your email:</label><br />
              <input type="email" id="email" name="email" className='email'  onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Email' /><br />
              <br /><br />


              {/* choosefile */}
              <p className='Detail'>Upload Passport Size photo</p><br />
              <label for="myfile" className='Detail'> Select a file:</label>
              <input type="file" id="myfile" name="myfile" onChange={(e)=>setMyfile(e.target.value)}  className='choose_file' /><br /><br /><br />


              {/* address */}
              <h1 className='Detail'>Address</h1>
              <input type="text" placeholder='Enter Current Address' onChange={(e)=>setText1(e.target.value)}  className='text' /><br /><br />

              <button type='submit' className='btn4'>Register</button>
            </form>
          </div>
        </artical>
      </div>

      {/* footer */}
      <footer className='footer999'>
        <div className="footer-content4">
          <p>&copy; 2023 My Feature Car Collection</p>
          <ul>
            <li><a href="/">Updeted</a></li>
            <li><a href="/">Feature Car</a></li>
            <li><a href="/">Contact</a></li>
          </ul>
        </div>
      </footer>
    </div>
  )
}

export default Services
