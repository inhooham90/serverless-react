import styled from 'styled-components';

export const StyledGame = styled.div`
    padding: 0 20px;
    height: 75vh;
    max-height: 500px;
    display: grid;
    grid-template-rows: 50px 1fr;
    grid-template-columns: minmax(50px, auto) 1fr minmax(50px, auto);
`;

export const StyledScore = styled.p`
    font-size: 1.5rem;
`;

export const StyledTimer = styled.p`
    font-size: 1.5rem;
    grid-column: 3/4;
`;

export const ButtonGrid = styled.div`
    font-size: 2rem;
    grid-row: 2;
    grid-column: 1/4;
    text-align: center;
    min-height: 30vh;
`;

export const ButtonRow = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
    height: calc(50px + 15%);
`;
