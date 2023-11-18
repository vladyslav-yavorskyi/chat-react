import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
`


ReactDOM.createRoot(document.getElementById('root')!).render(
    <>
        <GlobalStyle/>
        <App />
    </>
)
