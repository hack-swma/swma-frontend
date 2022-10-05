import Main from '../components/Main/index'
import Mypage from '../components/Mypage/index'
import Signin from '../components/Auth/Signin/index'
import Signup from '../components/Auth/Signup/index'

export default [
    { path: '*', component: <Main/> },
    { path: '/mypage', component: <Mypage/> },
    { path: '/signin', component: <Signin/> },
    { path: '/signup', component: <Signup/> },
]