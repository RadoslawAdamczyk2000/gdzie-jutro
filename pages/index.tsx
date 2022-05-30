import type { NextPage } from "next";
import fetcher from "../lib/wordpress/fetcher";
import { LASTEST_POSTS } from "../lib/wordpress/api";
import LayoutPage from "../schemas/LayoutPage";
import Hero from "../components/Page/Home/Hero/Hero";
import Article from "../components/All/Article/Article";
import { Articles } from "../components/All/Article/styles";
import { IntArticlesMap } from "../typescript/interfaces/Page/interface";
import About from "../components/Page/Home/About/About";
const Page:NextPage = ({lastestPosts}:{lastestPosts:any|any[]}) => {
  const posts = lastestPosts.data.posts.nodes;
  return( 
    <LayoutPage
      title=''
      description=""
      image=""
    >
      <>
        <Hero
          image={posts[0].seo.opengraphImage.mediaItemUrl}
          title={posts[0].title}
        />
        <main className='home'>
          <Articles className='home'>
            {posts?.slice(1,8).map(({title,excerpt,seo}:IntArticlesMap,key:number) =>
              <>
                {seo.opengraphImage &&
                  <Article
                    key={key}
                    content={excerpt}
                    image={seo.opengraphImage.mediaItemUrl}
                    isHome={true}
                    link='#'
                    title={title}
                  />
                }
              </>
            )}
          </Articles>
          <About
            title="Gdzie jutro - kim jesteśmy?"
            content="W trzech słowach – niepoprawny wielbiciel historii, w szczególności starożytnej. Lubię rozmawiać z ludźmi, również z tymi dopiero co poznanymi w drodze. W podróży fascynuje mnie prawdziwe życie. I masa niesamowitych, nieopowiedzianych historii, którymi dzielą się ze mną napotkani ludzie. (Wyciąganie kciuka na poboczu bardzo ułatwia sprawę!) Poza tym jestem baristą, uczę się języków, którymi nikt inny nie mówi i potrafię sam zasznurować buciki. Podróżując, najczęściej kieruję się na wschód i południe"
          />
        </main>
      </>
    </LayoutPage>
  );
};

export default Page;

export const getStaticProps = async () => {
  const lastestPosts = await fetcher(LASTEST_POSTS);
  return{
    props:{lastestPosts},
    revalidate:1,
  }
}
