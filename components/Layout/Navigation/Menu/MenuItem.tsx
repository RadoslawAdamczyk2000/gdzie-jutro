import { AnimatePresence,motion } from "framer-motion";
import Link from "next/link"
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { IntMenuItem, IntSubmenuMenuItem } from "../../../../typescript/interfaces/Layout/interface";
import { MenuItemWrapper } from "./styles";

const MenuItem = ({isExpand,submenu,path,title}:IntMenuItem) => {
    const [isOpen,setOpen] = useState(false)
    return(
        <>
            {
                isExpand ?
                <MenuItemWrapper className="expand" onMouseLeave={() => setOpen(false)}>
                    <div>
                        <Link href={path}>
                            <a>
                                {title}
                            </a>
                        </Link>
                        <div className="button" onClick={() => setOpen(!isOpen)}>
                            <FaAngleDown/>
                        </div>
                    </div>
                    {
                        isOpen &&
                        <AnimatePresence>
                            <motion.ul
                                initial={{opacity:0,visibility:'hidden'}}
                                animate={{opacity:1,visibility:'visible'}}
                                exit={{opacity:0,visibility:'hidden'}}
                            >
                                {submenu?.map(({path,title}:IntSubmenuMenuItem,key:number) =>
                                    <li key={key}>
                                    <Link href={path}>
                                            <a>
                                                {title}
                                            </a>
                                        </Link> 
                                    </li>
                                )}
                            </motion.ul>
                        </AnimatePresence>
                    }
                </MenuItemWrapper> :
                <MenuItemWrapper className="no-expand">
                    <div>
                        <Link href={path}>
                            <a>
                                {title}
                            </a>
                        </Link>
                    </div>
                </MenuItemWrapper>
            }
        </>
    )
}
export default MenuItem;