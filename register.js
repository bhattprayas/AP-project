
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate(); 

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = () => {
    const newErrors = {};
    if (formData.firstName === '') newErrors.firstName = 'First name is required.';
    if (formData.lastName === '') newErrors.lastName = 'Last name is required.';
    if (formData.email === '') newErrors.email = 'Email is required.';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      alert('Registration successful!');
      navigate('/');
    }
  };

  return (
    <div>
      <h2>Registration Form</h2>
      <div>
        <label>First Name:</label>
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
        {errors.firstName && <p>{errors.firstName}</p>}
      </div>
      <div>
        <label>Last Name:</label>
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
        {errors.lastName && <p>{errors.lastName}</p>}
      </div>
      <div>
        <label>Email:</label>
        <input type="text" name="email" value={formData.email} onChange={handleChange} />
        {errors.email && <p>{errors.email}</p>}
      </div>
      <button onClick={handleSubmit}>Register</button>
    </div>
  );
};

export default Register;
