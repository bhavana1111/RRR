import React from 'react';
import '../App.css';
const buttonClickHandler = () => {
    console.log("Ram")
}
const Buttons = () => {
    return (
        <>
            <button className='character' onClick={buttonClickHandler("Ram")}>Ram</button>
            <button className='character'>All</button>
        </>
    )
}
export default Buttons;