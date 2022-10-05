import routes from './routes'
import { useState, useLayoutEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

import Nav from '../components/common/Nav/index'
import Footer from '../components/common/Footer/index'

const Router = () => {
    const location = useLocation();
    const [renderInfo, setRenderInfo] = useState({
        nav: false,
        footer: false
    })
    useLayoutEffect((element) => {
        let temp = routes.find(element => element.path === location.pathname.split('/')[1])
        if (temp === undefined) {
            temp = routes.find(element => element.path === '*')
        }
        setRenderInfo(temp)
    }, [location.pathname])
    return (
        <>
            {renderInfo.nav ? <Nav/> : null}
            <Routes>
                {
                    routes.map(element => {
                        return <Route
                        path={element.path}
                        element={element.component}
                        key={element.path}/>
                    })
                }
            </Routes>
            {renderInfo.footer ? <Footer/> : null}
        </>
    )
}
export default Router