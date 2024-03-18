import React from 'react';
import { LinkRedirectRR } from './link-redirect.styled';

type Props = {
  label: string;
  to: string;
};

function LinkRedirect({label,to, ...props} : Props) {
  return (
   <LinkRedirectRR to={to}>
    <span>{label}</span>
    <i aria-hidden="true"></i>
    <i aria-hidden="true"></i>
    <i aria-hidden="true"></i>
    <i aria-hidden="true"></i>
   </LinkRedirectRR>
  )
}

export default LinkRedirect;