import type { NextPage } from "next";
import fetcher from "../lib/wordpress/fetcher";
import { ALL_POSTS } from "../lib/wordpress/api";
import LayoutPage from "../schemas/LayoutPage";
import Hero from "../components/Page/Home/Hero/Hero";
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
        asd
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
