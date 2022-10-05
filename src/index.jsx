import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import GlobalFonts from './styles/Fonts/Pretendard'
import GlobalStyles from './styles/styles'

ReactDOM.render(
    <React.StrictMode>
        <GlobalFonts/>
        <GlobalStyles/>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
)
