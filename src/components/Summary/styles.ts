import styled from 'styled-components';

export const Container = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
    margin-top: -5rem;

    div {
        background: var(--shape);
        padding: 1.5rem 2rem;
        border-radius: 0.5rem;
        color: var(--text-title);

        header {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        strong {
            display: block;
            margin-top: 1rem;
            font-size: 2rem;
            line-height: 3rem;
        }

        &.highlight-background {
            background: var(--green);
            color: #fff;
        }
    }
`;
