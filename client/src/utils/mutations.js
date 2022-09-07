import { gql } from '@apollo/client';

// export const QUERY = gql``;

export const TRANSLATETEXT = gql`

mutation translateText($words: String!, $translateFrom: String!, $translateTo: String!) {
    translateText(words: $words, translateFrom: $translateFrom, translateTo: $translateTo){
      translatedWords
    }
  }
`;