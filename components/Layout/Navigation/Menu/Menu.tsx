import { menu } from "../../../../data/menu";
import MenuItem from "./MenuItem";

const Menu = () => {
    return(
        <menu>
            {menu.map(({isExpand,path,submenu,title},key:number) =>
                <MenuItem
                    isExpand={isExpand}
                    key={key}
                    path={path}
                    submenu={submenu}
                    title={title}
                />
            )}
        </menu>
    )
}
export default Menu;