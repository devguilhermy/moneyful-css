import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 4rem;

    table {
        width: 100%;
        border-spacing: 0 0.5rem;

        thead {
            th {
                color: var(--text-body);
                font-weight: 400;
                padding: 1rem 2rem;
                text-align: left;
                line-height: 1.5rem;
            }
        }

        tbody {
            tr {
                border: 0;
                background: var(--shape);
                color: var(--text-body);
            }
        }

        td {
            padding: 1rem 2rem;

            &:first-child {
                color: var(--text-title);
                border-top-left-radius: 0.5rem;
                border-bottom-left-radius: 0.5rem;
            }

            &:last-child {
                border-top-right-radius: 0.5rem;
                border-bottom-right-radius: 0.5rem;
            }

            &.outcome {
                color: var(--red);
            }

            &.income {
                color: var(--green);
            }
        }
    }
`;
