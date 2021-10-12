import { Container } from './styles';

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import moneyImg from '../../assets/money.svg';
import { useEffect, useState } from 'react';

import { TransactionProps } from '../TransactionsTable';
import { api } from '../../services/api';
import { AxiosResponse } from 'axios';

export function Summary() {
    const [summary, setSummary] = useState({
        incomeTotal: 0,
        outcomeTotal: 0,
        total: 0,
    });

    useEffect(() => {
        api.get<TransactionProps[]>('/transactions').then((response) => {
            let incomeTotal = 0;
            let outcomeTotal = 0;
            let total = 0;

            response.data.forEach((transaction: TransactionProps) => {
                if (transaction.type === 'income') {
                    incomeTotal += transaction.amount;
                } else if (transaction.type === 'outcome') {
                    outcomeTotal += transaction.amount;
                }
            });

            total = incomeTotal - outcomeTotal;

            setSummary({ incomeTotal, outcomeTotal, total });
        });
    }, []);

    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Ícone de entradas" />
                </header>
                <strong>R$ {summary.incomeTotal}</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="Ícone de saídas" />
                </header>
                <strong>- R$ {summary.outcomeTotal}</strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={moneyImg} alt="Ícone de dinheiro" />
                </header>
                <strong>R$ {summary.total}</strong>
            </div>
        </Container>
    );
}
