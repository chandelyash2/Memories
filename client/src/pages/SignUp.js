import React, { useState } from "react";
import "../css/signup.css";
function SignUp() {
  const [formData, setFormData] = useState({
    FullName: "",
    Email: "",
    Password: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    addData()
    e.target.reset()
  };
  const addData=async()=>{
    await fetch(
        `http://localhost:5000/user/adduser`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      ).then((response) => {
        response.json()
       alert('Data successfully added')
      });
  }
  return (
    <div className="sign_up">
      <div className="signUp_bottom">
        <h2 className="signUp_bottom_h2">SignUp</h2>
        <img className="img_logo" src="/images/logo.jpg" alt="null" />
        <form className="form_grid" onSubmit={handleSubmit}>
          <div className="form_col">
            <input
              placeholder="Enter your Name"
              name="FullName"
              onChange={handleChange}
            />
          </div>
          <div className="form_col">
            <input
              placeholder="Enter your Email"
              name="Email"
              onChange={handleChange}
            />
          </div>
          <div className="form_col">
            <input
              placeholder="Enter your Password"
              name="Password"
              onChange={handleChange}
            />
          </div>
          <div className="submit">
            <button type="submit">SignUp</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
