import React, { useState, useEffect, useCallback } from 'react';
import { useScore } from '../contexts/ScoreContext';
import { StyledGame, StyledScore, ButtonGrid, StyledTimer, ButtonRow } from '../styled/Game';


export default function Game({ history }) {
    const [number, setNum] = useState(Math.floor(Math.random() * 9) + 1);
    const [time, setTimer] = useState(1000);
    const [result, setScore] = useScore();

     useEffect(() => {
        setScore({
            score: 0,
            sum: 1000,
            quickest: 1000
        });

        return () => {

        };
    }, [setScore]);

    
    const resetTimer = useCallback(
        () => {
            const { score, sum } = result;

            let timeBonus = 700 - (7 * Math.min(90, score));

            setNum(Math.floor(Math.random() * 9) + 1);
            setScore({
                score: score + 1,
                sum: sum + timeBonus,
                quickest: timeBonus
            });
            setTimer(time + timeBonus);
            console.log(sum)
        },
        [time, result, setScore],
    )

    const checkButton = num => {
        if(num !== number) {
            history.push("/gameover");
        } else {
            resetTimer();
        };
    };

    const keyUpHandler = useCallback((e) => {
        let keys = {
            'w': 1, 
            'e': 2,
            'r': 3,
            's': 4,
            'd': 5,
            'f': 6,
            'x': 7,
            'c': 8,
            'v': 9,
        };

        if(keys[e.key] !== number) {
            history.push("/gameover");
        } else {
            resetTimer();
        };

    },[resetTimer, number, history]);

    useEffect(() => {
        document.addEventListener('keyup', keyUpHandler);
        const interval = setInterval(() => {
            setTimer((prevTime) => prevTime - 137);
        }, 123);

        if(time < 0) history.push("/gameover");

        return () => {
            document.removeEventListener('keyup', keyUpHandler);
            clearInterval(interval);
        }
    }, [keyUpHandler, time, history]);

    const target = {
        backgroundColor: "#e35664",
        width: "30%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "2px solid #ffffff"
    };

    const decoy = {
        backgroundColor: "#8fbaff",
        width: "30%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "2px solid #ffffff"
    };

    return (
        <StyledGame>
            <StyledScore>Score: {result.score}</StyledScore>
            <ButtonGrid>
                <ButtonRow>
                    <div 
                        style={number === 1 ? target : decoy}
                        onClick={() => checkButton(1)}
                    >
                        w
                    </div>
                    <div 
                        style={number === 2 ? target : decoy}
                        onClick={() => checkButton(2)}
                    >
                        e
                    </div>
                    <div 
                        style={number === 3 ? target : decoy}
                        onClick={() => checkButton(3)}    
                    >
                        r
                    </div>
                </ButtonRow>
                <ButtonRow>
                    <div 
                        style={number === 4 ? target : decoy}
                        onClick={() => checkButton(4)}
                    >
                        s
                    </div>
                    <div 
                        style={number === 5 ? target : decoy}
                        onClick={() => checkButton(5)}
                    >
                        d
                    </div>
                    <div 
                        style={number === 6 ? target : decoy}
                        onClick={() => checkButton(6)}
                    >
                        f
                    </div>
                </ButtonRow>
                <ButtonRow>
                    <div 
                        style={number === 7 ? target : decoy}
                        onClick={() => checkButton(7)}
                    >
                        x
                    </div>
                    <div 
                        style={number === 8 ? target : decoy}
                        onClick={() => checkButton(8)}
                    >
                        c
                    </div>
                    <div 
                        style={number === 9 ? target : decoy}
                        onClick={() => checkButton(9)}
                    >
                        v
                    </div>
                </ButtonRow>
            </ButtonGrid>
            <StyledTimer>Time: {time}ms</StyledTimer>
        </StyledGame>
    )
}
