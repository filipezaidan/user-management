
//Libraries
import { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/auth';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify'


//Assets
import logo from '../../assets/logo.png'

//Styles
import './signin.css'

export default function SignIn() {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { signIn, loadingAuth } = useContext(AuthContext);

    function handleSubmit(e) {
        e.preventDefault();
        if (email !== '' && password !== '') {
            signIn(email, password)
        } else {
            toast.error('preencha todos os campos solicitados');
        }
    }

    return (
        <div className="container-center">
            <div className="login">
                <div className="logo-area">
                    <img src={logo} alt="Logo do sistema" />
                </div>

                <form onSubmit={handleSubmit}>
                    <h1>Entrar</h1>
                    <input type="text" placeholder="email@email.com"  value={email} onChange={(e) => setEmail(e.target.value)} required/>
                    <input type="password" placeholder="********" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <button type="submit">Acessar</button>
                </form>

                <Link to="/register">Criar uma conta</Link>
            </div>
        </div>
    );
}