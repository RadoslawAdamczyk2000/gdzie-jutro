import { menu } from "../../../../data/menu";
import MenuItem from "./MenuItem";
import { MenuWrapper } from "./styles";

const Menu = () => {
    return(
        <MenuWrapper>
            {menu.map(({isExpand,path,submenu,title},key:number) =>
                <MenuItem
                    isExpand={isExpand}
                    key={key}
                    path={path}
                    submenu={submenu}
                    title={title}
                />
            )}
        </MenuWrapper>
    )
}
export default Menu;