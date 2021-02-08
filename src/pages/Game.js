import React, { useState, useEffect } from 'react';
import { StyledGame, StyledScore, ButtonGrid, StyledTimer, ButtonRow } from '../styled/Game';


export default function Game({ history }) {
    const [state, setState] = useState({ score: 0, number: Math.floor(Math.random() * 9) + 1 });
    let { number, score } = state;

    const keyHash = {
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

    // const MAX_SECONDS = 5;
    // const [ms, setMs] = useState(0);
    // const [seconds, setSeconds] = useState(MAX_SECONDS);

    const keyUpHandler = (e) => {
        console.log(keyHash[e.key], number)
        checkButton(keyHash[e.key]);
    };

    useEffect(() => {
        document.addEventListener('keyup', keyUpHandler);

        return () => {
            document.removeEventListener('keyup', keyUpHandler);
        }
    }, []);

    // useEffect(() => {
    //     const currentTime = new Date();
    //     const interval = setInterval(() => updateTime(currentTime), 1);

    //     return () => {
    //         clearInterval(interval);
    //     }
    // }, []);

    // const updateTime = startTime => {
    //     const endDate = new Date();
    //     const msPassedStr = (endDate.getTime() - startTime.getTime()).toString();

    //     const formattedMsString = ('0000' + msPassedStr).slice(-5);

    //     const updatedSeconds = MAX_SECONDS - parseInt(formattedMsString.substring(0,2) - 1);
    //     console.log(updatedSeconds);
    // };

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

    const checkButton = num => {
        if(num !== number) {
            // history.push("/gameover");
        } else {
            setState({ score: score + 1, number: Math.floor(Math.random() * 9) + 1});
        }
    }

    return (
        <StyledGame>
            <StyledScore>Score: {score}</StyledScore>
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
            <StyledTimer>Time: 0s</StyledTimer>
        </StyledGame>
    )
}
