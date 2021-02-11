import React, { useEffect, useCallback } from 'react';
import { Accent, StyledTitle } from '../styled/Branding';
import CallToAction from '../styled/CallToAction';

export default function Home({ history }) {
    const keyUpHandler = useCallback((e) => {
        if(e.code === 'Space') {
            history.push("/game");
        }
    },[ history ]);

    useEffect(() => {
        document.addEventListener('keyup', keyUpHandler);

        return () => {
            document.removeEventListener('keyup', keyUpHandler);
        }
    }, [keyUpHandler]);

    return (
        <div>
            <StyledTitle>Ready to start?</StyledTitle>
            <CallToAction to="/game">Click here or press the <Accent>spacebar</Accent> to play</CallToAction>
        </div>
    )
}
