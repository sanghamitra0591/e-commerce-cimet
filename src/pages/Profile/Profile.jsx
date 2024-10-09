import React from 'react'
import "./Profile.css"
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { resetUser } from '../../slice/AuthSlice';

const Profile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            dispatch(resetUser());
            navigate("/login");
        } catch (error) {
            console.error("Logout failed", error);
        }
    };
    return (
        <div className='profileWrapper'>
            <div className='profileImageContainer'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIz4PzBQgV4Wo6K_O28etyENILj2otz-JreA&s" alt="" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOtu74pEiq7ofeQeTsco0migV16zZoBwSlGg&s" alt="" />
            </div>
            <div>
            <button onClick={handleLogout}>Logout</button>
            </div>
        </div>
    )
}

export default Profile
