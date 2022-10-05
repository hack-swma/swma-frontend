import * as style from './index.style';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Render = () => {
    const L_LIST = [
        { id: 0, data: '한국어' },
        { id: 1, data: '일본어' },
        { id: 2, data: '중국어' },
        { id: 3, data: '불어' },
        { id: 4, data: '영어' },
        { id: 5, data: '독일어' },
    ]
    const nav = useNavigate();
    const thirdsign = () => {
        nav('/signup3')
    };
    const [checkedList, setCheckedList] = useState([]);
    const onCheckedElement = (checked, item) => {
        if (checked) {
            setCheckedList([...checkedList, item]);
        } else if (!checked) {
            setCheckedList(checkedList.filter(el => el !== item));
        }
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
