// import React, { useState } from "react";
// import axios from "axios";

// function Registration() {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//     confirmPassword: "",
//     fullname: "",
//     termsAndConditions: false,
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Make an API request to register the user
//     try {
//       const response = await axios.post("http://127.0.0.1:8000/accounts/register/", formData);
//       console.log("Registration successful", response.data);
//       // You can redirect or handle the response as needed.
//     } catch (error) {
//       console.error("Registration failed", error);
//       // Handle the error here.
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Email:</label>
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div>
//         <label>Password:</label>
//         <input
//           type="password"
//           name="password"
//           value={formData.password}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div>
//         <label>Confirm Password:</label>
//         <input
//           type="password"
//           name="confirmPassword"
//           value={formData.confirmPassword}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div>
//         <label>Full Name:</label>
//         <input
//           type="text"
//           name="fullname"
//           value={formData.fullname}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div>
//         <label>
//           <input
//             type="checkbox"
//             name="termsAndConditions"
//             checked={formData.termsAndConditions}
//             onChange={handleChange}
//             required
//           />
//           I agree to the terms and conditions
//         </label>
//       </div>
//       <button type="submit">Register</button>
//     </form>
//   );
// }

// export default Registration;

import React, { useState } from "react";
import "./Registration.css";

function Registration() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    fullname: "",
    termsAndConditions: false,
  });
  const [registrationStatus, setRegistrationStatus] = useState(null);
  const [validationErrors, setValidationErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.email || !formData.email.match(/^\S+@\S+\.\S+$/)) {
      errors.email = "Please enter a valid email address.";
    }

    if (formData.password.length < 8) {
      errors.password = "Password must be at least 8 characters long.";
    }

    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match.";
    }

    if (!formData.fullname) {
      errors.fullname = "Full name is required.";
    }

    if (!formData.termsAndConditions) {
      errors.termsAndConditions = "You must agree to the terms and conditions.";
    }

    setValidationErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Make an API request to register the user using the fetch API
      try {
        const response = await fetch(
          "http://127.0.0.1:8000/accounts/register/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );

        if (response.status === 200) {
          setRegistrationStatus("Registration successful");
        } else {
          setRegistrationStatus("Registration failed");
        }
      } catch (error) {
        setRegistrationStatus("Registration failed");
        console.error("Registration failed", error);
        // Handle the error here.
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2
          style={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            marginBottom: "30px",
            color: "black",
            fontFamily: "verdana"
          }}
        >
          Registration Form
        </h2>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {validationErrors.email && <p>{validationErrors.email}</p>}
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {validationErrors.password && <p>{validationErrors.password}</p>}
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          {validationErrors.confirmPassword && (
            <p className="para">{validationErrors.confirmPassword}</p>
          )}
        </div>
        <div>
          <label>Full Name:</label>
          <input
            type="text"
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
            required
          />
          {validationErrors.fullname && (
            <p className="para">{validationErrors.fullname}</p>
          )}
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              name="termsAndConditions"
              checked={formData.termsAndConditions}
              onChange={handleChange}
              required
            />
            <span>I agree to the terms and conditions</span>
          </label>
          {validationErrors.termsAndConditions && (
            <p className="para">{validationErrors.termsAndConditions}</p>
          )}
        </div>
        <button type="submit">Register</button>
      </form>
      {registrationStatus && <p className="para">{registrationStatus}</p>}
    </div>
  );
}

export default Registration;
