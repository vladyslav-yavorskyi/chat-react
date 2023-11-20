import './App.css'
import Dashboard from "./components/Dashboard.tsx";
import Chats from "./components/Chats.tsx";
import styled from "styled-components";


const Container = styled.div`

    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 100vh;

`

function App() {

  return (
    <Container>
        <Dashboard/>
        <Chats/>
    </Container>
  )
}

export default App
