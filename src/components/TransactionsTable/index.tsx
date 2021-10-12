import { useEffect, useState } from 'react';
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
        fetch('https://localhost:3000/api/transactions')
            .then((response) => response.json())
            .then((data) => {
                setTransactions(data);
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
                                    {transaction.type === 'outcome' && '-'} R${' '}
                                    {transaction.amount}
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
