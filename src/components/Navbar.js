import React from 'react';
import { Link } from 'react-router-dom';
import { Accent } from '../styled/Branding';
import { StyledLink, StyledNavbar, StyledNavBrand, StyledNavItems } from '../styled/Navbar';

export default function Navbar() {
    return (
        <StyledNavbar>
            <StyledNavBrand>
                <Link to='/'>
                    <Accent>Reaction Speed</Accent> Game
                </Link>
            </StyledNavBrand>
            <StyledNavItems>
                <li><StyledLink to="/">Home</StyledLink></li>
                <li><StyledLink to="/highscore">High Score</StyledLink></li>
            </StyledNavItems>
        </StyledNavbar>
    )
}
