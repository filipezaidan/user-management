import { Routes, Route } from "react-router-dom";

//Pages
import Home from '../pages/Home';
import Login from '../pages/Login';
import SignIn from '../pages/SignIn';


function RoutesWrapper() {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signin" element={<SignIn />} />
        </Routes>
    );
}

export default RoutesWrapper;