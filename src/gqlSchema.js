import gql from 'graphql-tag'

export const CreateRecipe = gql`
  mutation createRecipe($id: ID!, $title: String!, $method: String!) {
    createRecipe(
      input: {
        id: $id, title: $title, method: $method
      }
    ) {
      id
      title 
      method
    }
  }
`

export const listRecipes = gql`
  query listRecipes {
    listRecipes {
      items {
        id
        title
      }
    }
  }
`
