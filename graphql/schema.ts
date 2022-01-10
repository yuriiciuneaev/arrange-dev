import { gql } from 'apollo-server-micro'

export const typeDefs = gql`
  type Activity {
    id: String
    name: String
    images: [String]
    description: String
    price: Float
    spotCnt: Int
    startDate: String
    endDate: String
  }

  type Query {
    activities: [Activity]!
  }
`
