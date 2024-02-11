import React from 'react'
import {
  SectionContent,
  HeroBackground,
  HeroContentArea,
  HeroH1,
  HeroH3,
  HeroLink,
} from './styles'

function SectionHero() {
  return (
    <SectionContent>
      <HeroBackground></HeroBackground>
      <HeroContentArea>
        <HeroH1>Life is a party!</HeroH1>
        <HeroH3>Unmissable Adventure Tours With Your Friends</HeroH3>
        <HeroLink href="#">Contact Us Now</HeroLink>
      </HeroContentArea>
    </SectionContent>
  )
}

export default SectionHero
