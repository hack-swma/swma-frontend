import * as style from './index.style'
import { useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { isLogginginState, userInfoState } from '../../../stores/atom'
import Logout from './logout'
const Render = () => {
    const [isLoggingin, setIsLoggingin] = useRecoilState(isLogginginState)
    const [userInfo, setUserInfo] = useRecoilState(userInfoState)
    const nav = useNavigate();
    return (
        <style.background>
            <h1 onClick={() => {nav('/')}}>외만추</h1>
            { isLoggingin ? <><Logout/><h2>{userInfo.id}</h2></> : <h2 onClick={() => {nav('signin')}}>Log in</h2> }
        </style.background>
    )
}
export default Render