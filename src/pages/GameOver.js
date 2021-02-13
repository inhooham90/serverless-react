import React, { useEffect } from 'react';
import { useScore } from '../contexts/ScoreContext';
import { StyledLink } from '../styled/Navbar';

export default function GameOver({ history }) {
    const [result] = useScore();

    const { score, quickest, sum } = result;

    if (score === -1) {
        history.push('/');
    };

    useEffect(() => {
        const saveHighScore = async () => {
            try {
                const options = {
                    method: "POST",
                    body: JSON.stringify({
                        Name: "James",
                        Score: score,
                        Average: sum/score,
                        Quickest: quickest
                    })
                };
                const res = await fetch('/.netlify/functions/saveHighScore', options);
                const data = await res.json();
                console.log(data);
                // if(data.id) {
                //     setGameOverMessage(`High Score! Your best `)
                // }
            } catch (err) {
    
            }
        }

        saveHighScore();
    }, [result, score, sum])

    return (
        <div>
            GameOver
            <p>{score}</p>
            <p>{quickest}</p>
            <p>{sum}</p>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/game">Play Again</StyledLink>
        </div>
    )
}
