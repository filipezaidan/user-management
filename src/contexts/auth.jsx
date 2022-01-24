//Libraries
import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import api from '../services/api';

//Const
export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
    let navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [loadingAuth, setLoadingAuth] = useState(false);

    useEffect(() => {
        function loadStorage() {
            const storageUser = localStorage.getItem('SistemaUser');

            if (storageUser) {
                setUser(JSON.parse(storageUser));
                setLoading(false);
                navigate('/home')
            }
            setLoading(false);
        }

        loadStorage()
    }, [])

    // Create a user 
    async function signUp(email, password, name) {
        setLoadingAuth(true);
        let data = {
            email,
            password,
            name
        }
        await toast.promise(
            api.post('/register', data)
                .then((res) => {
                    console.log(res)
                    setUser(res.data);
                    storageUser(res.data);
                    setLoadingAuth(false);
                    navigate('/home')
                }).catch((err) => console.log(err)),
            {
                pending: 'Enviando dados...',
                success: 'Conta cadastrada com sucesso!',
                error: 'Ocorreu algum erro, tente novamente!'
            }
        );
    }

    function storageUser(data) {
        localStorage.setItem('SistemaUser', JSON.stringify(data));
    }

    async function signIn(email, password) {
        setLoadingAuth(true)
        let data = {
            email,
            password
        }


        api.post('/login', data, {validateStatus: () => true})
            .then((res) => {
                if(res.status === 200){
                    console.log(res.data)
                    setUser(res.data);
                    storageUser(res.data);
                    setLoadingAuth(false);
                    navigate('/home')
                }else{
                    toast.error("Email/Senha incorretos!")
                }
            })
            .catch((err) => console.log(err))
    }

    // Logout account
    async function signOut() {
        localStorage.removeItem("SistemaUser");
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{
            signed: !!user,
            user,
            loading,
            loadingAuth,
            signUp,
            signIn,
            signOut,
            setUser,
            storageUser,
        }}>
            {children}
        </AuthContext.Provider>
    );
}