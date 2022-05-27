import Link from "next/link"
import { IntSocial } from "../../../../typescript/interfaces/Layout/interface";
import { SocialWrapper } from "./styles";
const Social = ({icon,name,path}:IntSocial) => {
    return(
        <SocialWrapper>
            <Link href={path}>
                <a title={name}>
                    {icon}
                </a>
            </Link>
        </SocialWrapper>
    )
}
export default Social;