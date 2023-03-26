import React, { useState } from 'react';
import './Style.scss';
import EmojiPicker from "emoji-picker-react";
import { MdOutlineEmojiEmotions } from 'react-icons/md';

const Emoji = () => {
    const [emojiState, setEmojiState] = useState(true);

    const handleClick = () => {
        setEmojiState(emojiState ? false : true)

    }

    return (
        <div className='emoji-parent'>
            <div className='emoji-child'>
                <MdOutlineEmojiEmotions onClick={handleClick}
                    className='emoji-sticker' />
                <div className="emoji-picker">
                    <EmojiPicker
                        className={emojiState ? 'emoji-none' : "emoji"}
                    // value={newMessage}
                    // onChange={(event) => setNewMessage(event.target.value)}
                    />
                </div>
            </div>
        </div>
    );
}

export default Emoji;
