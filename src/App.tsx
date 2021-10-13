import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';

import { createServer } from 'miragejs';
import { ModalContent } from './components/NewTransactionModal/styles';
import { api } from './services/api';
import { useState } from 'react';

import Modal from 'react-modal';
// import { ModalContent } from './styles';

createServer({
    routes() {
        this.namespace = 'api';

        this.get('/transactions', () => {
            return [
                {
                    id: 1,
                    title: 'Freelance WiseUp',
                    amount: 10000,
                    type: 'income',
                    category: 'Salário',
                    date: new Date(),
                },
                {
                    id: 2,
                    title: 'Jantar BBQ',
                    amount: 240,
                    type: 'outcome',
                    category: 'Restaurante',
                    date: new Date(),
                },
                {
                    id: 3,
                    title: 'Barber Hibraim',
                    amount: 50,
                    type: 'outcome',
                    category: 'Pessoal',
                    date: new Date(),
                },
                {
                    id: 4,
                    title: 'Aluguel Point',
                    amount: 2200,
                    type: 'outcome',
                    category: 'Moradia',
                    date: new Date(),
                },
            ];
        });

        this.post('/transactions', (schema, request) => {
            let data = JSON.parse(request.requestBody);

            data.id = Math.floor(Math.random() * 100);

            return { transaction: data };
        });
    },
});

export function App() {
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
    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
        useState(false);

    function openNewTransactionModal() {
        setIsNewTransactionModalOpen(true);
    }

    function closeNewTransactionModal() {
        setIsNewTransactionModalOpen(false);
    }

    return (
        <>
            <Header onOpenNewTransactionModal={openNewTransactionModal} />
            <Dashboard />
            <Modal
                isOpen={isNewTransactionModalOpen}
                onRequestClose={closeNewTransactionModal}
                style={{
                    content: {
                        top: '50%',
                        left: '50%',
                        right: 'auto',
                        bottom: 'auto',
                        marginRight: '-50%',
                        transform: 'translate(-50%, -50%)',
                    },
                }}
                contentLabel="Exemplo"
            >
                <ModalContent>
                    <h2>Cadastrar transação</h2>
                    <div className="content">
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
                        <div className="transaction-type-options">
                            <div>
                                <input
                                    type="radio"
                                    name="type"
                                    value="income"
                                    id="incomeOption"
                                    checked={type === 'income'}
                                    onChange={(event) =>
                                        setType(event.target.value)
                                    }
                                />
                                <label htmlFor="incomeOption">Receita</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    name="type"
                                    value="outcome"
                                    id="outcomeOption"
                                    checked={type === 'outcome'}
                                    onChange={(event) =>
                                        setType(event.target.value)
                                    }
                                />
                                <label htmlFor="outcomeOption">Despesa</label>
                            </div>
                        </div>
                        <input
                            type="text"
                            placeholder="Categoria"
                            value={category}
                            onChange={(event) =>
                                setCategory(event.target.value)
                            }
                        />
                        <input
                            type="date"
                            value={date}
                            onChange={(event) => setDate(event.target.value)}
                        />
                        <button type="button" onClick={handleSubmit}>
                            Salvar
                        </button>
                    </div>
                </ModalContent>
            </Modal>
            <GlobalStyle />
        </>
    );
}
