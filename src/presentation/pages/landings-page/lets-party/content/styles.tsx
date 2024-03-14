import styled, { keyframes } from 'styled-components'

export const SectionContent = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 100px 80px;
  position: relative;
  justify-content: center;
  text-align: center;
  min-height: 100vh;
  color: #fff;
  @media (max-width: 800px) {
    min-height: 600px;
  }
`

export const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('https://images.unsplash.com/photo-1505535162959-9bbcb4ab22d6?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1600&h=900&fit=crop&s=2feeaf89ad55829f92c4bbc6ca8e83ce');
  background-size: cover;
  z-index: -1;
  background-color: #80a3db;
`

export const HeroH1 = styled.h1`
  font:
    72px 'Amatic SC',
    sans-serif;
  text-shadow: 2px 2px rgba(0, 0, 0, 0.3);
  margin-bottom: 15px;
  @media (max-width: 800px) {
    font-size: 48px;
  }
`

export const HeroH3 = styled.h3`
  font:
    28px 'Raleway',
    sans-serif;
  font-weight: 300;
  text-shadow: 2px 2px rgba(0, 0, 0, 0.3);
  margin-bottom: 40px;
  @media (max-width: 800px) {
    font-size: 24px;
  }
`

export const HeroLink = styled.a`
  padding: 20px 46px;
  text-decoration: none;
  background-color: #e07e7b;
  &:hover {
    background-color: #ce5856;
  }
  @media (max-width: 800px) {
    padding: 15px 40px;
  }
`

const slidefade = keyframes`
  100% {
      opacity: 1;
      margin: 0;
    }
`

export const HeroContentArea = styled.div`
  opacity: 0;
  margin-top: 100px;
  animation: 1s ${slidefade} 1s forwards;
`
// Section destination

export const DestinationTitle = styled.h3`
  text-transform: capitalize;
  font:
    bold 48px 'Amatic SC',
    sans-serif;
  padding-bottom: 30px;
  text-align: center;
  color: #555;
`

export const Destinationparagrapj = styled.span`
  max-width: 775px;
  line-height: 2;
  padding: 0 20px;
  padding-bottom: 30px;
  text-align: center;
  color: #555;
`

export const DestinationGrid = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

// const IMAGE_1 = "https://images.unsplash.com/photo-1505852903341-fc8d3db10436?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1600&h=900&fit=crop&s=e2f72e62d5f4f04256dd9305d5f51f3c"
// const IMAGE_2 = "https://images.unsplash.com/photo-1475483768296-6163e08872a1?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1600&h=900&fit=crop&s=20b3b1c3caef8c619ac3c75c07a7eafb";
// const IMAGE_3 = "https://images.unsplash.com/photo-1490576198307-6ff97609a0cc?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1600&h=900&fit=crop&s=a0dbd168637edc2cfdac3715ab23d519";
// const IMAGE_4 = "https://images.unsplash.com/photo-1505483531331-fc3cf89fd382?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1600&h=900&fit=crop&s=4f305bbc0243f81f1bf6053a62d76297";

export const DestinationSmallImg1 = styled.li`
  height: 350px;
  padding: 20px;
  background-clip: content-box;
  background-size: cover;
  background-position: center;
  flex-basis: 30%;
  background-image: url('https://images.unsplash.com/photo-1505852903341-fc8d3db10436?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1600&h=900&fit=crop&s=e2f72e62d5f4f04256dd9305d5f51f3c');
  @media (max-width: 1100px) {
    flex-basis: 50%;
  }
  @media (max-width: 800px) {
    flex-basis: 100%;
  }
`

export const DestinationLargeImg2 = styled.li`
  height: 350px;
	padding: 20px;
	background-clip: content-box;
	background-size: cover;
	background-position: center;
  background-image: url("https://images.unsplash.com/photo-1475483768296-6163e08872a1?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1600&h=900&fit=crop&s=20b3b1c3caef8c619ac3c75c07a7eafb")
  flex-basis: 70%;
  @media (max-width: 1100px) {flex-basis: 50%;}
  @media (max-width: 800px) {	flex-basis: 100%;}
`
export const DestinationLargeImg3 = styled.li`
  height: 350px;
  padding: 20px;
  background-clip: content-box;
  background-size: cover;
  background-position: center;
  background-image: url('https://images.unsplash.com/photo-1490576198307-6ff97609a0cc?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1600&h=900&fit=crop&s=a0dbd168637edc2cfdac3715ab23d519');
  flex-basis: 70%;
  @media (max-width: 1100px) {
    flex-basis: 50%;
  }
  @media (max-width: 800px) {
    flex-basis: 100%;
  }
`

export const DestinationSmallImg4 = styled.li`
  height: 350px;
  padding: 20px;
  background-clip: content-box;
  background-size: cover;
  background-position: center;
  flex-basis: 30%;
  background-image: url('https://images.unsplash.com/photo-1505483531331-fc3cf89fd382?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1600&h=900&fit=crop&s=4f305bbc0243f81f1bf6053a62d76297');
  @media (max-width: 1100px) {
    flex-basis: 50%;
  }
  @media (max-width: 800px) {
    flex-basis: 100%;
  }
`

export const DestinationHR = styled.hr`
  width: 250px;
  height: 3px;
  background-color: #e07e7b;
  border: 0;
  margin-bottom: 50px;
  margin-top: 10px;
`

// packages

export const SectionPckage = styled.section`
  padding: 100px 80px;
  position: relative;
  justify-content: center;
  text-align: center;
  min-height: 100vh;
  color: #fff;
  @media (max-width: 800px) {
    min-height: 600px;
  }
`

export const PackagesGridLi = styled.li`
  padding: 50px;
  flex-basis: 50%;
  text-align: center;
  @media (max-width: 800px) {
    flex-basis: 100%;
    padding: 20px;
  }
`

export const PackagesLiIcon = styled.i`
  color: #e07e7b;
`

export const PackagesTitleIcon = styled.h4`
  font-size: 30px;
  margin: 25px 0;
`
