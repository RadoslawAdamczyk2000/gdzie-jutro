//  20 posts

export const ALL_POSTS = `
    query allPosts {
        posts {
            nodes {
                date
                id
                title
                excerpt
                slug
            }
        }
    }
`;
export const LASTEST_POSTS = `
query getLastestPosts {
    posts(first: 25) {
      nodes {
        title
        excerpt
        seo {
          opengraphImage {
            mediaItemUrl
          }
        }
      }
    }
  }
`;
//  ssr

//  post by a slug
