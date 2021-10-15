import { Container } from './styles';
import incomeImg from '../../assets/income.svg';
import moneyImg from '../../assets/money.svg';
import outcomeImg from '../../assets/outcome.svg';
import { useTransactions } from '../../hooks/useTransactions';

export function Summary() {
    const { transactions } = useTransactions();

    const summary = transactions.reduce(
        (acc, transaction) => {
            if (transaction.type === 'income') {
                acc.incomeTotal += transaction.amount;
                acc.total += transaction.amount;
            } else {
                acc.outcomeTotal += transaction.amount;
                acc.total -= transaction.amount;
            }

            return acc;
        },
        { incomeTotal: 0, outcomeTotal: 0, total: 0 }
    );

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
                    -{' '}
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
