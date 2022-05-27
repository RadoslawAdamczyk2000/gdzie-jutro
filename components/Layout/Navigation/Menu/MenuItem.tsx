import Link from "next/link"
import { IntMenuItem, IntSubmenuMenuItem } from "../../../../typescript/interfaces/Layout/interface";

const MenuItem = ({isExpand,submenu,path,title}:IntMenuItem) => {
    return(
        <>
            {
                isExpand ?
                <li>
                    <div>
                        <Link href={path}>
                            <a>
                                {title}
                            </a>
                        </Link>
                    </div>
                    <ul>
                        {submenu.map(({path,title}:IntSubmenuMenuItem,key:number) =>
                            <li key={key}>
                               <Link href={path}>
                                    <a>
                                        {title}
                                    </a>
                                </Link> 
                            </li>
                        )}
                    </ul>
                </li> :
                <li>
                    <div>
                        <Link href={path}>
                            <a>
                                {title}
                            </a>
                        </Link>
                    </div>
                </li>
            }
        </>
    )
}
export default MenuItem;