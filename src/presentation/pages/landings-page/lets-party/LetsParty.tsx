import React from 'react'
import Header from './header/header'
import SectionHero from './content/section-hero'
import SectionDestination from './content/section-destination'
import SectionPackage from './content/section-packge'
import Footer from './footer/footer'
import { DivContent } from './styled'
import LandingContent from '../../home/landing-content'

function LetsParty() {
  const title = `Let's party`;
  return (
    <LandingContent title={title}>
      <DivContent>
        <Header />
        <SectionHero />
        <SectionDestination />
        <SectionPackage />
        <Footer />
      </DivContent>
    </LandingContent>
  )
}

export default LetsParty;
