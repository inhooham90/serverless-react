import React, { useState, useEffect } from 'react';
import { ScoreLi, ScoreList } from '../styled/HighScore';

export default function HighScore() {

    const [highScores, setHighScores] = useState([]);

    useEffect(() => {
        const loadHighScores = async() => {
            try {
                const res = await fetch('/.netlify/functions/getHighScores');
                const scores = await res.json();

                setHighScores(scores);
            } catch (err) {
                console.log(err);
            }
        };

        loadHighScores();
    }, []);

    return (
        <div>
            HighScore
            <ScoreList>
                {highScores.map( score => (
                    <ScoreLi key={score.id}>
                        {score.fields.Name} - {score.fields.Score}
                    </ScoreLi>
                ))}
            </ScoreList>
        </div>
    )
}
