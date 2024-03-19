import { Link } from 'react-router-dom';
import styled from 'styled-components'

export const LinkRedirectRR = styled(Link)`
   color: #5494c7;
    font-size: 1.3rem;
    text-decoration: none;
    margin-top: 1em;
    display: inline-block;
    font-weight: bold;
    padding: .5em;
    margin-left: -.5em;
    position: relative;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);

    &:before, &:after {
        position: absolute;
        content: '';
        border-bottom: 3px solid #5494c7;
        border-radius: 1em;
        bottom: .3em;
        transition: transform .5s cubic-bezier(0.075, 0.82, 0.165, 1);
    }

    &:before {
        width: 1em;
        transform-origin: left;
    }

    &:after {
        width: 82%;
        left: 1em;
        transform: translateX(110%);
    }

    &:hover:before {
        transform: scaleX(0.3);
    }

    &:hover:after {
        transform: translateX(0);
    }
 `