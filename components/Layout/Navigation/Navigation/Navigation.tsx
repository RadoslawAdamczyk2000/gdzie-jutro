import Brand from "../Brand/Brand"
import Menu from "../Menu/Menu";
import Socials from "../Socials/Socials";
import { NavigationWrapper } from "./styles";

const Navigation = () => {
    return(
        <>
            <NavigationWrapper className="desktop">
                <Brand/>
                <Menu/>
                <div>
                        <Socials/>
                </div>
            </NavigationWrapper>
            {/* <nav className="mobile">
                <div>
                    <Brand/>
                    <div>

                    </div>
                </div>
                <div>
                    <Menu/>
                </div>
            </nav> */}
        </>
    )
}
export default Navigation;