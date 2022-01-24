//Libraries
import { useState, useEffect, useContext } from "react";
import { FiMessageSquare, FiPlus, FiSearch, FiEdit2, FiTrash } from 'react-icons/fi';
//Contexts
import { AuthContext } from '../../contexts/auth';
//Components
import Header from '../../components/Header';
import Title from '../../components/Title';
import Modal from '../../components/Modal';
import { Link } from "react-router-dom";

//Styles
import './home.css'
import api from "../../services/api";
import { toast } from "react-toastify";


export default function Home() {
    const { user } = useContext(AuthContext);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showPostModal, setShowPostModal] = useState(false);
    const [detail, setDetail] = useState();

    function togglePostModal(item) {
        setShowPostModal(!showPostModal);
        setDetail(item);

    }

    async function handleDeleteUser(id) {
        api.delete(`/${id}`, { 
            headers: { 'Authorization': user.id },
            validateStatus: () => true 
        })
        .then(res => {
            if(res.status === 200){
                toast.success("Usuario deletado com sucesso!")
                getUsers();
            }else{
                toast.error("Error ao deletar o usuário!")
            }
        })
            .catch(err => console.log(err))
    }

    const getUsers = async () => {
        api.get("/", { headers: { 'Authorization': user.id } }).then(res => setUsers(res.data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        console.log(user)
        getUsers();
    }, [user])

    return (
        <div>
            <Header />

            <div className='content'>
                <Title name='Usuarios cadastrados'>
                    <FiMessageSquare size={25} />
                </Title>

                {users.length === 0 ?
                    <div className="home">
                        <span>Carregando usuários...</span>
                    </div>
                    :
                    <>
                        <table>
                            <thead>
                                <tr>
                                    <th scope='col'>Nome</th>
                                    <th scope='col'>Email</th>
                                    <th scope='col'>#</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td data-label="Nome">{item.name}</td>
                                            <td data-label="Email">{item.email}</td>
                                            <td data-label="#">
                                                <Link className='action' style={{ backgroundColor: '#f6a935' }} to={`/edit/${item.id}`}>
                                                    <FiEdit2 color='#FFF' size={17} />
                                                </Link>
                                                <button className='action' style={{ backgroundColor: 'red' }} onClick={() => handleDeleteUser(item.id)}>
                                                    <FiTrash color='#FFF' size={17} />
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </>
                }
            </div>
            {/* {showPostModal && (
                <Modal
                    content={detail}
                    onClose={togglePostModal}
                />
            )} */}

        </div>
    );
}