import Main from '../components/Main/index'
import Notfound from '../components/Notfound/index'
import Mypage from '../components/Mypage/index'
import Signin from '../components/Auth/signin/index'
import Signup from '../components/Auth/signup/first/index'
import SecondSignup from '../components/Auth/signup/second/index'
import ThirdSignup from '../components/Auth/signup/third/index';
import FourthSignup from '../components/Auth/signup/fourth/index'
import CompleteSignup from '../components/Auth/signup/complete/index';
import Lobby from '../components/Lobby/index'
import Profile from '../components/Profile/index'
import Write from '../components/writearticle/index'

export default [
    { path: '', component: <Main/>, nav: true, footer: true },
    { path: '*', component: <Notfound/>, nav: false, footer: false },
    { path: '/mypage', component: <Mypage/>, nav: true, footer: true },
    { path: '/signin', component: <Signin/>, nav: false, footer: false },
    { path: '/signup', component: <Signup/>, nav: false, footer: false },
    { path: '/signup2', component: <SecondSignup />, nav: false, footer: false},
    { path: '/signup3', component: <ThirdSignup />, nav: false, footer: false},
    { path: '/signup4', component: <FourthSignup />, nav: false, footer: false},
    { path: '/completesign', component: <CompleteSignup />, nav: false, footer: false},
    { path: '/lobby', component: <Lobby/>, nav: true, footer: true },
    { path: '/profile', component: <Profile/>, nav: true, footer: true },
    { path: '/write', component: <Write />, nav: true, footer: true},
]
