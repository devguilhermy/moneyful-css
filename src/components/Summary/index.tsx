import { useContext, useEffect, useState } from 'react';

import { Container } from './styles';
import { TransactionsContext } from '../../TransactionsContext';
import incomeImg from '../../assets/income.svg';
import moneyImg from '../../assets/money.svg';
import outcomeImg from '../../assets/outcome.svg';

export function Summary() {
    const { transactions } = useContext(TransactionsContext);

    const [summary, setSummary] = useState({
        incomeTotal: 0,
        outcomeTotal: 0,
        total: 0,
    });

    useEffect(() => {
        let incomeTotal = 0;
        let outcomeTotal = 0;
        let total = 0;

        transactions.forEach((transaction) => {
            if (transaction.type === 'income') {
                incomeTotal += transaction.amount;
            } else if (transaction.type === 'outcome') {
                outcomeTotal += transaction.amount;
            }
        });

        total = incomeTotal - outcomeTotal;

        setSummary({ incomeTotal, outcomeTotal, total });
    }, [transactions]);

    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Ícone de entradas" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                    }).format(summary.incomeTotal)}
                </strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="Ícone de saídas" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                    }).format(summary.outcomeTotal)}
                </strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={moneyImg} alt="Ícone de dinheiro" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                    }).format(summary.total)}
                </strong>
            </div>
        </Container>
    );
}
