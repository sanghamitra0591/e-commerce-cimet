import React, { useEffect, useState } from 'react';
import './Signup.css';
import { useDispatch } from 'react-redux';
import { doCreateUserWithEmailAndPassword } from '../../firebase/auth';
import { resetUser } from '../../slice/AuthSlice';
import { onAuthStateChanged, updateProfile } from 'firebase/auth';
import { auth, db } from '../../firebase/firebase-config'; 
import { doc, getDoc, setDoc } from "firebase/firestore"; 
import { useNavigate, Link } from 'react-router-dom';

const Signup = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch(resetUser());
            }
        });
        return unsubscribe;
    }, [dispatch]);

    const isUsernameTaken = async (username) => {
        const usernameDoc = doc(db, "usernames", username);
        const usernameSnap = await getDoc(usernameDoc);
        return usernameSnap.exists();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
    
        try {
            const usernameTaken = await isUsernameTaken(username);
            if (usernameTaken) {
                alert("This username is already taken. Please choose a different one.");
                return;
            }
    
            const userCredential = await doCreateUserWithEmailAndPassword(email, password);
            const user = userCredential.user;
            await updateProfile(user, { displayName: username, gender : "" });
    
            await setDoc(doc(db, "usernames", username), { uid: user.uid });

            alert("User signed up successfully");
            navigate("/login");
    
        } catch (error) {
            console.log(error)
            switch (error.code) {
                case 'auth/email-already-in-use':
                    alert("This email address is already in use. Please try logging in or use a different email.");
                    break;
                case 'auth/invalid-email':
                    alert("The email address is not valid. Please enter a valid email.");
                    break;
                case 'auth/operation-not-allowed':
                    alert("Email/Password accounts are not enabled. Please check your Firebase console.");
                    break;
                case 'auth/weak-password':
                    alert("The password is too weak. Please use a stronger password.");
                    break;
                case 'auth/missing-email':
                    alert("Please enter your email address.");
                    break;
                case 'auth/too-many-requests':
                    alert("Too many requests. Please try again later.");
                    break;
                case 'auth/internal-error':
                    alert("An internal error occurred. Please try again.");
                    break;
                case 'auth/username-taken': // Custom error, implement in Firestore
                    alert("This username is already taken. Please choose a different one.");
                    break;
                default:
                    alert("An unexpected error occurred. Please try again.");
                    break;
            }
        }
    };

    return (
        <div className='signupWrapper'>
            <div className='signupContainer'>
                <h2>Create Account</h2>
                <form className="signupForm" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder='Enter User Name'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    /><br />
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
                    <input
                        type="password"
                        placeholder='Confirm Password'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    /><br />
                    <button type="submit">Signup</button>
                </form>
                <p>Already have an account? <span><Link to="/login">Login</Link></span></p>
            </div>
        </div>
    );
}

export default Signup;
