//Libraries
import { useState, useContext, useEffect } from 'react';
import { Link, useNavigate, Navigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth';
//Assets
import logo from '../../assets/logo.png'

//Styles
import './signup.css'

export default function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { signUp, loadingAuth, signed } = useContext(AuthContext);

    useEffect(() => {

    }, [signed])

    function handleSubmit(e) {
        e.preventDefault();
        if (name !== '' && email !== '' && password !== '') {
            signUp(email, password, name);
        }
    }

    return (
        <div className="container-center">
            <div className="login">
                <div className="logo-area">
                    <img src={logo} alt="Logo do sistema" />
                </div>

                <form onSubmit={handleSubmit}>
                    <h1>Criar conta</h1>
                    <input type="text" placeholder="Nome completo" value={name} onChange={(e) => setName(e.target.value)} required />
                    <input type="email" placeholder="email@email.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <input
                        type="password"
                        placeholder="********"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        min={8}
                    />
                    <button type="submit">{loadingAuth ? 'Carregando' : 'Cadastrar'}</button>
                </form>

                <Link to="/login">Fazer Login</Link>
            </div>
        </div>
    );
}