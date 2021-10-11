import { Container } from './styles';

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import moneyImg from '../../assets/money.svg';

export function Summary() {
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Ícone de entradas" />
                </header>
                <strong>R$ 5.500</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="Ícone de saídas" />
                </header>
                <strong>- R$ 500</strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={moneyImg} alt="Ícone de dinheiro" />
                </header>
                <strong>R$ 5.000</strong>
            </div>
        </Container>
    );
}
