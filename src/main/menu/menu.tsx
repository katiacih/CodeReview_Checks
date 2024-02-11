import React from "react";
import  MenuItem  from "./menu-item";
import { MenuBar } from './styles';

const MENU_ITENS = [
    {
        title: 'bases',
        description: 'bases de tese',
        link: '/teste'
    },
    {
        title: 'eyes',
        description: 'eyes de tese',
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