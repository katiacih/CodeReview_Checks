import React from 'react'
import {
  SectionPckage,
  DestinationTitle,
  Destinationparagrapj,
  DestinationGrid,
  DestinationHR,
  PackagesGridLi,
  PackagesTitleIcon,
} from './styles'
import { Brightness1, CameraAlt, ThreeDRotation } from '@mui/icons-material'

function SectionPackage() {
  return (
    <SectionPckage>
      <DestinationTitle>Tour Packages</DestinationTitle>
      <Destinationparagrapj>
        We offer a variety of group (minimum 5 people) packages. Whether you've
        spent some summers together or this might be your first adventure, we've
        got the perfect vacation for you.
      </Destinationparagrapj>
      <DestinationHR />

      <DestinationGrid>
        <PackagesGridLi>
          <Brightness1 sx={{ fontSize: 60, color: '#e07e7b' }} />
          <PackagesTitleIcon>Guided Trips</PackagesTitleIcon>
          <Destinationparagrapj>
            Looking for the complete experience? Take a tour with one of our
            experts. They'll show you secrets that you're likely to miss
            otherwise.
          </Destinationparagrapj>
        </PackagesGridLi>
        <PackagesGridLi>
          <CameraAlt sx={{ fontSize: 60, color: '#e07e7b' }} />
          <PackagesTitleIcon>Photo Trips</PackagesTitleIcon>
          <Destinationparagrapj>
            Want to experience nature's beauty without all of that annoying
            exercise? Take a photo tour on one of our <em>Life is a party!</em>{' '}
            buses.
          </Destinationparagrapj>
        </PackagesGridLi>
        <PackagesGridLi>
          <ThreeDRotation sx={{ fontSize: 60, color: '#e07e7b' }} />
          <PackagesTitleIcon>Biking Trips</PackagesTitleIcon>
          <Destinationparagrapj>
            If bicycles are more your speed, consider taking a tour through one
            of our mountain or city bike paths. We'll provide the bikes, and
            lunch too!
          </Destinationparagrapj>
        </PackagesGridLi>
        <PackagesGridLi>
          <ThreeDRotation sx={{ fontSize: 60, color: '#e07e7b' }} />
          <PackagesTitleIcon>Racing Trips</PackagesTitleIcon>
          <Destinationparagrapj>
            Got a competitive spirit? Sign up for one of our challenge-based
            marathons! Try to reach the summit before any other group.
          </Destinationparagrapj>
        </PackagesGridLi>
      </DestinationGrid>
    </SectionPckage>
  )
}

export default SectionPackage
