import styled from 'styled-components';

export const Container = styled.header`
    background: var(--blue);
    width: 100%;
`;

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    padding: 1rem 1rem 10rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
        padding: 0 2rem;
        font-size: 1rem;
        color: #fff;
        background: var(--blue-light);
        border: 0;
        border-radius: 0.25rem;
        height: 3rem;

        transition: all 0.2s;

        &:hover {
            filter: brightness(0.9);
            box-shadow: 0 0.1rem 0.5rem rgba(0, 0, 0, 0.2);
        }
    }
`;
