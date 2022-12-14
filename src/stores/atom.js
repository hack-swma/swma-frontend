import basicProfileImage from '../images/Main/basicProfileImage.png'
import { atom } from 'recoil'

// Auth

export let idState = atom({
    key: 'id',
    default: ''
})
export let passwordState = atom({
    key: 'password',
    default: ''
})
export let checkingPasswordState = atom({
    key: 'checkingPassword',
    default: ''
})
export let nameState = atom({
    key: 'name',
    default: ''
})
export let birthinfoState = atom({
    key: 'birthinfo',
    default: ''
})
export let sexState = atom({
    key: 'sex',
    default: ''
})
export let languageState = atom({
    key: 'language',
    default: []
})
export let descriptionState = atom({
    key: 'description',
    default: ''
})
export let regionState = atom({
    key: 'region',
    default: ''
})
export let countryState = atom({
    key: 'country',
    default: ''
})

// GlobalState
export let isLogginginState = atom({
    key: 'isLoggingin',
    default: false
})
export let userInfoState = atom({
    key: 'userInfo',
    default: {
        id: '',
        profileImage: basicProfileImage,
    }
})

// board
export let boardIdState = atom({
    key: 'boardId',
    default: 0
})



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
