import React from 'react'
import LandingContent from '../../home/landing-content';
import { AireHero } from './styled';

function AirePage() {
  const title = `Aire`;
  return (
    <LandingContent title={title}>
      <AireHero>
        <h1>AIRE</h1>
       </AireHero>
      <div>circles with colors</div>
      <div>tow columns</div>
      <div>typo</div>
      <div>montagem de imagens</div>
    </LandingContent>
  )
}

export default AirePage;
