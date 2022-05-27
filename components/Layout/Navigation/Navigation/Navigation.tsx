import { AnimatePresence,motion } from "framer-motion";
import { useState } from "react";
import Brand from "../Brand/Brand"
import Menu from "../Menu/Menu";
import MenuButton from "../Menu/MenuButton";
import Socials from "../Socials/Socials";
import { NavigationWrapper } from "./styles";

const Navigation = () => {
    const [isOpenMenu,setOpenMenu] = useState(false);
    return(
        <>
            <NavigationWrapper className="desktop">
                <Brand/>
                <Menu/>
                <div>
                    <Socials/>
                </div>
            </NavigationWrapper>
            <NavigationWrapper className="mobile">
                <div>
                    <Brand/>
                    <Socials/>
                    <MenuButton
                        isActive={isOpenMenu}
                        handle={() => setOpenMenu(!isOpenMenu)}
                    />
                </div>
                {
                    isOpenMenu &&
                    <AnimatePresence>
                        <motion.div
                            initial={{opacity:0,visibility:'hidden'}}
                            animate={{opacity:1,visibility:'visible'}}
                            exit={{opacity:0,visibility:'hidden'}}
                        >
                            <Menu/>
                        </motion.div>
                    </AnimatePresence>
                }
            </NavigationWrapper>
        </>
    )
}
export default Navigation;