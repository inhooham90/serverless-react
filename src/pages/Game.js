import React from 'react';
import { StyledGame, StyledScore, StyledCharacter, StyledTimer } from '../styled/Game';


export default function Game() {
    return (
        <StyledGame>
            <StyledScore>Score: 0</StyledScore>
            <StyledCharacter>Up</StyledCharacter>
            <StyledTimer>Time: 0s</StyledTimer>
        </StyledGame>
    )
}
