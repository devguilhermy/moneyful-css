import styled from 'styled-components';

const Title = styled.h1`
    color: green;
    font-size: 64px;
    font-family: Arial, sans-serif;
`;

export function App() {
    return (
        <div className="App">
            <Title>Hellopa</Title>
        </div>
    );
}
