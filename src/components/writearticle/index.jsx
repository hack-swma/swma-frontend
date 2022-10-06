import * as style from './index.style';
import Locationes from '../../images/Lobby/locationIcon.png'
import Person from '../../images/Write/person.png';
import Calender from '../../images/Write/calender.png';
import prof from '../../images/Write/profiles.png'
import { useNavigate } from 'react-router-dom';
const Render = () => {
    const nav = useNavigate();
    return (
        <style.background>
            <style.bigbox>
                <style.littlebox>
                    <h1>글 제목<input placeholder='글 제목을 입력해주세요'></input></h1>
                    <img src={Locationes} className='locate' /><input className='insertplace' placeholder='장소 입력'></input>
                    <img src={Person} className='persone' /><input className='num' placeholder='인원수 입력'></input>
                    <img src={Calender} className='cal' /><input type="date" className='wow'/>
                    <div className='lined' />
                    <style.textfield>
                        <h1>내용</h1>
                        <input type="text" />
                    </style.textfield>
                    <button className='comp'><text>글 작성 완료</text></button>
                </style.littlebox>
            </style.bigbox>
        </style.background>
    );
}
export default Render;