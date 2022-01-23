import { Routes, Route } from "react-router-dom";
import ProtectedRoutes from './protected';
//Pages
import Home from '../pages/Home';
import Login from '../pages/Login';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';


function RoutesWrapper() {
    return (
        <Routes>
            <Route exact path="/" element={<SignIn />} />
            <Route exact path="/signup" element={<SignUp />} />
            <Route element={<ProtectedRoutes />}>
                <Route exact path="/home" element={<Home />} />
            </Route>
            <Route exact path="/signin" element={<SignIn />} />
        </Routes>
    );
}

export default RoutesWrapper;