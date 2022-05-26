//  20 posts
query allPosts {
    posts(first: 20, where: {orderby: {field: DATE, order: DESC}}) {
      nodes {
        date
        id
        title
        excerpt
        slug
      }
    }
  }
//  ssr

//  post by a slug