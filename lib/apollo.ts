import { ApolloClient, InMemoryCache } from '@apollo/client'

const apolloClient = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_BASE_URL + '/api/graphql',
  cache: new InMemoryCache(),
})

export default apolloClient
