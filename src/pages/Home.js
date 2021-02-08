import React from 'react'
import { Accent, StyledTitle } from '../styled/Branding'
import CallToAction from '../styled/CallToAction'

export default function Home() {
    return (
        <div>
            <StyledTitle>Ready to play?</StyledTitle>
            <CallToAction to="/game">Click here or press the <Accent>spacebar</Accent> to play</CallToAction>
        </div>
    )
}
