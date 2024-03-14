import React from "react";
import { FirtsLinkBreadcrumbs, LinkCustomBreadcrumbs, SurfaceBreadcrumbs } from "./style";
import {  FaAngleRight, FaHome, FaFile } from "react-icons/fa";


type Props = {
    firstLabelLink?: string
}

export function  Breadbrumbs({firstLabelLink}: Props ){
    return ( 
        <SurfaceBreadcrumbs>
            <FaHome size={'18px'} color='#726a95' />
            <LinkCustomBreadcrumbs to="/">Home</LinkCustomBreadcrumbs>
            {
                firstLabelLink 
                && <>
                    <FaAngleRight size={'18px'} color='#726a95' />
                    <FaFile  size={'18px'} color='#c5d5db'/>
                    <FirtsLinkBreadcrumbs>{firstLabelLink}</FirtsLinkBreadcrumbs>      
                </>
            }
        </SurfaceBreadcrumbs>
    );
} 
