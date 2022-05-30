import type { NextPage } from "next";
import fetcher from "../lib/wordpress/fetcher";
import { ALL_POSTS } from "../lib/wordpress/api";
import LayoutPage from "../schemas/LayoutPage";
import Hero from "../components/Page/Home/Hero/Hero";
import Article from "../components/All/Article/Article";
interface i {
  excerpt:string;
  title:string;
}
const Page:NextPage = () => {
  return( 
    <LayoutPage
      title=''
      description=""
      image=""
    >
      <>
        <Hero/>
        <main className='home'>
          <section>
            <Article
              content="Niewątpliwie bardzo ważną rolę w historii polskiego autostopu odegrała PRL-owska popkultura. Znajdował się on w niejednym jej tekście. Zyskał bowiem tak dużą popularność i tak bardzo wpisał się w polską rzeczywistość, iż odzwierciedlanie go w kulturze masowej było czymś naturalnym. Autostop zaczął stanowić stały punkt odniesienia w rzeczywistości – także tej artystycznej."
              image="https://images.unsplash.com/photo-1564694202883-46e7448c1b26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
              isHome={true}
              link='#'
              title="Autostop w popkulturze PRL"
            />
          </section>
          asd
        </main>
      </>
    </LayoutPage>
  );
};

export default Page;

export const getStaticProps = async () => {
  const response = await fetcher(ALL_POSTS);
  const allPosts = response.data.posts.nodes;
  return{
    props:{allPosts},
    revalidate:1,
  }
}
