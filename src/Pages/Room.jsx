import React, { useState, useEffect, useRef } from 'react';

const Room = ({ setRoom, room }) => {

    const refRoom = useRef();

    return (
        <div className='room'>
            <form className='room-form' onSubmit={(e) => {
                e.preventDefault();
                setRoom(refRoom.current.value);
            }}>
                <label htmlFor='Room-name ' className='title'>Enter Room name</label>
                <input type='text' name='Room-name' id='Room-name' onKeyDown={e => {
                    if (e === '') return
                }}
                    className="new-room-input"
                    ref={refRoom} />
                <button className='Room-btn'>Enter Room</button>
            </form>


            <div className="room-list">

            </div>
        </div>
    );
}

export default Room;
