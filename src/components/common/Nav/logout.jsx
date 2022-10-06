import axios from "axios"
import * as style from './index.style'
import { useRecoilState } from "recoil"
import { isLogginginState } from "../../../stores/atom"

const Render = () => {
    const [isLoggingin, setIsLoggingin] = useRecoilState(isLogginginState)
    const logoutProcess = () => {
        axios.delete('account', {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        }).then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        }).then(() => {
            setIsLoggingin(false)
        })
    }
    return (
        <style.normalText onClick={logoutProcess}>로그아웃</style.normalText>
    )
}
export default Render