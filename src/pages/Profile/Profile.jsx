import React, { useState } from 'react';
import "./Profile.css";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { resetUser } from '../../slice/AuthSlice';
import { auth, db } from '../../firebase/firebase-config'; 
import { doc, setDoc } from "firebase/firestore"; 
import { sendPasswordResetEmail } from 'firebase/auth';

const Profile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { currentUser } = useSelector(state => state.auth);
    const [gender, setGender] = useState(currentUser.gender || '');
    const [email, setEmail] = useState(currentUser.email || '');
    const [isEditing, setIsEditing] = useState(false);
    const [initialValues, setInitialValues] = useState({
        gender: currentUser.gender || '',
        email: currentUser.email || ''
    });

    const handleLogout = async () => {
        try {
            dispatch(resetUser());
            navigate("/login");
        } catch (error) {
            console.error("Logout failed", error);
        }
    };

    const handleEdit = () => {
        setInitialValues({
            gender,
            email
        });
        setIsEditing(true);
    };

    const handleUpdateChanges = async () => {
        const userDocRef = doc(db, "usernames", currentUser.displayName); // Assuming displayName is the username
        try {
            await setDoc(userDocRef, { gender, email }, { merge: true });
            alert("Changes updated successfully");
            setIsEditing(false); // Exit editing mode
        } catch (error) {
            console.error("Error updating changes: ", error);
        }
    };

    const handleUndoChanges = () => {
        setGender(initialValues.gender);
        setEmail(initialValues.email);
        setIsEditing(false);
    };

    const handlePasswordReset = async () => {
        if (!email) {
            alert("Please enter your email to reset the password.");
            return;
        }
        try {
            await sendPasswordResetEmail(auth, email);
            alert("Password reset email sent!");
        } catch (error) {
            console.error("Error sending password reset email: ", error);
            alert("Failed to send password reset email. Please check your email address.");
        }
    };

    return (
        <div className='profileWrapper'>
            <div className='profileImageContainer'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIz4PzBQgV4Wo6K_O28etyENILj2otz-JreA&s" alt="" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOtu74pEiq7ofeQeTsco0migV16zZoBwSlGg&s" alt="" />
            </div>
            <div>
                <h2>User Profile</h2>
                <div>
                    <label>Username:</label>
                    <input type="text" value={currentUser.displayName} readOnly />
                </div>
                <div>
                    <label>Email:</label>
                    <input 
                        type="email" 
                        value={email} 
                        readOnly={!isEditing} 
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                </div>
                <div>
                    <label>Gender:</label>
                    <select
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        disabled={!isEditing}
                    >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                {isEditing ? (
                    <div>
                        <button onClick={handleUpdateChanges}>Update Changes</button>
                        <button onClick={handleUndoChanges}>Undo Changes</button>
                    </div>
                ) : (
                    <button onClick={handleEdit}>Edit</button>
                )}
                <button onClick={handlePasswordReset}>Reset Password</button>
                <div>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            </div>
        </div>
    );
}

export default Profile;


































































// import React from 'react'
// import "./Profile.css"
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { resetUser } from '../../slice/AuthSlice';

// const Profile = () => {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const { currentUser } = useSelector(state=>state.auth);
//     console.log(currentUser)

//     const handleLogout = async () => {
//         try {
//             dispatch(resetUser());
//             navigate("/login");
//         } catch (error) {
//             console.error("Logout failed", error);
//         }
//     };
//     return (
//         <div className='profileWrapper'>
//             <div className='profileImageContainer'>
//                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIz4PzBQgV4Wo6K_O28etyENILj2otz-JreA&s" alt="" />
//                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOtu74pEiq7ofeQeTsco0migV16zZoBwSlGg&s" alt="" />
//             </div>
//             <div>
//             <button onClick={handleLogout}>Logout</button>
//             </div>
//         </div>
//     )
// }

// export default Profile
