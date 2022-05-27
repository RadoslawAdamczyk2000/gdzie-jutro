import { useState } from "react";
import { IntMenuButton } from "../../../../typescript/interfaces/Layout/interface";
import { MenuButtonWrapper } from "./styles";
const MenuButton = ({isActive,handle}:IntMenuButton) => {
    console.log(typeof handle)
    return(
        <MenuButtonWrapper active={isActive} onClick={handle}>
            <span/>
            <span/>
        </MenuButtonWrapper>
    )
}
export default MenuButton;