import React from 'react'
import { TitleLanding, HeaderLandingPageContent, HeaderLandingPageTitle } from './styles';
import { Breadbrumbs } from './components/breadrumbs';

type Props = {
  children: React.ReactNode;
  title: string;
  isShowBreacrumbs?: boolean
}
function LandingContent({ children, title, isShowBreacrumbs = true }: Props) {
  return (
    <div>
        <HeaderLandingPageContent>
          <HeaderLandingPageTitle>
          <TitleLanding>Landing Page Playground</TitleLanding>
          </HeaderLandingPageTitle>
          {
            isShowBreacrumbs &&
            <Breadbrumbs firstLabelLink={title} />
          }
        </HeaderLandingPageContent>
        {children}
    </div>    
  )
}

export default LandingContent;
