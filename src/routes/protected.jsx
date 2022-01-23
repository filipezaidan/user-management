import { Outlet, Navigate } from 'react-router'
import { AuthContext } from '../contexts/auth';
import SignIn from '../pages/SignIn';
import {useContext} from 'react';


const ProtectedRoutes = () => {
    const { signed } = useContext(AuthContext);
    console.log('signed', signed)
    return signed ? <Outlet/> : <Navigate to='/' />
}

export default ProtectedRoutes;