import { Routes, Route } from "react-router-dom";

//Pages
import Home from '../pages/Home/index';
import SignIn from '../pages/SignIn';


function RoutesWrapper() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
        </Routes>
    );
}

export default RoutesWrapper;