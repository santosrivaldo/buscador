import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/home.js'
import Login from "./pages/login/login.js";
import SingUp from "./pages/singup/singup.js";
import SingIn from "./pages/singin/singin.js";




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes >
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />}/>
            <Route path="/singin" element={<SingIn/>}/>
            <Route path="/singup" element={<SingUp />}/>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
