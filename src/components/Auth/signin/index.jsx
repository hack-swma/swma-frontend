import * as style from './index.style';
import { useNavigate } from 'react-router-dom';
const Render = () => {
    const nav = useNavigate();
    const gosignup = () => {
        nav('/signup');
    }
    const gomain = () => {
        nav('/');
    }
    return (
        <style.background>
            <style.loginbox>
                <style.whemanchu>
                    <h1 onClick={gomain}>외만추</h1>
                    <p>당신이 가고 싶은 곳을 원하는 사람을 골라 함께 떠나보세요</p>
                </style.whemanchu>
                <h1>Welcome to 외만추</h1>
                <p className='idp'>ID</p>
                <input className='id' placeholder='아이디를 입력해주세요' />
                <p className='pwp'>PASSWORD</p>
                <input className='pw' placeholder='비밀번호를 입력해주세요' />
                <button className='log' onClick={gomain}><text>LOG IN</text></button>
                <button className='sign' onClick={gosignup}><text>SIGN UP</text></button>
            </style.loginbox>
        </style.background>
    );
};
export default Render;
