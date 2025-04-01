export const getArticlesQuery = `
query articles {
  articles_connection {
    nodes {
      title
      documentId
      slug
      description
      cover {
        url
      }
      author {
        name
      }
      category {
        name
      }
      createdAt
      richText
    }
  }
}
`;
export const getArticlesQueryBySlug = `
query articles($slug: String!) {
  articles_connection(filters:  {
     slug:  {
        eq: $slug
     }
  }) {
    nodes {
      title
      documentId
      slug
      description
      cover {
        url
      }
      category {
        name
      }
      createdAt
      richText
      author {
        name
      }
    }
  }
}
`;
export const getArticleSameTopic = `
query getArticleSameTopic($name: String!) {
  articles_connection(filters:  {
     category:  {
        name:  {
           eq: $name
        }
     }
  }) {
    nodes {
      title
      slug
      description
      cover {
        url
      }
      createdAt
      author {
        name
      }
    }
  }
}`;
