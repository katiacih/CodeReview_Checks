import styled from 'styled-components'

export const FooterContent = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #555;
  color: #fff;
  padding: 20px 0;

  @media (max-width: 1100px) {
    flex-direction: column;
  }
`

export const FooterContentLi = styled.li`
  display: flex;

  @media (max-width: 1100px) {
    margin: 0 8px;
  }
`

export const FooterContentUlLi = styled.li`
  margin-left: 16px;
`

export const FooterContentP = styled.p`
  text-transform: uppercase;
  font-size: 14px;
  opacity: 0.6;
  align-self: center;

  @media (max-width: 1100px) {
    text-align: center;
    margin-bottom: 20px;
  }
`
