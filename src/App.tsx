import './App.css'
import SignIn from "./pages/SignIn.tsx";
import ChatRoom from "./pages/ChatRoom.tsx";
import {FirebaseProvider} from "./context/FirebaseContext.tsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {ConversationProvider} from "./context/CurrentConversationContext.tsx";
import {SearchProvider} from "./context/ModalContext.tsx";

function App() {

    return (
        <FirebaseProvider>
            <SearchProvider>
                <ConversationProvider>
                    <Router>
                        <Routes>
                            <Route path="/" element={<SignIn />} />
                            <Route path="/home" element={<ChatRoom/>} />
                        </Routes>
                    </Router>
                </ConversationProvider>
            </SearchProvider>
        </FirebaseProvider>
  )
}

export default App
