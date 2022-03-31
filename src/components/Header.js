import React, { useState } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
//import ReactHowler from 'react-howler';
const Header = () => {
    const [text, setText] = useState("");
    const [isPlaying, setISPlaying] = useState(false);
    let audio1 = new Audio("../song.mp3")
    const R1 = () => {
        setText('Rise');
        isPlaying === true ? audio1.play() : audio1.pause();
        setISPlaying(!isPlaying);
        console.log(isPlaying);

    }
    const R2 = () => {
        setText('Roar');
        return (<p>Fire</p>)
    }
    const R3 = () => {
        setText('Revolt');
    }
    return (
        <header className='header'>
            <button className='R' onClick={R1}>R</button>
            <button className='R' onClick={R2}>R</button>
            <button className='R' onClick={R3}>R</button>
            <p className='header__text'>{text}</p>
        </header>
    )
}

export default Header