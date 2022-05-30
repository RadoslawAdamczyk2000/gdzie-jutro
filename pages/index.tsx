import type { NextPage } from "next";
import fetcher from "../lib/wordpress/fetcher";
import { LASTEST_POSTS } from "../lib/wordpress/api";
import LayoutPage from "../schemas/LayoutPage";
import Hero from "../components/Page/Home/Hero/Hero";
import Article from "../components/All/Article/Article";
import { Articles } from "../components/All/Article/styles";
import { IntArticlesMap } from "../typescript/interfaces/Page/interface";
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
             
                
              {console.log(seo.opengraphImage?.mediaItemUrl)}
              
            </>
            )}
          </Articles>
          asd
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
