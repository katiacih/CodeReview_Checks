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

export const ContainerThumb = styled.div<{ $thumb?: string; }>`
    justify-content: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 16px;
    border: 1px solid #d9d9d9;
    background-color: #d9d9d9; 
    background-image: url("./letspartythumb.png");
    background-repeat: no-repeat, repeat;
    background-size: cover;
    border-radius: 4px;
    min-width: 320px;
    height: 200px;

    a {
      color: ${props => props.theme.interactive.link.color};
      font-size: 1.5rem;
    }

    a:hover {
      cursor: pointer;
      text-decoration: underline;
      color: ${props => props.theme.interactive.link.hover};
    }
}`;
// onst Button = styled.button<{ $primary?: boolean; }>`
//   /* Adapt the colors based on primary prop */
//   background: ${props => props.$primary ? "#BF4F74" : "white"};
//   color: ${props => props.$primary ? "white" : "#BF4F74"};

// `;


