import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { Container } from './styles';

export interface TransactionProps {
    id: number;
    title: string;
    type: 'income' | 'outcome';
    amount: number;
    category: string;
    date: string;
}

export function TransactionsTable() {
    const [transactions, setTransactions] = useState<TransactionProps[]>([]);

    useEffect(() => {
        api.get('/transactions').then((response) => {
            setTransactions(response.data);
        });
    }, []);

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((transaction) => {
                        return (
                            <tr key={transaction.id}>
                                <td>{transaction.title}</td>
                                <td className={transaction.type}>
                                    {transaction.type === 'outcome' ? '-' : '+'}{' '}
                                    R$ {transaction.amount}
                                </td>
                                <td>{transaction.category}</td>
                                <td>{transaction.date}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </Container>
    );
}
