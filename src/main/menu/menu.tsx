import React from "react";
import  MenuItem  from "./menu-item";
import { MenuBar } from './styles';

const MENU_ITENS = [
    {
        id: '0',
        title: 'Life is a Party',
        description: 'Landing page - Unmissable Adventure Tours With Your Friends ',
        link: 'lets-party',
    },
    {
        id: '1',
        title: 'Landing Page 2 - playground',
        description: 'Landing page - Testing others landing pages examples',
        link: '/teste'
    },
    {
        id: '2',
        title: 'Landing Page 3 - playground',
        description: 'Landing page - Testing others landing pages examples',
        link: '/teste'
    },
    {
        id: '3',
        title: 'Landing Page 4 - playground',
        description: 'Landing page - Testing others landing pages examples',
        link: '/teste'
    }
]


export default function Menu() {
    return (
        <MenuBar>
            {MENU_ITENS.map((item, index) => 
                <MenuItem key={index} title={item.title} description={item.description} url={item.link} /> )}
        </MenuBar>
    );
}