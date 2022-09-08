import { gql } from '@apollo/client';

export const QUERY_ME = gql`
query Query {
    me {
      _id
      firstName
      lastName
      DOB
      smoker
    }
  }
`;

// export const QUERY = gql``;