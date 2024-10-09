import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { doSignInWithEmailAndPassword } from '../../firebase/auth';
import { setUser } from '../../slice/AuthSlice';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const userCredential = await doSignInWithEmailAndPassword(email, password);
      const user = userCredential.user;

      dispatch(setUser({
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
      }));

      alert("Login successful!");
      navigate('/'); // Redirect to the home page
    } catch (error) {
      setLoading(false);
      switch (error.code) {
        case 'auth/user-not-found':
          setError("No user found with this email.");
          break;
        case 'auth/wrong-password':
          setError("Incorrect password. Please try again.");
          break;
        case 'auth/invalid-email':
          setError("Invalid email address.");
          break;
        case 'auth/too-many-requests':
          setError("Too many login attempts. Please try again later.");
          break;
        case 'auth/invalid-credential':
          setError("Invalid credentials provided. Please check your email and password.");
          break;
        default:
          setError("An unexpected error occurred. Please try again.");
          break;
      }
    }
  };



  return (
    <div className='loginWrapper'>
      <div className='loginContainer'>
        <h2>Login</h2>
        {error && <p className="error">{error}</p>}
        <form className="loginForm" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder='Enter Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          /><br />
          <input
            type="password"
            placeholder='Enter Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          /><br />


          <button type="submit" disabled={loading}>{loading ? "Logging in..." : "Login"}</button>
        </form>
        <p>Don't have an account? <span><Link to="/signup">Create Account</Link></span></p>
      </div>
    </div>
  );
};

export default Login;