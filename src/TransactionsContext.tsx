import { ReactNode, createContext, useEffect, useState } from 'react';

import { api } from './services/api';

interface Transaction {
    id: number;
    title: string;
    type: 'income' | 'outcome';
    amount: number;
    category: string;
    date: string;
}

interface TransactionsProviderProps {
    children: ReactNode;
}

interface TransactionContextProps {
    transactions: Transaction[];
    createTransaction: (transaction: TransactionInput) => void;
}

type TransactionInput = Omit<Transaction, 'id'>;

export const TransactionsContext = createContext<TransactionContextProps>(
    {} as TransactionContextProps
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get<{ transactions: Transaction[] }>('/transactions').then(
            (response) => setTransactions(response.data.transactions)
        );
    }, []);

    function createTransaction(transaction: TransactionInput) {
        api.post('/transactions', transaction).then((response) => {
            console.log(response.data);
        });
    }

    return (
        <TransactionsContext.Provider
            value={{ transactions, createTransaction }}
        >
            {children}
        </TransactionsContext.Provider>
    );
}
