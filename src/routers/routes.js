import Main from '../components/Main/index'
import Mypage from '../components/Mypage/index'

export default [
    { path: '*', component: <Main/> },
    { path: '/mypage', component: <Mypage/> }
]