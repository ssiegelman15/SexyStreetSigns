import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
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
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_VEHICLE = gql`
  mutation vehicleInfo($vehicle: inputVehicle!) {
    vehicleInfo(vehicle: $vehicle) {
      _id
      username
      email
      vehicleInfo {
        name
        make
        model
        mpg
        color
        carType
      }
    }
  }
`;

export const SAVE_DESTINATION = gql`
  mutation destinations($destination: inputDestination!) {
    destinations(destination: $destination) {
      _id
      username
      email
      destinations {
        location
        city
        streetAddress
        zipcode
        state
        fullAddress
      }
    }
  }
`;
