import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  100% {
    opacity: 1;
  }
`

export const HeaderContent = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 35px 100px 0;
  animation: 1s ${fadeIn} 0.5s forwards;
  opacity: 0;
  color: #fff;
  z-index: 2;

  @media (max-width: 800px) {
    padding: 20px 50px;
    flex-direction: column;

    header h2 {
      margin-bottom: 15px;
    }
  }
`

export const HeaderTitle = styled.h2`
  font-family: 'Amatic SC', sans-serif;
  text-decoration: none;
  color: #fff;
  @media (max-width: 800px) {
    margin-bottom: 15px;
  }
`

export const HeaderNav = styled.ul`
  display: flex;
  margin-right: -15px;
  list-style: none;
`

export const NavItem = styled.li`
  margin: 0 15px;
  color: #fff;
`

export const NavLinkItem = styled.a`
  border-radius: 4px;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  opacity: 1;
  transition: all 400ms;
  color: #d1cece;
  &:hover {
    opacity: 1;
    color: #ffff;
  }
`
