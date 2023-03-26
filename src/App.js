import React, { useState, useRef } from 'react';
import './App.scss';
import Chat from './Pages/Chat';
import Signin from './Pages/Signin';
import SignOut from './Pages/SignOut';
import { auth as auther } from './firebase';
import { signOut } from 'firebase/auth';
import Cookies from 'universal-cookie';
import Room from './Pages/Room';
const cookies = new Cookies();

function App() {

  const [room, setRoom] = useState(null);
  const [auth, setAuth] = useState(cookies.get('auth-token'));

  const signOutbtn = async () => {
    console.log('signout')
    await signOut(auther);
    cookies.remove('auth-token');
    setAuth(false);
    setRoom(null);
  }

  if (!auth) {
    return (
      <div className="App">
        <Signin setAuth={setAuth} />
      </div>
    );
  }
  return (
    <div className='chat-bg'>
      <div className='wrapper'>
        {
          room ? <div><Chat room={room} /></div> :
            <Room room={room} setRoom={setRoom} />
        }
        <SignOut signOutbtn={signOutbtn} />
      </div>
    </div>
  )
}

export default App;
