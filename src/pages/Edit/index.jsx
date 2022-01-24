//Libraries
import { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
//Contexts
import { AuthContext } from '../../contexts/auth';
//Services
import api from '../../services/api';
//Components
import Header from '../../components/Header';
import Title from '../../components/Title';
//Stlyes
import './edit.css';

export default function New() {
    const navigate = useNavigate()
    const { id } = useParams();
    const { user } = useContext(AuthContext)

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const getUserById = async () => {
        api.get(`/${id}`, { headers: { 'Authorization': user.id } })
            .then(res => {
                const { data } = res;
                setName(data.name)
                setEmail(data.email)
                setPassword(data.password)
            })
            .catch(err => console.log(err))
    }
    const updateUser = async (e) => {
        e.preventDefault()

        let data = {
            name,
            email,
            password
        }
        api.put(`/${id}`, data, { headers: { 'Authorization': user.id } })
            .then(res => {
                if (res.status === 200) {
                    toast.success("Usuario editado com sucesso!")
                    navigate('/home')
                } else {
                    toast.error("Erro ao editar o usuário")
                }
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getUserById();
    }, [id])


    return (
        <div>
            <Header />
            <div className="content">
                <Title name='Editar Usuário' />
                <div className="form-edit">
                    <form className="form-profile" onSubmit={(e) => updateUser(e)}>

                        <label>Nome</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        <label>Email</label>
                        <input
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <label>Password</label>

                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />

                        <button type="submit">Atualizar dados</button>

                    </form>

                </div>
            </div>
        </div>
    );
}