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
`
//  ssr

//  post by a slug