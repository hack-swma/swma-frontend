import * as style from './index.style';

import { useRecoilState } from 'recoil';
import { descriptionState } from '../../../../stores/atom';

import { useNavigate } from 'react-router-dom';
import uploadbutton from '../../../../images/Main/uploade.png'
import img from '../../../../images/Main/basicProfileImage.png'
import { useState, useRef, useEffect } from 'react';
const Render = () => {
    const nav = useNavigate();
    const fourthsign = () => {
        nav('/signup4')
    };
    const gomain = () => {
        nav('/')
    };
    const encodeFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        return new Promise((resolve) => {
            reader.onload = () => {
                setImageSrc(reader.result);
                resolve();
            };
        });
    }
    const [imageSrc, setImageSrc] = useState('https://cdn-icons-png.flaticon.com/512/1250/1250689.png');
    const [description, setDescription] = useRecoilState(descriptionState)
    const handleChangeFile = (e) => {
        encodeFile(e.target.files[0]);
    }
    useEffect(() => {
        setDescription('')
    }, [])

    return (
        <style.background>
            <style.loginbox>
                <style.whemanchu>
                    <h1 onClick={gomain}>외만추</h1>
                    <p>당신이 가고 싶은 곳을 원하는 사람을 골라 함께 떠나보세요</p>
                </style.whemanchu>
                <div className='box'>
                <h1>Welcome to 외만추</h1>
                <h2>3/4</h2>
                <p className='profile'>프로필 사진</p>
                <div class="filebox">
                    <div className='pro'>
                        {imageSrc && <img src={imageSrc} alt="preview-img" />}
                    </div>
                    <label for="file">파일 선택</label>
                    <input type="file" id="file" onChange={handleChangeFile} multiple="multiple" />
                </div>
                <p className='ment'>자기소개</p>
                <input type="text" className='textareas' placeholder='자기소개를 입력해주세요 (20자 ~ 500자)' value={description} onChange={(e) => {setDescription(e.target.value)}}/>
                <button className='nextb' onClick={fourthsign}><text>Next →</text></button>
                </div>
            </style.loginbox>
        </style.background>
    );
};
export default Render;
