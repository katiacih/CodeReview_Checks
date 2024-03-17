import React from 'react'
import Menu from '../../../main/menu/menu'
import LandingContent from './landing-content'
import MySoups from '../landings-page/my-soups/my-soups'

function Home() {
  return (
    <div>
      <LandingContent title='teste' isShowBreacrumbs={false}>
        <Menu />
      </LandingContent>
      <MySoups />
    </div>    
  )
}

export default Home
