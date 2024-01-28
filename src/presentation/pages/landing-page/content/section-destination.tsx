import React from 'react'
import {
  SectionContent,
  DestinationTitle,
  Destinationparagrapj,
  DestinationGrid,
  DestinationSmallImg4,
  DestinationHR,
  DestinationSmallImg1,
  DestinationLargeImg2,
  DestinationLargeImg3,
} from './styles'

function SectionDestination() {
  return (
    <SectionContent>
      <DestinationTitle>Some of our destinations:</DestinationTitle>
      <Destinationparagrapj>
        Tired of the beach alone? Are the plains too plain? Come along with us
        on one of our unusual adventures with yout friends. Here are some
        pictures from people who have had elevated experiences with us.
      </Destinationparagrapj>
      <DestinationHR />

      <DestinationGrid>
        <DestinationSmallImg1 />
        <DestinationLargeImg2 />
        <DestinationLargeImg3 />
        <DestinationSmallImg4 />
      </DestinationGrid>
    </SectionContent>
  )
}

export default SectionDestination
