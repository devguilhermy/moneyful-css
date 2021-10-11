import { Container } from './styles';

export function TransactionsTable() {
    return (
        <Container>
            <table>
                <thead>
                    <th>Nome</th>
                    <th>Valor</th>
                    <th>Categoria</th>
                    <th>Data</th>
                </thead>
                <tbody>
                    <tr>
                        <td>Freelance Joana</td>
                        <td className="income">R$ 10.000</td>
                        <td>Freelance</td>
                        <td>10/11/2021</td>
                    </tr>
                    <tr>
                        <td>Jantar BBQ</td>
                        <td className="outcome">- R$ 200</td>
                        <td>Restaurante</td>
                        <td>19/11/2021</td>
                    </tr>
                    <tr>
                        <td>Bicicleta</td>
                        <td className="income">R$ 2.000</td>
                        <td>Venda</td>
                        <td>11/11/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}
