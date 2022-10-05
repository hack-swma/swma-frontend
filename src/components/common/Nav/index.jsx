import * as style from './index.style'
import { Link } from 'react-router-dom'
const Render = () => {
    return (
        <style.background>
            <Link to='signin'>
                <h1>Log in</h1>
            </Link>
        </style.background>
    )
}
export default Render