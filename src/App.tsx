import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';

import { useState } from 'react';
import { createServer, Model } from 'miragejs';
import { NewTransactionModal } from './components/NewTransactionModal';

createServer({
    models: {
        transaction: Model,
    },

    seeds(server) {
        server.db.loadData({
            transactions: [
                {
                    id: 1,
                    title: 'Steak BBQ',
                    amount: 450.8,
                    type: 'outcome',
                    category: 'Restaurante',
                    date: '2021-10-12',
                },
                {
                    id: 2,
                    title: 'Freelance Dev',
                    amount: 10000,
                    type: 'income',
                    category: 'Salário',
                    date: '2021-10-08',
                },
            ],
        });
    },

    routes() {
        this.namespace = 'api';

        this.get('/transactions', (schema, request) => {
            return schema.all('transaction');
        });

        this.post('/transactions', (schema, request) => {
            let data = JSON.parse(request.requestBody);

            data.id = Math.floor(Math.random() * 100);

            return schema.create('transaction', data);
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
