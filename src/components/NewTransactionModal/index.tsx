import React, { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import { api } from '../../services/api';
import { Container, RadioBox, TransactionTypesContainer } from './styles';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

Modal.setAppElement('#root');

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({
    isOpen,
    onRequestClose,
}: NewTransactionModalProps) {
    const [title, setTitle] = useState<string>();
    const [amount, setAmount] = useState<number>();
    const [type, setType] = useState<'income' | 'outcome'>('income');
    const [category, setCategory] = useState<string>();
    const [date, setDate] = useState<string>();

    function handleSubmit(event: FormEvent) {
        event.preventDefault();

        const transaction = {
            title,
            amount,
            type,
            category,
            date,
        };

        console.log(transaction);

        api.post('/transactions', transaction).then((response) => {
            console.log(response);
        });

        setTitle('');
        setAmount(0);
        setType('income');
        setCategory('');
        setDate('');

        onRequestClose();
    }
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button
                type="button"
                className="react-close-modal"
                onClick={onRequestClose}
            >
                <img src={closeImg} alt="Fechar" />
            </button>
            <Container onSubmit={handleSubmit}>
                <h2>Cadastrar transação</h2>
                <input
                    type="text"
                    placeholder="Título"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />
                <input
                    type="number"
                    placeholder="Valor"
                    value={amount}
                    onChange={(event) => setAmount(Number(event.target.value))}
                />
                <input
                    type="text"
                    placeholder="Categoria"
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                />

                <TransactionTypesContainer>
                    <RadioBox
                        type="button"
                        onClick={() => setType('income')}
                        isActive={type === 'income'}
                        activeColor="green"
                    >
                        <img src={incomeImg} alt="Saída" /> <span>Entrada</span>
                    </RadioBox>
                    <RadioBox
                        type="button"
                        onClick={() => setType('outcome')}
                        isActive={type === 'outcome'}
                        activeColor="red"
                    >
                        <img src={outcomeImg} alt="Saída" /> <span>Saída</span>
                    </RadioBox>
                </TransactionTypesContainer>

                <input
                    type="date"
                    value={date}
                    onChange={(event) => setDate(event.target.value)}
                />
                <button type="submit">Salvar</button>
            </Container>
        </Modal>
    );
}
