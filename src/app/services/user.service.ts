import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private apollo: Apollo) {}

  getUsers(id: String, name: String) {
    return this.apollo.query({
      query: gql`query GetAccount($id: String!,$name:String!){
        usersByIdAndName(id: $id, name: $name) {
          id
          name
          email
          age 
          accounts{
              accountId
              accountType
          }   
        }
      }
    }`,
      variables: { id, name },
    });
  }
}
