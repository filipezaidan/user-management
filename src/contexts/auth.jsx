//Libraries
import { createContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import api from '../services/api';

//Const
export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [loadingAuth, setLoadingAuth] = useState(false);

    useEffect(() => {
        function loadStorage() {
            const storageUser = localStorage.getItem('SistemaUser');

            if (storageUser) {
                setUser(JSON.parse(storageUser));
                setLoading(false);
            }
            setLoading(false);
        }

        loadStorage()
    }, [])

    // Create a user 
    async function signUp(email, password, nome) {
        setLoadingAuth(true);
        let data = {
            email,
            password,
            nome
        }
        await toast.promise(

            api.post('/', data)
                .then((res) => {
                    console.log(res)
                    setUser(data);
                    storageUser(data);
                    setLoadingAuth(false);
                    // toast.success('Seja bem vindo!');
                }).catch((err) => console.log(res)),
            {
                pending: 'Enviando dados...',
                success: 'Conta cadastrada com sucesso!',
                error: 'Ocorreu algum erro, tente novamente!'

            }
        )
    }

    function storageUser(data) {
        localStorage.setItem('SistemaUser', JSON.stringify(data));
    }

    async function signIn(email, password) {
        setLoadingAuth(true)
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