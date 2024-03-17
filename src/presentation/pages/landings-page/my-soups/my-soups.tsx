import React from 'react'
import LandingContent from '../../home/landing-content'
import { BoxText, SectionMySoupsIngridients, SectionMySoupsRecipes, SectionMySoupsResult, Title } from './styled';
const img1 = require('./assets/panela-2.png');
// import img1 from './assets/panela-2.png';

function MySoups() {
  const title = `Aquecendo a anos`;
  return (
    <LandingContent title={title}>
        <SectionMySoupsIngridients>
            <BoxText>
                <Title >{title}</Title>
                <p>mais consumidas no outono e inverno, época em que temos menos sede. Ideais para toda a família, também são uma ótima fonte de nutrientes para crianças e idosos com dificuldades de mastigação.</p>
            </BoxText>          
            <div>
                <img alt='panela com ingredientes' src={img1} width={'60px'} height={'60px'} />
            </div>
        </SectionMySoupsIngridients>
        <SectionMySoupsRecipes>
            <h3 className="title">My soups</h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio fringilla, fermentum nisl non, lacinia tellus. Nulla facilisi. Nullam ac turpis in justo cursus ullamcorper. Fusce vel nunc in odio aliquet posuere. Sed nec odio auctor, fermentum nisl non, lacinia tellus. Nulla facilisi. Nullam ac turpis in justo cursus ullamcorper. Fusce vel nunc in odio aliquet posuere.
            </p>
        </SectionMySoupsRecipes>
        <SectionMySoupsResult>
            <h3 className="title">My soups</h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio fringilla, fermentum nisl non, lacinia tellus. Nulla facilisi. Nullam ac turpis in justo cursus ullamcorper. Fusce vel nunc in odio aliquet posuere. Sed nec odio auctor, fermentum nisl non, lacinia tellus. Nulla facilisi. Nullam ac turpis in justo cursus ullamcorper. Fusce vel nunc in odio aliquet posuere.
            </p>
        </SectionMySoupsResult>

    </LandingContent>
  )
}

export default MySoups;
