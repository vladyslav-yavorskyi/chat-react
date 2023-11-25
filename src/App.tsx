import './App.css'
import SignIn from "./pages/SignIn.tsx";
import ChatRoom from "./pages/ChatRoom.tsx";
import {FirebaseProvider} from "./context/FirebaseContext.tsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

    return (
        <FirebaseProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<SignIn />} />
                    <Route path="/home" element={<ChatRoom/>} />
                </Routes>
            </Router>
        </FirebaseProvider>
  )
}

export default App
