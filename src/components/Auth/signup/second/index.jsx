import * as style from './index.style';

import { useRecoilState } from 'recoil';
import { nameState, birthinfoState, sexState, conState, regionState } from '../../../../stores/atom';

import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Render = () => {
    const [name, setName] = useRecoilState(nameState)
    const [birthinfo, setBirthinfo] = useRecoilState(birthinfoState)
    const [sex, setSex] = useRecoilState(sexState)
    const [country, setCountry] = useRecoilState(conState)
    const [region, setRegion] = useRecoilState(regionState)
    useEffect(() => {
        setName('')
        setBirthinfo('')
        setSex('')
        setRegion('')
    }, [])
    const L_LIST = [
        { id: 0, data: '한국어', datas: 'KOREAN' },
        { id: 1, data: '일본어', datas: 'JAPANESE' },
        { id: 2, data: '중국어', datas: 'CHINESE' },
        { id: 3, data: '불어', datas: 'FRENCH' },
        { id: 4, data: '영어', datas: 'ENGLISH' },
        { id: 5, data: '독일어', datas: 'GERMAN' },
    ]
    const nav = useNavigate();
    const thirdsign = () => {
        nav('/signup3')
    };
    const gomain = () => {
        nav('/')
    };
    const [checkedList, setCheckedList] = useState([]);
    const onCheckedElement = (checked, item) => {
        if (checked) {
            setCheckedList([...checkedList, item]);
        } else if (!checked) {
            setCheckedList(checkedList.filter(el => el !== item));
        }
    };
    const male = () => {
        setSex('MALE');
    }
    const female = () => {
        setSex('FEMALE');
    }
    const regionchange = () => {
    }
    console.log(checkedList)
    return (
        <style.background>
            <style.loginbox>
                <style.whemanchu>
                    <h1 onClick={gomain}>외만추</h1>
                    <p>당신이 가고 싶은 곳을 원하는 사람을 골라 함께 떠나보세요</p>
                </style.whemanchu>
                <div className='box'>
                    <h1>Welcome to 외만추</h1>
                    <h2>2/4</h2>
                    <p className='name'>이름</p>
                    <input className='named' placeholder='ex) 외만추' value={name} onChange={(e) => { setName(e.target.value) }} />
                    <p className='birthday'>생년월일</p>
                    <input className='birthdaye' placeholder='ex) 20000103' value={birthinfo} onChange={(e) => { setBirthinfo(e.target.value) }} />
                    <p className='gender'>성별</p>
                    <div className='gendered'>
                        <label className='genderone'>
                            <input type="radio" name='gendering' value="MALE" onClick={male} />
                            <span>남</span>
                        </label>
                        <label className='gendertwo'>
                            <input type="radio" name='gendering' value="FEMALE" onClick={female} />
                            <span>여</span>
                        </label>
                    </div>
                    <p className='language'>사용가능 언어</p>
                    <div className='checkboxes'>
                        {L_LIST.map(item => {
                            return (
                                <label key={item.id}>
                                    <input
                                        type="checkbox"
                                        value={item.datas}
                                        onChange={e => {
                                            onCheckedElement(e.target.checked, e.target.value);
                                        }}
                                        checked={checkedList.includes(item.datas) ? true : false}
                                    />
                                    <text>{item.data}</text>
                                </label>
                            );
                        })}
                    </div>
                    <p className='region'>지역</p>
                    <input type="text" placeholder='지역입력' className='selectc' onChange={e => {
                        regionchange(e);
                    }}/>
                    <button className='nextb' onClick={thirdsign}><text>Next →</text></button>
                </div>
            </style.loginbox>
        </style.background>
    );
};
export default Render;
