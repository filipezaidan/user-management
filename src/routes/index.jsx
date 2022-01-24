//Libraries
import { useContext } from 'react';
import { Routes, Route } from "react-router-dom";
import ProtectedRoutes from './protected';
//Contexts
import { AuthContext } from '../contexts/auth';
//Pages
import Home from '../pages/Home';
import Edit from '../pages/Edit';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

function RoutesWrapper() {
    const { signed } = useContext(AuthContext);
    return (
        <Routes>
            <Route exact path="/" element={signed ? <Home /> : <SignIn />} />
            <Route exact path="/register" element={<SignUp />} />
            <Route element={<ProtectedRoutes />}>
                <Route exact path="/home" element={<Home />} />
                <Route exact path="/edit/:id" element={<Edit />} />
            </Route>
            <Route exact path="/login" element={<SignIn />} />
        </Routes>
    );
}

export default RoutesWrapper;