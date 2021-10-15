import { Model, createServer } from 'miragejs';

import { Dashboard } from './components/Dashboard';
import { GlobalStyle } from './styles/global';
import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsProvider } from './hooks/useTransactions';
import { useState } from 'react';

createServer({
    models: {
        transaction: Model,
    },

    seeds(server) {
        server.db.loadData({
            transactions: [
                {
                    id: 1,
                    title: 'Freelance Dev',
                    amount: 10000,
                    type: 'income',
                    category: 'Salário',
                    date: '2021-10-12',
                },
                {
                    id: 2,
                    title: 'Telesena',
                    amount: 800,
                    type: 'outcome',
                    category: 'Apostas',
                    date: '2021-10-13',
                },
                {
                    id: 2,
                    title: 'Jogo do Bicho',
                    amount: 30000,
                    type: 'income',
                    category: 'Apostas',
                    date: '2021-10-15',
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
        <TransactionsProvider>
            <Header onOpenNewTransactionModal={openNewTransactionModal} />
            <Dashboard />
            <NewTransactionModal
                isOpen={isNewTransactionModalOpen}
                onRequestClose={closeNewTransactionModal}
            />
            <GlobalStyle />
        </TransactionsProvider>
    );
}
