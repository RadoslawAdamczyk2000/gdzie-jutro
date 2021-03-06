import Document, {Html,Head,Main,NextScript,DocumentContext} from "next/document";
import { ServerStyleSheet } from "styled-components";

class MyDocument extends Document {
    static async getInitialProps(ctx:DocumentContext) {
      const sheet = new ServerStyleSheet();
      const originalRenderPage = ctx.renderPage;
      try {
        ctx.renderPage = () =>
          originalRenderPage({
            enhanceApp: (App) => (props) =>
              sheet.collectStyles(<App {...props} />),
          });
        const initialProps = await Document.getInitialProps(ctx);
        return {
          ...initialProps,
          styles: (
            <>
              {initialProps.styles}
              {sheet.getStyleElement()}
            </>
          ),
        };
      } finally {
        sheet.seal();
      }
    }
    render() {
      return (
        <Html>
          <Head>
            <meta property="og:site_name" content='RadWEB'/>
            <meta name="twitter:site" content="@rad_web2000"/>
            <meta name="twitter:creator" content="@rad_web2000"/>
          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      );
    }
  }
  export default MyDocument;