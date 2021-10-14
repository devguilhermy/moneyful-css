import styled from 'styled-components';
import { transparentize } from 'polished';
import { colors } from '../../styles/global';

export const Container = styled.form`
    h2 {
        color: var(--text-title);
        margin-bottom: 2rem;
        font-size: 1.5rem;
    }

    input {
        padding: 0 1.5rem;
        width: 100%;
        height: 3rem;
        background: var(--input-background);
        border: 1px solid var(--input-border);
        border-radius: 0.5rem;

        font-weight: 400;
        font-size: 1rem;

        & + input {
            margin-top: 1rem;
        }
    }

    button[type='submit'] {
        margin-top: 1.5rem;
        padding: 0 1.5rem;
        width: 100%;
        height: 3rem;
        border: 0;
        border-radius: 0.5rem;
        background: var(--green);
        color: #fff;
        font-weight: 600;
        font-size: 1.25rem;

        transition: filter 0.2s;

        &:hover,
        &:focus {
            filter: brightness(0.9);
        }
    }
`;

export const TransactionTypesContainer = styled.div`
    margin: 1rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
`;

interface RadioBoxProps {
    isActive: boolean;
    activeColor: 'red' | 'blue' | 'green';
}

export const RadioBox = styled.button<RadioBoxProps>`
    border: 1px solid var(--input-border);
    border-radius: 0.5rem;
    padding: 0 1.5rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;

    background: ${({ isActive, activeColor }) =>
        isActive ? transparentize(0.8, colors[activeColor]) : 'transparent'};

    transition: border-color 0.1s;

    img {
        width: 1.5rem;
        height: 1.5rem;
    }

    span {
        margin-left: 1rem;
        display: inline-block;
        font-size: 1rem;
        color: var(--text-title);
    }

    &:hover {
        border-color: var(--input-border-lighter);
    }
`;
