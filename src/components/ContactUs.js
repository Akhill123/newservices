import React, { useState } from "react";
import "./ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = "Name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.message) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // You can perform the form submission or other actions here
      console.log("Form submitted:", formData);
    }
  };

  return (
    <div className="contact-us-container">
      <h1 className="contact-us-title">Contact Us</h1>
      <p className="contact-us-description">
        Feel free to reach out to us with any questions or concerns.
      </p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className={`form-input ${errors.name && "error"}`}
            value={formData.name}
            onChange={handleInputChange}
          />
          {errors.name && <span className="error-text">{errors.name}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className={`form-input ${errors.email && "error"}`}
            value={formData.email}
            onChange={handleInputChange}
          />
          {errors.email && <span className="error-text">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="message" className="form-label">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            className={`form-textarea ${errors.message && "error"}`}
            value={formData.message}
            onChange={handleInputChange}
          ></textarea>
          {errors.message && <span className="error-text ">{errors.message}</span>}
        </div>
        <button type="submit" className="form-button">
          Submit
        </button>
      </form>
      <div className="additional-info">
        <p className="additional-info-text">
          You can also contact us through the following methods:
        </p>
        <ul className="additional-info-list">
          <li className="additional-info-item">Email: info@example.com</li>
          <li className="additional-info-item">Phone: +1234567890</li>
        </ul>
      </div>
    </div>
  );
};

export default ContactUs;
// import React, { useState } from 'react';
// import axios from 'axios';


// const SignupForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//   });

//   const [errors, setErrors] = useState({});
//   const [apiResponse, setApiResponse] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const validateForm = () => {
//     const newErrors = {};

//     if (!formData.name) {
//       newErrors.name = 'Name is required';
//     }

//     if (!formData.email) {
//       newErrors.email = 'Email is required';
//     } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
//       newErrors.email = 'Invalid email address';
//     }

//     if (!formData.password) {
//       newErrors.password = 'Password is required';
//     }

//     if (formData.password !== formData.confirmPassword) {
//       newErrors.confirmPassword = 'Passwords do not match';
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const isValid = validateForm();

//     if (isValid) {
//       try {
//         // Using JSONPlaceholder for demonstration purposes
//         const response = await axios.post('https://jsonplaceholder.typicode.com/posts', formData);

//         // Handle the API response as needed
//         setApiResponse('Signup Successful!');
//       } catch (error) {
//         // Handle API error
//         setApiResponse('Signup Failed. Please try again.');
//       }
//     }
//   };

//   return (
//     <div className="container">
//       <h1>Signup Form</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Name:</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//           />
//           {errors.name && <span className="error">{errors.name}</span>}
//         </div>
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//           />
//           {errors.email && <span className="error">{errors.email}</span>}
//         </div>
//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//           />
//           {errors.password && <span className="error">{errors.password}</span>}
//         </div>
//         <div>
//           <label>Confirm Password:</label>
//           <input
//             type="password"
//             name="confirmPassword"
//             value={formData.confirmPassword}
//             onChange={handleChange}
//           />
//           {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//       {apiResponse && <div className="response">{apiResponse}</div>}
//     </div>
//   );
// };



// export default SignupForm;
