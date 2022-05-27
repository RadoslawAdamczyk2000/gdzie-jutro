import { socials } from "../../../../data/socials"
import { IntSocial } from "../../../../typescript/interfaces/Layout/interface"
import Social from "./Social"
import { SocialsWrapper } from "./styles"
const Socials = () => {
    return(
        <SocialsWrapper>
            {socials.map(({icon,name,path}:IntSocial,key:number) =>
                <Social
                    icon={icon}
                    key={key}
                    name={name}
                    path={path}
                />
            )}
        </SocialsWrapper>
    )
}
export default Socials;