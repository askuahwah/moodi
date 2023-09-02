import React, { useState } from "react";
// import { useNavigate, history } from "react-router-dom";
import "./signup.css";

const Signup = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });
  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    console.log("ho");
    setUser({ ...user, [name]: value });
    console.log(user);
  };

  const PostData = async (e) => {
    e.prevent.Default();

    const { name, email, phone, work, password, cpassword } = user;
    const res = fetch("http://localhost:5000/signup", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        work,
        password,
        cpassword,
      }),
    });

    const data = await res.json();
    if (data.status === 422 || !data) {
      window.alert("INvalid Registration");
      console.log("INvalid Resistration");
    } else {
      window.alert("Registration successfully");
      console.log("Resistration successfully");
    }
  };

  return (
    <>
      <div className="main-container">
        <div className="registration-form">
          <h1>Registration</h1>
          <form method="POST">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={user.name}
              onChange={handleInputs}
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              autoComplete="username"
              value={user.email}
              onChange={handleInputs}
            />

            <label htmlFor="phone">Phone Number:</label>
            <input
              type="text"
              id="phone"
              name="phone"
              required
              value={user.phone}
              onChange={handleInputs}
            />

            <label htmlFor="work">Work:</label>
            <input
              type="text"
              id="work"
              name="work"
              required
              value={user.work}
              onChange={handleInputs}
            />

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              autoComplete="new-password"
              value={user.password}
              onChange={handleInputs}
            />

            <label htmlFor="cpassword">Confirm Password:</label>
            <input
              type="password"
              id="cpassword"
              name="cpassword"
              required
              autoComplete="new-password"
              value={user.cpassword}
              onChange={handleInputs}
            />

            <button type="submit" value={"register"} onClick={PostData}>
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
