import * as style from './index.style';

import axios from 'axios'

import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil'
import { idState, passwordState, checkingPasswordState, nameState, birthinfoState, sexState, descriptionState, countryState, regionState, languageState } from '../../../../stores/atom'

import uploadbutton from '../../../../images/Main/uploade.png'
import img from '../../../../images/Main/Group 65.png'
import IPINJ from './ipmodal/index2';
const Render = () => {
    const [id, setId] = useRecoilState(idState)
    const [password, setPassword] = useRecoilState(passwordState)
    const [checkingPassword, setCheckingPassword] = useRecoilState(checkingPasswordState)
    const [name, setName] = useRecoilState(nameState)
    const [birthinfo, setBirthinfo] = useRecoilState(birthinfoState)
    const [sex, setSex] = useRecoilState(sexState)
    const [description, setDescription] = useRecoilState(descriptionState)
    const [region, setRegion] = useRecoilState(regionState)
    const [country, setCountry] = useRecoilState(countryState)
    const [languages, setLanguages] = useRecoilState(languageState)

    const getUserRegionInfo = () => {
        axios.get("https://ipapi.co/json/").then((response) => {
            const data = response.data;
            setCountry(data.country_name);
        }).catch((error) => {
            console.log(error);
        });
    };

    const nav = useNavigate();
    const register = () => {
        const data = {
            id: id,
            password: password,
            name: name,
            year: birthinfo.slice(0, 4) * 1,
            month: birthinfo.slice(4, 6) * 1,
            day: birthinfo.slice(6, 8) * 1,
            sex: sex,
            img: 'https://www.naver.com',
            description: description,
            language: languages,
            country: country,
            region: region
        }
        console.log(data)
        axios.post('account/signup', data).then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })
    }
    const clear = () => {
        register()
        nav('/completesign')
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
    const handleChangeFile = (e) => {
        encodeFile(e.target.files[0]);
    }
    return (
        <style.background>
            <style.loginbox>
                <style.whemanchu>
                    <h1 onClick={gomain}>외만추</h1>
                    <p>당신이 가고 싶은 곳을 원하는 사람을 골라 함께 떠나보세요</p>
                </style.whemanchu>
                <div className='box'>
                    <h1>Welcome to 외만추</h1>
                    <h2>4/4</h2>
                    <h3>마지막 단계!</h3>
                    <button className='inj' onClick={getUserRegionInfo}><IPINJ/></button>
                    <button className='nextb' onClick={clear}><text>Sign up!</text></button>
                </div>
            </style.loginbox>
        </style.background>
    );
};
export default Render;
