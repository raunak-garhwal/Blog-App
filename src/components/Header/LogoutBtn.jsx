import React from 'react'
import { useDispatch } from 'react-redux';
import authService from '../../appwrite/auth';
import { logout } from '../../store/authSlice';

function LogoutBtn() {
    const dispatch = useDispatch();
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout());
        })
    }

    return (
        <button 
        className='inline-block text-lg font-sans font-semibold px-5 py-2 duration-200 hover:bg-gray-800 rounded-full'
        onClick={logoutHandler}>
            Logout
        </button>  )
}

export default LogoutBtn;