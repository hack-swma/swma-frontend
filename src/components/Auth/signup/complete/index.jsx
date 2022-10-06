import * as style from './index.style';
import { useNavigate } from 'react-router-dom';
const Render = () => {
    const nav = useNavigate();
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
                    <h1 className='co'>축하드립니다!</h1>
                    <h1 className='me'>회원가입에 성공하셨습니다!</h1>
                    <button className='nextb' onClick={gomain}><text>메인화면으로</text></button>
                </div>
            </style.loginbox>
        </style.background>
    );
};
export default Render;
