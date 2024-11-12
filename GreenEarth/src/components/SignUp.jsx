import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function SignUp() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let formErrors = {};

    if (!formData.email) {
      formErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Invalid email format';
    }

    if (!formData.password) {
      formErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      formErrors.password = 'Password must be at least 6 characters';
    }

    if (!formData.confirmPassword) {
      formErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.confirmPassword !== formData.password) {
      formErrors.confirmPassword = 'Passwords do not match';
    }

    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      setSubmitted(true);
      console.log('Form Submitted:', formData);
      // Perform actual signup process here (e.g., API call)
    } else {
      setSubmitted(false);
    }
  };
  return (
    <div className="flex justify-center items-center h-screen bg-[#283628]">
        <img className='relative h-[89%] w-[94%] object-cover' src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
    <div className="absolute h-[89%] w-[30%] bg-white/40 backdrop-blur-sm p-6 rounded shadow-md">
      <h2 className="text-3xl font-bold text-white">Sign Up</h2>
      {submitted && (
        <p className="text-green-500 text-sm mb-2">Signup successful!</p>
      )}
      <form onSubmit={handleSubmit}>
        <label className="block mt-4">
          <span className='text-white text-lg'>Email</span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full mt-1 p-2 border rounded-full ${
              errors.email ? 'border-red-500' : ''
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </label>
        <label className="block mt-4">
          <span className='text-lg text-white'>Password</span>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={`w-full mt-1 p-2 border rounded-full ${
              errors.password ? 'border-red-500' : ''
            }`}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
          )}
        </label>
        <label className="block mt-4">
          <span className='text-white text-lg'>Confirm Password</span>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className={`w-full mt-1 p-2 border rounded-full ${
              errors.confirmPassword ? 'border-red-500' : ''
            }`}
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm mt-1">
              {errors.confirmPassword}
            </p>
          )}
        </label>
        <button
          type="submit"
          className="w-[50%] ml-20 mt-4 bg-green-500 text-white py-2 rounded-full hover:bg-green-600"
        >
          Sign Up
        </button>
      </form>
      <p className="mt-4 text-md text-center text-white">
        Already have an account?{' '}
        <Link to='/login' className="text-blue-600 underline">
          Login
        </Link>
      </p>
    </div>
  </div>
  )
}

export default SignUp
