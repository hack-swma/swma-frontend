import * as style from './index.style';
import { useState, useEffect } from 'react'
import { isLogginginState, userInfoState } from '../../../stores/atom';

import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useRecoilState } from 'recoil';
const Render = () => {
    const [id, setId] = useState('')
    const [pw, setPw] = useState('')
    const [isLoggingin, setIsLoggingin] = useRecoilState(isLogginginState)
    const [userInfo, setUserInfo] = useRecoilState(userInfoState)
    const nav = useNavigate();
    const gosignup = () => {
        nav('/signup');
    }
    const loginProcess = () => {
        axios.post('account', {
            id: id,
            password: pw
        }).then((res) => {
            localStorage.setItem('token', res.data.accessToken)
            setIsLoggingin(true)
            setUserInfo({
                ...userInfo,
                id: id
            })
        }).catch((err) => {
            console.log(err)
        })
        nav('/');
    }
    return (
        <style.background>
            <style.loginbox>
                <style.whemanchu>
                    <h1 onClick={() => {nav('/')}}>외만추</h1>
                    <p>당신이 가고 싶은 곳을 원하는 사람을 골라 함께 떠나보세요</p>
                </style.whemanchu>
                <div className='box'>
                    <h1>Welcome to 외만추</h1>
                    <p className='idp'>ID</p>
                    <input className='id' placeholder='아이디를 입력해주세요' value={id} onChange={(e) => {setId(e.target.value)}}/>
                    <p className='pwp'>PASSWORD</p>
                    <input className='pw' type='password' placeholder='비밀번호를 입력해주세요' value={pw} onChange={(e) => {setPw(e.target.value)}}/>
                    <button className='log' onClick={loginProcess}><text>LOG IN</text></button>
                    <button className='sign' onClick={gosignup}><text>SIGN UP</text></button>
                </div>
            </style.loginbox>
        </style.background>
    );
};
export default Render;
