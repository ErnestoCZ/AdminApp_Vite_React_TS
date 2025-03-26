import {graphql} from '@/generated/gql'

export const GET_ALL_USERS_QUERY = graphql(`
query Query($limit: Int, $offset: Int) {
  getUsers(limit: $limit, offset: $offset) {
    items {
      id
      firstName
      lastName
      email
      status
    }
    totalCount
  }
}
`)