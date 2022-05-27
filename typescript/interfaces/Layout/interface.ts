import { ReactElement } from "react";
import { IntSeo } from "../All/interface";
export interface IntLayoutPage extends IntSeo {
    children:ReactElement;
}
export interface IntMenuItem extends IntSubmenuMenuItem {
    isExpand:boolean;
    submenu?:any[];
}
export interface IntSubmenuMenuItem {
    path:string;
    title:string;
}
