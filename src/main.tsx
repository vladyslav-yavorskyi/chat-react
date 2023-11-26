import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {createGlobalStyle} from "styled-components";
import './App.css'

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
  
  body {
    font-family: 'Montserrat', sans-serif;
  }
`


ReactDOM.createRoot(document.getElementById('root')!).render(
    <>
        <GlobalStyle/>
        <App />
    </>
)
