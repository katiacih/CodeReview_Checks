import React from 'react'
import Header from './header/header'
import SectionHero from './content/section-hero'
import SectionDestination from './content/section-destination'
import SectionPackage from './content/section-packge'
import Footer from './footer/footer'
import { DivContent } from './styled'

function LetsParty() {
  return (
    <DivContent>
      <Header />
      <SectionHero />
      <SectionDestination />
      <SectionPackage />
      <Footer />
    </DivContent>
  )
}

export default LetsParty;
