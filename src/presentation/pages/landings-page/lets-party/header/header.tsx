import React from 'react'
import {
  HeaderContent,
  HeaderTitle,
  NavItem,
  HeaderNav,
  NavLinkItem,
} from './styles'

function Header() {
  return (
    <HeaderContent>
      <HeaderTitle>
        <NavLinkItem href="#">Let't start...</NavLinkItem>
      </HeaderTitle>
      <HeaderNav>
        <NavItem>
          <NavLinkItem href="#">Tours</NavLinkItem>
        </NavItem>
        <NavItem>
          <NavLinkItem href="#">About</NavLinkItem>
        </NavItem>
        <NavItem>
          <NavLinkItem href="#">Contact</NavLinkItem>
        </NavItem>
      </HeaderNav>
    </HeaderContent>
  )
}

export default Header
