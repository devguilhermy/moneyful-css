import styled from 'styled-components';

export const ModalContent = styled.section`
    max-width: 1120px;
    margin: 0 auto;
    padding: 2rem;
    background: var(--shape);

    div.content {
        margin-top: 2rem;
        display: flex;
        flex-direction: column;

        input {
            padding: 1rem;
            border: 0;
            border-radius: 0.5rem;
            background: var(--background);
            margin-bottom: 1rem;

            &::last-child {
                margin-bottom: 0;
            }
        }

        button {
            margin-top: 1rem;
            padding: 1rem;
            background: var(--green);
            border: 0;
            border-radius: 0.5rem;
        }

        .error-messages {
            color: red;
            font-weight: 600;

            .message {
                margin: 0 0 1.5rem;
            }
        }

        .transaction-type-options {
            display: flex;
            flex-direction: row;
            align-items: center;
            padding: 0 0 1rem;

            div {
                width: 100%;
                padding: 1rem;
                border-radius: 0.5rem;
                background: var(--background);

                &:first-child {
                    margin-right: 1rem;
                }
            }
        }
    }
`;
