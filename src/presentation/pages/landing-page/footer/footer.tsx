import React from 'react'
import { FooterContent, FooterContentP, FooterContentLi } from './styles'
import TwitterIcon from '@mui/icons-material/Twitter'
import FacebookIcon from '@mui/icons-material/Facebook'

function Footer() {
  return (
    <FooterContent>
      <FooterContentP>
        Images courtesy of <a href="http://unsplash.com/">unsplash</a>.
      </FooterContentP>
      <FooterContentP>
        Why are you even reading this?! There's never anything interesting in
        the footer!
      </FooterContentP>
      <ul>
        <FooterContentLi>
          <a href="#">
            <TwitterIcon sx={{ color: '#e07e7b' }} />
          </a>
        </FooterContentLi>
        <FooterContentLi>
          <a href="#">
            <FacebookIcon sx={{ color: '#e07e7b' }} />
          </a>
        </FooterContentLi>
      </ul>
    </FooterContent>
  )
}

export default Footer
