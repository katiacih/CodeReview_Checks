import React from 'react'
import Menu from '../../../main/menu/menu'
import LandingContent from './landing-content'

function Home() {
  return (
    <div>
      <LandingContent title='teste' isShowBreacrumbs={false}>
        <Menu />
      </LandingContent>

    </div>    
  )
}

export default Home
