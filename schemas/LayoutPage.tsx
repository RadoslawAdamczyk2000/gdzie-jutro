import { ThemeProvider } from 'styled-components';
import Seo from '../components/All/Seo/Seo';
import Navigation from '../components/Layout/Navigation/Navigation/Navigation';
import { Global } from '../styles/Global';
import { theme } from '../styles/styles';
import { IntLayoutPage } from '../typescript/interfaces/Layout/interface';
const LayoutPage = ({canonical,children,description,image,robots,title,typePage='website'}:IntLayoutPage) => {
    return(
        <ThemeProvider theme={theme}>
            <Seo
                canonical={canonical}
                description={description}
                image={image}
                robots={robots}
                title={title}
                typePage={typePage}
            />
            <Navigation/>
            <Global/>
            <>
                {children}
            </>
        </ThemeProvider>
    )
}
export default LayoutPage;