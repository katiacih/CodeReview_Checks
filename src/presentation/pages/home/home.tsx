import React from 'react'
import { Container } from './styles'
import LetsParty from '../landings-page/lets-party/LetsParty'
import Menu from '../../../main/menu/menu'

function Home() {
  return (
    <div>
    <Menu />
    <Container>
      <LetsParty />
    </Container>

    </div>    
  )
}

export default Home
