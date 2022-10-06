import * as style from './index.style';

import { useRecoilState } from 'recoil';
import { idState, passwordState, checkingPasswordState } from '../../../../stores/atom';

import axios from 'axios'

import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Render = () => {
    const [id, setId] = useRecoilState(idState)
    const [password, setPassword] = useRecoilState(passwordState)
    const [checkingPassword, setCheckingPassword] = useRecoilState(checkingPasswordState)
    
    useEffect(() => {
        setId('')
        setPassword('')
        setCheckingPassword('')
    }, [])

    
    const nav = useNavigate();
    const secondsign = () => {
        nav('/signup2')
    };
    const gomain = () => {
        nav('/')
    };
    return (
        <style.background>
            <style.loginbox>
                <style.whemanchu>
                    <h1 onClick={gomain}>외만추</h1>
                    <p>당신이 가고 싶은 곳을 원하는 사람을 골라 함께 떠나보세요</p>
                </style.whemanchu>
                <div className='box'>
                    <h1>Welcome to 외만추</h1>
                    <h2>1/4</h2>
                        <p className='idp'>ID</p>
                        <input className='id' placeholder='아이디를 입력해주세요' value={id} onChange={(e) => {setId(e.target.value)}}/>
                        <button><text>중복확인</text></button>
                        <p className='pwp'>PASSWORD</p>
                        <input className='pw' type='password' placeholder='비밀번호를 입력해주세요' value={password} onChange={(e) => {setPassword(e.target.value)}}/>
                        <p className='pwp'>PASSWORD CHECK</p>
                        <input className='pwc' type='password' placeholder='비밀번호 확인' value={checkingPassword} onChange={(e) => {setCheckingPassword(e.target.value)}}/>
                        <button className='nextb' onClick={secondsign}>
                            <text>Next →</text>
                        </button>
                </div>
            </style.loginbox>
        </style.background>
    );
};
export default Render;
