import { useState } from 'react';
import Modal from 'react-modal';
import { api } from '../../services/api';
import { Container } from './styles';

Modal.setAppElement('#root');

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({
    isOpen,
    onRequestClose,
}: NewTransactionModalProps) {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [type, setType] = useState('income');
    const [category, setCategory] = useState('');
    const [date, setDate] = useState('2021-10-23');

    function handleSubmit() {
        const transaction = {
            title,
            amount,
            type,
            category,
            date,
        };
        console.log(transaction);

        api.post('/transactions', transaction).then(() => alert('ok'));
    }
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <Container>
                <h2>Cadastrar transação</h2>
                <input
                    type="text"
                    placeholder="Título"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />
                {/* <div className="error-messages">
<p className="message">{errors.title?.message}</p>
</div> */}
                <input
                    type="text"
                    placeholder="Valor"
                    value={amount}
                    onChange={(event) =>
                        setAmount(parseInt(event.target.value))
                    }
                />
                <input
                    type="text"
                    placeholder="Categoria"
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                />
                <input
                    type="date"
                    value={date}
                    onChange={(event) => setDate(event.target.value)}
                />
                <button type="button" onClick={handleSubmit}>
                    Salvar
                </button>
            </Container>
        </Modal>
    );
}
