import React from 'react';
import './Style.scss';
import { FaSignOutAlt } from 'react-icons/fa';

const SignOut = ({signOutbtn}) => {
    return (
        <div className='button-parent'>
            <button className='send-button' onClick={signOutbtn}> <FaSignOutAlt /> Signout</button>
        </div>
    );
}

export default SignOut;
