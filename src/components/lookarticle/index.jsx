import * as style from './index.style';
import Locationes from '../../images/Lobby/locationIcon.png'
import Person from '../../images/Write/person.png';
import Calender from '../../images/Write/calender.png';
import prof from '../../images/Write/profiles.png'
import { useNavigate } from 'react-router-dom';
const Render = () => {
    const title = '저랑 오늘 시애틀에서 노실 분';
    const insert = '심심한데 오늘 저랑 12시 ~ 6시에 시애틀 국밥집 앞에서 만나서 국밥 한그릇 조지고 같이 노래방 때릴 분 연락주세요';
    const numbers = 3;
    const Month = '10';
    const Day = '06';
    const nav = useNavigate();
    const goprof = () => {
        nav('/profile')
    }
    return(
        <style.background>
            <style.bigbox>
                <style.littlebox>
                    <h1>{title}</h1>
                    <img src={Locationes} className='locate'/><h3 className='place'>시애틀 국밥집</h3>
                    <img src={Person} className='persone'/><h3 className='num'>{numbers}명</h3>
                    <img src={Calender} className='cal' /><h3 className='calen'>{Month}-{Day}</h3>
                    <div className='lined'/>
                    <style.writer>
                        <h2>작성자</h2>
                        <img src={prof} onClick={goprof}></img>
                    </style.writer>
                    <style.textfield>
                        {insert}
                    </style.textfield>
                    <button className='letchat'><text>대화하기</text></button>
                </style.littlebox>
            </style.bigbox>
        </style.background>
    );
}
export default Render;