import * as style from './index.style'
import { useNavigate } from 'react-router-dom'
const Render = () => {
    const nav = useNavigate();
    const golog = () => {
        nav('signin');
    }
    const gomain = () => {
        nav('/');
    }
    return (
        <style.background>
            <h1 onClick={gomain}>외만추</h1>
            <h2 onClick={golog}>Log in</h2>
        </style.background>
    )
}
export default Render