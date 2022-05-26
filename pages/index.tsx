import type { NextPage } from "next";
const Home: NextPage = () => {
  console.log(process.env.WORDPRESS_API_URL);
  return <div>asd</div>;
};

export default Home;
