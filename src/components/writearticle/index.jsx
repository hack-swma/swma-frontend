import * as style from './index.style';
import Locationes from '../../images/Lobby/locationIcon.png'
import Person from '../../images/Write/person.png';
import Calender from '../../images/Write/calender.png';
import prof from '../../images/Write/profiles.png'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
const Render = () => {
    const nav = useNavigate();
    const [title, setTitle] = useState('')
    const [location, setLocation] = useState('')
    const [content, setContent] = useState('')
    const [member, setMember] = useState(0)
    const [date, setDate] = useState('')
    const Writing = () => {
        axios.post('post', {
            title: title,
            content: content,
            member: member * 1,
            startDate: date,
            endDate: date
        }, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        }).then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })
    }
    return (
        <style.background>
            <style.bigbox>
                <style.littlebox>
                    <h1>글 제목<input placeholder='글 제목을 입력해주세요' value={title} onChange={(e) => {setTitle(e.target.value)}}></input></h1>
                    <img src={Locationes} className='locate' /><input className='insertplace' placeholder='장소 입력' value={location} onChange={(e) => {setLocation(e.target.value)}}></input>
                    <img src={Person} className='persone' /><input className='num' placeholder='인원수 입력' value={member} onChange={(e) => {setMember(e.target.value)}}></input>
                    <img src={Calender} className='cal' /><input type="date" className='wow' value={date} onChange={(e) => {setDate(e.target.value)}}/>
                    <div className='lined' />
                    <style.textfield value={content} onChange={(e) => {setContent(e.target.value)}}>
                        <h1>내용</h1>
                        <input type="text" />
                    </style.textfield>
                    <button className='comp' onClick={Writing}><text>글 작성 완료</text></button>
                </style.littlebox>
            </style.bigbox>
        </style.background>
    );
}
export default Render;