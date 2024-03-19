import { Link } from 'react-router-dom';
import styled from 'styled-components'

export const MenuBar = styled.div`
`;

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    min-width: 380px;
    margin-bottom: 36px;
`;

export const ContainerMenuTitle = styled.div`
  display: flex;
  flex-direction: column;
  width: 260px;
  h3 {
    margin-bottom: 11px;
  }
  hr {
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-bottom-color: ${props => props.theme.interactive.link.hover};
    width: 100%;
  }
    margin-bottom: 38px;
  }
  span {
    color: #9b9697;
  }
`;

export const DetailItemMenu = styled.div`
    justify-content: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 16px;
    min-width: 320px;
    height: 200px;
}`;


export const ContainerThumb = styled.div<{ $thumb?: string; }>`
    padding: 16px;
    border: 1px solid #d9d9d9;
    background-color: #d9d9d9; 
    background-size: cover;
    border-radius: 4px;
    min-width: 280px;
    height: 160px;
}`;

export const LinkRedirect = styled(Link)`
 color:white;
 font-size: x-large;
 font-family: Arial, Helvetica, sans-serif;
 text-decoration: none;
 margin: 10px;
  &:hover,
  &:focus{
      color: blue;
  };
  &:active{
      color: red;
  };
  @media(max-width: 700px) {
          display: none;
  }
 `

