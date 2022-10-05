import Main from '../components/Main/index'
import Notfound from '../components/Notfound/index'
import Mypage from '../components/Mypage/index'
import Signin from '../components/Auth/Signin/index'
import Signup from '../components/Auth/Signup/index'

export default [
    { path: '', component: <Main/>, nav: true, footer: true },
    { path: '*', component: <Notfound/>, nav: false, footer: false },
    { path: '/mypage', component: <Mypage/>, nav: true, footer: true },
    { path: '/signin', component: <Signin/>, nav: false, footer: false },
    { path: '/signup', component: <Signup/>, nav: false, footer: false },
]
