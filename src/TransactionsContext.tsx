import { ReactNode, createContext, useEffect, useState } from 'react';

import { api } from './services/api';

// import { AxiosResponse } from 'axios';

// import { api } from './services/api';

interface TransactionsProviderProps {
    children: ReactNode;
}

interface TransactionContextProps {
    transactions: Transaction[];
    createTransaction: (transaction: TransactionInput) => Promise<void>;
}

export const TransactionsContext = createContext<TransactionContextProps>(
    {} as TransactionContextProps
);

interface Transaction {
    id: number;
    title: string;
    type: 'income' | 'outcome';
    amount: number;
    category: string;
    date: string;
}

type TransactionInput = Omit<Transaction, 'id'>;

export function TransactionsProvider({ children }: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get<{ transactions: Transaction[] }>('/transactions').then(
            (response) => setTransactions(response.data.transactions)
        );
    }, []);

    function createTransaction(transactionInput: TransactionInput) {
        return api
            .post<{ transaction: Transaction }>(
                '/transactions',
                transactionInput
            )
            .then((response) => {
                const { transaction } = response.data;

                setTransactions((transactions) => [
                    ...transactions,
                    transaction,
                ]);
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
