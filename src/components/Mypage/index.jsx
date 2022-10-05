import { useState, useEffect } from 'react';

import { useRecoilState } from 'recoil'
import { userRegionInfoState } from '../../stores/atom';

import * as style from './index.style';
import axios from 'axios'

const Render = () => {
    const [userRegionInfo, setUserRegionInfo] = useRecoilState(userRegionInfoState);
    // function of getting User Region Info
    const getUserRegionInfo = () => {
        axios.get("https://ipapi.co/json/").then((response) => {
            const data = response.data;
            setUserRegionInfo({
                ...userRegionInfo,
                ip: data.ip,
                countryName: data.country_name,
                countryCode: data.country_calling_code,
                city: data.city,
                timezone: data.timezone
            });
        }).catch((error) => {
            console.log(error);
        });
    };
    // processing getUserGeonationInfo
    useEffect(() => {
        getUserRegionInfo();
    }, []);
    // returning part
    return (
        <style.background>
            <span>{userRegionInfo.countryCode}</span>&nbsp;
            <span>{userRegionInfo.countryName}</span>&nbsp;
            <span>{userRegionInfo.ip}</span>&nbsp;
            <span>{userRegionInfo.city}</span>&nbsp;
            <span>{userRegionInfo.timezone}</span>&nbsp;
        </style.background>
    );
};
export default Render;