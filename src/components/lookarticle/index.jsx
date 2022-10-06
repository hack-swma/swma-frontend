import * as style from './index.style';
import Locationes from '../../images/Lobby/locationIcon.png'
import Person from '../../images/Write/person.png';
import Calender from '../../images/Write/calender.png';
import prof from '../../images/Write/profiles.png'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { boardIdState } from '../../stores/atom';
import { useEffect, useState } from 'react';
import Image from '../../images/Main/basicProfileImage.png'
const Render = () => {
    const [boardId, setBoardId] = useRecoilState(boardIdState)
    const [data, setData] = useState('')
    const nav = useNavigate();
    const goprof = () => {
        nav('/profile')
    }
    useEffect(() => {
        axios.get(`post/${localStorage.getItem('boardId')}`, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        }).then((res) => {
            console.log(res)
            setData(res.data)
        }).catch((err) => {
            console.log(err)
        })
    })
    return(
        <style.background>
            <style.bigbox>
                <style.littlebox>
                    <h1>{data.title}</h1>
                    <img src={Locationes} className='locate'/><h3 className='place'>{data.live}</h3>
                    <img src={Person} className='persone'/><h3 className='num'>{data.member}명</h3>
                    <img src={Calender} className='cal' /><h3 className='calen'>{data.date}</h3>
                    <div className='lined'/>
                    <style.writer>
                        <h2>{data.name}</h2>
                        <img src={Image} onClick={goprof}></img>
                    </style.writer>
                    <style.textfield>
                        {data.content}
                    </style.textfield>
                    <button className='letchat'><text>대화하기</text></button>
                </style.littlebox>
            </style.bigbox>
        </style.background>
    );
}
export default Render;