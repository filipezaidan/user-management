import { Routes, Route } from "react-router-dom";

//Pages
import Home from '../pages/Home';
import Login from '../pages/Login';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';


function RoutesWrapper() {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signin" element={<SignIn />} />
            <Route exact path="/signup" element={<SignUp />} />
        </Routes>
    );
}

export default RoutesWrapper;