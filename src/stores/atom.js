import { atom } from 'recoil'

// Mypage

export let userRegionInfoState = atom({
    key: 'userRegionInfo',
    default: {
        ip: '',
        countryName: '',
        countryCode: '',
        city: '',
        timezone: ''
    }
});
