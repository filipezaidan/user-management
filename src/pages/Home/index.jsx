//Libraries
import { useState, useEffect } from "react";
// import { FiMessageSquare, FiPlus, FiSearch, FiEdit2, FiTrash } from 'react-icons/fi';



//Components
import Header from '../../components/Header';
// import Title from '../../components/Title';
// import Modal from '../../components/Modal';
import { Link } from "react-router-dom";

//Styles
import './home.css'


export default function Home() {
    // const [chamados, setChamados] = useState([]);
    // const [loading, setLoading] = useState(true);
    // const [loadingMore, setLoadingMore] = useState(false);
    // const [isEmpty, setIsEmpty] = useState(false);
    // const [lastDocs, setLastDocs] = useState();


    // const [showPostModal, setShowPostModal] = useState(false);
    // const [detail, setDetail] = useState();



    // if (loading) {
    //     return (
    //         <div>
    //             <Header />

    //             <div className='content'>
    //                 <Title name='Atendimentos'>
    //                     <FiMessageSquare size={25} />
    //                 </Title>

    //                 <div className='container dashboard'>
    //                     <span>Carregando chamados...</span>
    //                 </div>
    //             </div>
    //         </div>
    //     );
    // }

    return (
        <div>
            <Header />

            <div className='content'>
                {/* <Title name='Atendimentos'>
                    <FiMessageSquare size={25} />
                </Title> */}

                {/* {chamados.length === 0 ?
                    <div className="container home">
                        <span>Nenhum chamado registrado...</span>

                        <Link to='/new' className='new'>
                            <FiPlus size={25} color="#fff" />
                            Novo chamado
                        </Link>
                    </div>
                    :
                    <>
                        <Link to='/new' className='new'>
                            <FiPlus size={25} color="#fff" />
                            Novo chamado
                        </Link>

                        <table>
                            <thead>
                                <tr>
                                    <th scope='col'>Clientes</th>
                                    <th scope='col'>Assunto</th>
                                    <th scope='col'>Status</th>
                                    <th scope='col'>Cadastrado em</th>
                                    <th scope='col'>#</th>
                                </tr>
                            </thead>
                            <tbody>
                                {chamados.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td data-label="Cliente">{item.cliente}</td>
                                            <td data-label="Assunto">{item.assunto}</td>
                                            <td data-label="Status">
                                                <span className='badge' style={{ backgroundColor: item.status === 'Aberto' ? '#5cb85c' : '#999' }}>{item.status}</span>
                                            </td>
                                            <td data-label="Cadastrado">{item.createdFormated}</td>
                                            <td data-label="#">
                                                <button className='action' style={{ backgroundColor: '#3583f6' }} onClick={() => togglePostModal(item)}>
                                                    <FiSearch color='#FFF' size={17} />
                                                </button>
                                                <Link className='action' style={{ backgroundColor: '#f6a935' }} to={`/new/${item.id}`}>
                                                    <FiEdit2 color='#FFF' size={17} />
                                                </Link>
                                                <button className='action' style={{ backgroundColor: 'red' }} onClick={() => handleDeleteCall(item)}>
                                                    <FiTrash color='#FFF' size={17} />
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                        {loadingMore && <h3 style={{ textAlign: 'center', marginTop: 15 }}>Buscando dados</h3>}
                        {!loadingMore && !isEmpty && <button className='btn-more' onClick={handleMore}>Buscar mais</button>}
                    </>
                } */}
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