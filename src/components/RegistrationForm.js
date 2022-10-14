import React from 'react';
function RegistrationForm() {
return(
<div className='main'>
<div className='container1'>  
<form>
  <div className="container2">
    <h1>Register Here</h1>

    <label for="fName">First name</label><br></br>
    <input type="text" size="25"placeholder="Enter First Name" name="fName" id="fName" required/><br></br>

    <label for="lName">Last Name</label><br></br>
    <input type="text" size="25" placeholder="Enter Last Name" name="lName" id="lName" required/><br></br>

    <label for="email">Email</label><br></br>
    <input type="text" size="25" placeholder="Enter Email" name="email" id="email" required/><br></br>
    
    <label for="country">Country</label><br></br>
    <select id='country'></select><br></br>

    <label for="psw">Password</label><br></br>
    <input type="password" size="25" placeholder="Enter Password" name="psw" id="psw" required/><br></br>

    <label for="psw-repeat">Repeat Password</label><br></br>
    <input type="password" size="25" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required/><br></br><br></br>

    <button type="submit" className="btn">Register</button>
    <p>Or <b>Login</b> if you have account</p>
  </div>
</form>
</div>
<div className='container'>
<form>
    <div className="container3">
      <h1>Login</h1>

      <label for="email">Email</label><br></br>
      <input type="text" placeholder="Enter Email" name="email" id="email" required/><br></br><br></br>

      <label for="psw">Password</label><br></br>
      <input type="password" placeholder="Enter Password" name="psw" id="psw" required/><br></br><br></br>
      
      <button type="submit" className="">Login</button>
    </div> 
</form>
</div>
</div>
    )
}
export default RegistrationForm;