import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';

import { useState } from 'react';
import { createServer } from 'miragejs';
import { NewTransactionModal } from './components/NewTransactionModal';

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
            <NewTransactionModal
                isOpen={isNewTransactionModalOpen}
                onRequestClose={closeNewTransactionModal}
            />
            <GlobalStyle />
        </>
    );
}
