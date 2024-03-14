import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {  FaFile } from "react-icons/fa";


export const SurfaceBreadcrumbs = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 16px 12px 16px;
  color: ${props => props.theme.interactive.link.color};
`;

export const LinkCustomBreadcrumbs = styled(Link)`
  font-size: 18px;
  margin-left: 8px;
  margin-right: 8px;
  color: ${props => props.theme.interactive.link.color};
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.interactive.link.hover};
  }
`;

export const FirtsLinkBreadcrumbs = styled.h4`
  font-size: 18px;
  color: ${props => props.theme.interactive.link.disable};
  margin-left: 8px;
  margin-right: 8px;
  cursor: default;
`;

export const IconTitleBreadcrumbs = styled(FaFile)`
  margin-left: 8px;
  margin-right: 8px;
  cursor: default;
`;

