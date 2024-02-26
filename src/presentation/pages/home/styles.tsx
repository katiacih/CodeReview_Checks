import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {  FaFile } from "react-icons/fa";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  position: relative;
`;

export const HeaderLandingPageContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 48px 16px 12px 16px;
  margin-bottom: 144px;

`;

export const HeaderLandingPageTitle = styled.div`
  position: relative;
  width: 100%;
`;


export const TitleLanding = styled.span`
  font-family: 'Bebas Neue', cursive;
  font-size: 2em;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  background-image: linear-gradient(#cce7fd, #cce7fd);
  background-size: 100% 10px;
  background-repeat: no-repeat;
  background-position: 100% 0%;
  transition: background-size .7s, background-position .5s ease-in-out;

   &:hover { 
    background-size: 100% 100%;
    background-position: 0% 100%;
    transition: background-position .7s, background-size .5s ease-in-out;
  }
`;