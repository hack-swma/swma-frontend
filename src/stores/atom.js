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
export let descriptionState = atom({
    key: 'description',
    default: ''
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
