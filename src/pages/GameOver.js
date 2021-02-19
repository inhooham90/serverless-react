import React, { useState, useEffect } from 'react';
import { useScore } from '../contexts/ScoreContext';
import { StyledLink } from '../styled/Navbar';
import MESSAGES from './MESSAGES';

export default function GameOver({ history }) {
    
    const [result, setScore] = useScore();
    const { score, sum } = result;
    const average = Math.floor(sum/score);

    let number;
    
    if (score <= 0) {
        history.push('/');
    } else if (0 < score && score < 25) {
        number = Math.floor(Math.random() * 3)
    } else if (25 <= score && score < 60) {
        number = Math.floor(Math.random() * 3) + 3
    } else if (60 <= score && score < 90) {
        number = Math.floor(Math.random() * 3) + 6
    } else if (score > 90) {
        number = 10;
    }
    
    const [msg, setMsg] = useState(MESSAGES[number]);

    if (score === -1) {
        history.push('/');
    }

    useEffect(() => {
        const saveHighScore = async () => {
            try {
                const options = {
                    method: "POST",
                    body: JSON.stringify({
                        Name: "James",
                        Score: score,
                        Average: average
                    })
                };
                const res = await fetch('/.netlify/functions/saveHighScore', options);
                const data = await res.json();

                if(data.highScore) {
                    setMsg('High Score!');
                }
            } catch (err) {
                console.log(err);
            }
        }

        saveHighScore();

        return () => {
            setScore({
                score: 0,
                sum: 1000
            });
        }
    }, [score, sum]);

    return (
        <div>
            GameOver
            <p>{msg}</p>
            <p>Your Score: {score}</p>
            <p>{average === Infinity ? "Average Reaction Time Not Valid" : `Average Reaction Time: ${average}ms`}</p>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/game">Play Again</StyledLink>
        </div>
    );
};
