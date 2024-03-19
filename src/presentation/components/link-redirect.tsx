import React from 'react';
import { LinkRedirectRR } from './link-redirect.styled';

type Props = {
  label: string;
  to: string;
};

function LinkRedirect({label,to, ...props} : Props): JSX.Element {
  return (
   <LinkRedirectRR to={to}>
    <span>{label}</span>
   </LinkRedirectRR>
  )
}

export default LinkRedirect;