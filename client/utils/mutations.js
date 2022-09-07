import { gql } from '@apollo/client';

export const ADD_ACCOUNT = gql`
mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      User {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      User {
        _id
        username
        medicalHistory{
            _id
            medicalHistoryText
        }
      }
    }
  }`;

export const ADD_MEDICAL_HISTORY = gql`
  mutation addMedicalHistory($username: String!)
  medicalHistory{
    _id: ID
    firstName: String
    lastName: String
    DOB: String
    Smoker: Boolean
    Meds: [Med]
    Allergies: [Allergy]
    Contact: [Contact]
    Physician: [Physician]
    Surgery: [Surgery]
    History: [History]
    Pain: [Pain]
    Emergency:[Emergency]
  }`

export const ADD_MED = gql`
  mutation addMed($medName: String!, $dose: Int!, $unit: String!) {
    addMed ($medName: $medName, $dose: $dose, $unit: $unit){
    _id: ID
    medName
    dose
    unit
  }
}
  `;

export const ADD_ALLERGY = gql` 
  mutation addAllergy($allergy: String!, $reaction: String!) {
    addAllergy ($allergy: $allergy, $reaction: $reaction) {
_id
allegries
reaction
    }
  }
  `;

  export const ADD_HISTORY = gql`
  mutation addHistory($issue: String!){
    addHistory($issue: $issue){
        _id
        issue
    }
  }`;

  export const ADD_CONTACT = gql`
  mutation addContact()`;

  export const ADD_PHYSICIAN = gql`
  mutation addPhysician()`;

  export const ADD_SURGERY = gql`
  mutation addSurgery()`;

  export const ADD_PAIN = gql`
  mutation addPain()`;