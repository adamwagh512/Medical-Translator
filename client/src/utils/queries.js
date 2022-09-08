import { gql } from '@apollo/client';

export const QUERY_USER = gql`
query singleUser{
    User{
        _id
        username
        medicalHistory
    }
}`;

export const QUERY_ME = gql`
query me{
    me {
        _id
        username
        medicalHistory
    }
}`;