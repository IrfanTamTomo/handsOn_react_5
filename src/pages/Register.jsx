import React, { useState } from 'react';

const Register = () => {
  // State untuk menyimpan data formulir
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  // Meng-handle perubahan pada input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Meng-handle submit formulir
  const handleSubmit = (e) => {
    e.preventDefault();
    // Lakukan sesuatu dengan data formulir, misalnya kirim ke server
    console.log(formData);
    // Setelah berhasil, mungkin akan diarahkan ke halaman lain
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
