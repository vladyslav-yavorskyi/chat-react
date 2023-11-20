import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;600;700&display=swap');
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
