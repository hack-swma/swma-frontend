import * as style from './index.style';
import { useNavigate } from 'react-router-dom';
import uploadbutton from '../../../../images/Main/uploade.png'
import img from '../../../../images/Main/Group 65.png'
import IPINJ from './ipmodal/index2';
import { useState, useRef } from 'react';
const Render = () => {
    const nav = useNavigate();
    const clear = () => {
        nav('/completesign')
    };
    const gomain = () => {
        nav('/')
    };
    const encodeFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        return new Promise((resolve) => {
            reader.onload = () => {
                setImageSrc(reader.result);
                resolve();
            };
        });
    }
    const [imageSrc, setImageSrc] = useState('https://cdn-icons-png.flaticon.com/512/1250/1250689.png');
    const handleChangeFile = (e) => {
        encodeFile(e.target.files[0]);
    }
    return (
        <style.background>
            <style.loginbox>
                <style.whemanchu>
                    <h1 onClick={gomain}>외만추</h1>
                    <p>당신이 가고 싶은 곳을 원하는 사람을 골라 함께 떠나보세요</p>
                </style.whemanchu>
                <div className='box'>
                    <h1>Welcome to 외만추</h1>
                    <h2>4/4</h2>
                    <h3>마지막 단계!</h3>
                    <button className='inj'><IPINJ /></button>
                    <button className='nextb' onClick={clear}><text>Sign up!</text></button>
                </div>
            </style.loginbox>
        </style.background>
    );
};
export default Render;
