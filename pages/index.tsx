import type { NextPage } from "next";
import fetcher from "../lib/wordpress/fetcher";
import { ALL_POSTS } from "../lib/wordpress/api";
interface i {
  excerpt:string;
  title:string;
}
const Page:NextPage = () => {
  return( 
    <div>
     asd
    </div>
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
