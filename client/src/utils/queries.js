import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query me {
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
    destinations {
      location
      city
      streetAddress
      zipcode
      state
      fullAddress
    }
  }

  query user($username: String!) {
    user(username: $username) {
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

  query users {
    users {
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
