import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import styles from "./styles.module.css"

const ExampleList = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(
        sort: { fields: [frontmatter___date], order: ASC }
        filter: { frontmatter: { slug: { ne: "/" } } }
      ) {
        totalCount
        edges {
          node {
            id
            frontmatter {
              title
              slug
            }
          }
        }
      }
    }
  `)
  const { allMdx } = data
  return (
    <>
      <h3>{allMdx.totalCount} examples for using the component</h3>
      <ul className={styles.example_list}>
        {data.allMdx.edges.map(({ node }) => (
          <li key={node.id}>
            <Link to={node.frontmatter.slug}>{node.frontmatter.title}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default ExampleList
