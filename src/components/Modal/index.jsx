
import { FiX } from 'react-icons/fi'
import './modal.css';

export default function Modal({ content, onClose }) {
    return (
        <div className="modal">
            <div className="container-modal">
                <button className='close' onClick={onClose}>
                    <FiX size={23} color="#fff" />
                    Voltar
                </button>

                <div>
                    <h2>Detalhes do usuario</h2>


                    <div className="row">
                        <span>
                            User: <a>{content.name}</a>
                        </span>
                    </div>

                    <div className="row">
                        <span>
                            {/* Assunto: <a>{content.assunto}</a> */}
                        </span>
                    </div>

                    <div className="row">
                        <span>
                            {/* Status: <a style={{ color: '#fff', backgroundColor: content.status === 'Aberto' ? '#5cb85c' : '#999' }}>{content.status}</a> */}
                        </span>
                    </div>


                    {/* {content.complemento !== '' && (
                        <>
                            <h3>Complemento</h3>

                            <p>
                                {content.complemento}
                            </p>
                        </>
                    )} */}

                </div>
            </div>
        </div>
    );
} 