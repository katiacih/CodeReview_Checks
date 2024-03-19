import React from "react";
import  MenuItem  from "./menu-item";
import { MenuBar } from './styled';
import { ThumbDown } from "@mui/icons-material";

const MENU_ITENS = [
    {
        id: '0',
        title: 'Life is a Party',
        description: 'Landing page - Unmissable Adventure Tours With Your Friends ',
        link: 'lets-party',
        thumbPathRelative : '../../assets/letspartythumb.png',
    },
    {
        id: '1',
        title: 'Landing Page 2 - playground',
        description: 'Landing page - Testing others landing pages examples',
        link: '/teste',
        thumbPathRelative : '../../assets/letspartythumb.png',
    },
    {
        id: '2',
        title: 'Landing Page 3 - playground',
        description: 'Landing page - Testing others landing pages examples',
        link: '/teste',
        thumbPathRelative : '../../assets/letspartythumb.png',
    },
    {
        id: '3',
        title: 'Landing Page 4 - playground',
        description: 'Landing page - Testing others landing pages examples',
        link: '/teste',
        thumbPathRelative : '../../assets/letspartythumb.png',
    }
]


export default function Menu() {
    return (
        <MenuBar>
            {MENU_ITENS.map((item) => 
                <MenuItem key={item.id} title={item.title} description={item.description} url={item.link}  thumbPathRelative={item.thumbPathRelative} /> )}
        </MenuBar>
    );
}