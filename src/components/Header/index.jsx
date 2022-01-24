//Libraries
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiUser, FiSettings, FiLogOut } from "react-icons/fi";
//Contexts
import { AuthContext } from '../../contexts/auth';
//Assets
import avatar from '../../assets/avatar.png';
//Styles
import './header.css'

export default function Header() {
    const { user, signOut } = useContext(AuthContext);

    return (
        <div className='sidebar'>
            <div>
                <img src={avatar}/>
            </div>

            <Link to='/home'>
                <FiHome size={24} color="#fff" />
                Inicio
            </Link>
            <Link to='/' onClick={signOut}>
                <FiLogOut size={24} color="#fff"/>
                Sair
            </Link>
        </div>
    );
}