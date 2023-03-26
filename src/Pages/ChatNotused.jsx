import { addDoc, collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import React, { useState, useEffect, useRef } from 'react';
import { db } from '../firebase';

const Room = ({ setRoom, room }) => {

    // const [roomArray, setRoomArray] = useState([]);
    // const [roomValue, setRoomValue] = useState('');
    // const refRoom = useRef();


    // const roomfirebaseRef = collection(db, "room");


    // useEffect(() => {
    //     const queryRoom = query(roomfirebaseRef, orderBy("createdAt", 'asc')
    //     );

    //     const unsuscribe = onSnapshot(queryRoom, (snapshot) => {
    //         let messages = [];
    //         snapshot.forEach((doc) => {
    //             messages.push({ ...doc.data(), id: doc.id });
    //             console.log(doc.data())
    //         });
    //         setRoomArray(messages);

    //     });

    //     return () => unsuscribe();
    // }, []);


    // const handleSubmit = async (event) => {
    //     event.preventDefault();

    //     if (roomValue === "") return;
    //     await addDoc(roomfirebaseRef, {
    //         room: roomValue,
    //     });
    //     setRoom(refRoom.current.value);
    // };


    return (
        <div className='room'>
            <form className='room-form'
            // onSubmit={handleSubmit}
            >
                <label htmlFor='Room-name'>Enter Room name</label>
                <input type='text' name='Room-name'
                    // id='Room-name' onKeyDown={e => {
                    //     if (e === '') return
                    // }}
                    // onChange={(event) => setRoomValue(event.target.value)}
                    // value={roomValue}
                    className="new-room-input"
                    // ref={refRoom}
                     />
                <button className='Room-btn'>Enter Room</button>
            </form>

        </div>
    );
}

export default Room;
