import * as style from './index.style'
import { useNavigate } from 'react-router-dom'
const Render = () => {
    const nav = useNavigate();
    const golog = () => {
        nav('signin');
    }
    return (
        <style.background>
                <h1 onClick={golog}>Log in</h1>
        </style.background>
    )
}
export default Render