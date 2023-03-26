import React, { useRef, useState } from 'react';
import { FirebaseError } from 'firebase/app';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase';
import Cookies from 'universal-cookie';
import '../Pages/Style.scss';
import goku from '../images/naruto.png';

const cookies = new Cookies();

const Signin = ({ setAuth }) => {
    const [display, setDisplay] = useState(false);
    const imgRef = useRef();

    setTimeout(() => {
        setDisplay(true)
    }, 2000);

    const signInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            cookies.set('auth-token', result.user.refreshToken)
            setAuth(true);
        }
        catch (error) {
            console.log("error:", error)
        }
    }

    return (
        <div className='sign-in'>
            <div className="signin-child">
                <p className='title'> Sign In With Google</p>
                <button
                    className="send-button"
                    onClick={signInWithGoogle}>
                    Sign In
                </button>

            </div>

            <div className="absolute-img">
                {display ?
                    <div className='image-parent'>
                        <img id='naruto-image' src={goku} alt="" />
                        <span className='image-child-text'>
                            Welcome to Anime Chat Room
                        </span>
                    </div> : <span></span>
                }
            </div>
        </div>
    );
}

export default Signin;
