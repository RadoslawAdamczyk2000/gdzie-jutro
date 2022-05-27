import { MouseEventHandler, ReactElement } from "react";
import { IntSeo } from "../All/interface";
export interface IntLayoutPage extends IntSeo {
    children:ReactElement;
}
export interface IntMenuButton {
    handle:MouseEventHandler;
    isActive:boolean;
}
export interface IntMenuItem extends IntSubmenuMenuItem {
    isExpand:boolean;
    submenu?:any[];
}
export interface IntSocial {
    icon:ReactElement;
    name:string;
    path:string;
}
export interface IntSubmenuMenuItem {
    path:string;
    title:string;
}
