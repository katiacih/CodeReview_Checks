import React from 'react';
import { Container } from './styles';
import ToyIcon from '@/presentation/components/icon-rocket'
 
function Home(){
  return (
    <Container>
      <h1>Comece por aqui...</h1>
      <div>
        <ToyIcon />
      </div>
    </Container>
  )
}

export default Home;