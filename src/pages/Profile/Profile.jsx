import React, { useEffect, useState } from 'react';
import "./Profile.css";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { resetUser, updateGender } from '../../slice/AuthSlice';
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
        const userDocRef = doc(db, "usernames", currentUser.displayName);
        try {
            await setDoc(userDocRef, { gender, email }, { merge: true });
            dispatch(updateGender({
                gender
            }));
            alert("Changes updated successfully");
            setIsEditing(false);
        } catch (error) {
            console.log({ error })
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
                {gender == "Male" && <img src="https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-cartoon-man-avatar-with-beard-vector-ilustration-png-image_6110777.png" />}
                {gender == "Female" && <img src="https://cdn-icons-png.flaticon.com/512/6997/6997662.png" alt="userAvatar" />}
                {gender == "Other" && <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOtu74pEiq7ofeQeTsco0migV16zZoBwSlGg&s" alt="userAvatar" />}
                {gender == ""&& <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOtu74pEiq7ofeQeTsco0migV16zZoBwSlGg&s" alt="userAvatar" />}
            </div>
            <div className='profileDetailsContainer'>
                <h2>Hello {currentUser.displayName}!</h2>
                <div className='userNameContainer'>
                    <label>Username:</label>
                    <input type="text" value={currentUser.displayName} readOnly />
                </div>
                <div className='emailContainer'>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        readOnly
                        // readOnly={!isEditing} 
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button onClick={handlePasswordReset}>Reset Password</button>
                </div>
                <div className='genderContainer'>
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
                    {isEditing ? (
                        <div className='updateChangesButtonContainer'>
                            <button onClick={handleUpdateChanges}>Update</button>
                            <button onClick={handleUndoChanges}>Undo</button>
                        </div>
                    ) : (
                        <button onClick={handleEdit}>Edit</button>
                    )}
                </div>
                <div className='logoutButtonConatiner'>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            </div>
        </div>
    );
}

export default Profile;