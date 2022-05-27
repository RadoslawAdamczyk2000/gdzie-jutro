import Seo from '../components/All/Seo/Seo';
import { Global } from '../styles/Global';
import { IntLayoutPage } from '../typescript/interfaces/Layout/interface';
const LayoutPage = ({canonical,children,description,image,robots,title,typePage='website'}:IntLayoutPage) => {
    return(
        <div>
            <Seo
                canonical={canonical}
                description={description}
                image={image}
                robots={robots}
                title={title}
                typePage={typePage}
            />
            <Global/>
            <>
                {children}
            </>
        </div>
    )
}
export default LayoutPage;