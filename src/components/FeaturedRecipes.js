import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import RecipesList from "../components/RecipesList"

const query = graphql`
  {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        title
        cookTime
        prepTime
        servings
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`

const FeaturedRecipes = () => {
  const data = useStaticQuery(query)
  const recipes = data.allContentfulRecipe.nodes

  return (
    <section className="featured-recipes">
      <h5>Look at this Awesmomesouce!</h5>
      <RecipesList recipes={recipes} />
    </section>
  )
}

export default FeaturedRecipes
