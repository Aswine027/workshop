import { useState } from 'react';
import '../style/log.css';

function Log() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setFormData({ username: '', email: '', password: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password || (!isLogin && !formData.username)) {
      alert('Please fill all required fields');
      return;
    }

    if (isLogin) {
      console.log('Login:', formData);
      alert(`Logged in as ${formData.email}`);
    } else {
      console.log('Signup:', formData);
      alert(`Signed up as ${formData.username}`);
    }

    setFormData({ username: '', email: '', password: '' });
  };

  return (
    <div className="container">
      <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        )}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
      </form>
      <p onClick={toggleMode} className="toggle">
        {isLogin ? "Don't have an account? Sign up" : 'Already have an account? Log in'}
      </p>
    </div>
  );
}

export default Log;
