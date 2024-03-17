import styled from 'styled-components';

export const HeaderMySoups = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 100px 80px;
`;

export const BoxText = styled.div`
    max-width: 160px;
  
`
export const Title = styled.h4`
    font-family: "Madimi One", sans-serif;
    font-size: 24px;
`;

export const Image = styled.img`
    width: 100px;
    height: 100px;
`;

export const SectionMySoupsIngridients = styled.section`
   margin: 0px;
   min-height: 300px;
   background-color: #e3f1f5;
   display: grid;
   grid-template-columns: 1fr 1fr;  
   justify-items: center;
   align-items: center;
`;

export const SectionMySoupsRecipes = styled.section`
    margin: 0px;
    min-height: 300px;
    background-color: #f5f5f5;
`;

export const SectionMySoupsResult = styled.section`
    margin: 0px;
    min-height: 300px;
   background-color: #e6e3de;
`;