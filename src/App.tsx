import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';

import { createServer } from 'miragejs';

createServer({
    routes() {
        this.namespace = 'api';

        this.get('/transactions', () => {
            return [
                {
                    id: 1,
                    title: 'Freelance WiseUp',
                    amount: 10000,
                    type: 'income',
                    category: 'Salário',
                    date: new Date(),
                },
                {
                    id: 2,
                    title: 'Jantar BBQ',
                    amount: 240,
                    type: 'outcome',
                    category: 'Restaurante',
                    date: new Date(),
                },
                {
                    id: 3,
                    title: 'Barber Hibraim',
                    amount: 50,
                    type: 'outcome',
                    category: 'Pessoal',
                    date: new Date(),
                },
                {
                    id: 4,
                    title: 'Aluguel Point',
                    amount: 2200,
                    type: 'outcome',
                    category: 'Moradia',
                    date: new Date(),
                },
            ];
        });
    },
});

export function App() {
    return (
        <>
            <Header />
            <Dashboard />
            <GlobalStyle />
        </>
    );
}
