import type { NextPage } from "next";
import fetcher from "../lib/wordpress/fetcher";
import { ALL_POSTS } from "../lib/wordpress/api";

const Home:NextPage = ({allPosts}:{allPosts:object}) => {
  const posts = allPosts;
  console.log(posts);
  return( 
    <div>
      {posts.slice(0,5).map(({excerpt,title}) =>
        <div>
          <h2>{title}</h2>
          <p dangerouslySetInnerHTML={{__html:excerpt}}/>
        </div>
      )}
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const response = await fetcher(ALL_POSTS);
  const allPosts = response.data.posts.nodes;
  return{
    props:{allPosts},
    revalidate:1,
  }
}
