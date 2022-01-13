import { ApolloClient, InMemoryCache } from '@apollo/client'
import { offsetLimitPagination } from "@apollo/client/utilities";

const apolloClient = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_BASE_URL + '/api/graphql',
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          feed: offsetLimitPagination()
        },
      },
    },
  }),
})

export default apolloClient
