import * as style from './index.style';
import { useNavigate } from 'react-router-dom';
const Render = () => {
    const nav = useNavigate();
    const fourthsign = () => {
        nav('/signup4')
    };
    return (
        <style.background>
            <style.loginbox>
                <style.whemanchu>
                    <h1>외만추</h1>
                    <p>당신이 가고 싶은 곳을 원하는 사람을 골라 함께 떠나보세요</p>
                </style.whemanchu>
                <h1>Welcome to 외만추</h1>
            </style.loginbox>
        </style.background>
    );
};
export default Render;
