import React, { useState } from "react";
import "../css/signup.css";
import { useHistory } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    Email: "",
    Password: "",
  });
  const history = useHistory()
  const handelChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
    loginUser();
  };
  const loginUser = async () => {
    const result = await fetch(`http://localhost:5000/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
          Email:formData.Email,
          Password:formData.Password
      }),
    }).then((res) => res.json());
    if (result.status === "ok") {
      alert("Success");
      history.push('/homepage')
    } else {
      alert(result.error);
    }
  };
  
  return (
    <div className="sign_up">
      <div className="signUp_bottom">
        <h2 className="signUp_bottom_h2">Login</h2>
        <img className="img_logo" src="/images/logo.jpg" alt="null" />
        <form className="form_grid" onSubmit={handleSubmit}>
          <div className="form_col">
            <input
              placeholder="Enter your Email"
              name="Email"
              onChange={handelChange}
            />
          </div>
          <div className="form_col">
            <input
              placeholder="Enter your Password"
              name="Password"
              onChange={handelChange}
            />
          </div>
          <div className="submit">
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
