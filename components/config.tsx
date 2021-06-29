export const LatestCarts = /* GraphQL */`
  query LatestCarts {
    checkouts(first: 20, channel: "default-channel") {
      edges {
        node {
          id
          user {
            firstName
          }
          lines {
            variant {
              product {
                name
                thumbnail {
                  url
                }
              }
            }
          }
          totalPrice {
            gross {
              amount
            }
          }
        }
      }
    }
  }
`;
