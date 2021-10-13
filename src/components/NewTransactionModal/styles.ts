import styled from 'styled-components';

export const Container = styled.form`
    h2 {
        color: var(--text-title);
        margin-bottom: 2rem;
        font-size: 1.5rem;
    }

    input {
        padding: 0 1.5rem;
        width: 100%;
        height: 4rem;
        background: var(--input-background);
        border: 1px solid var(--input-border);
        border-radius: 0.5rem;

        & + input {
            margin-top: 1rem;
        }
    }

    button {
        margin-top: 1.5rem;
        padding: 0 1.5rem;
        width: 100%;
        height: 4rem;
        border: 0;
        border-radius: 0.5rem;
        background: var(--green);
    }
`;
