import Brand from "../Brand/Brand"
import Menu from "../Menu/Menu";

const Navigation = () => {
    return(
        <>
            <nav className="desktop">
                <Brand/>
                <div>
                    <Menu/>
                </div>
            </nav>
            {/* <nav className="mobile">
                <div>
                    <Brand/>
                </div>
                <div>
                    <Menu/>
                </div>
            </nav> */}
        </>
    )
}
export default Navigation;