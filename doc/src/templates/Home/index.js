import React from "react"
import { Link, graphql } from "gatsby"
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer"

import Layout from "../../components/Layout"
import SEO from "../../components/seo"

export default ({ data }) => {
  const { allMdx, mdx } = data
  return (
    <Layout>
      <SEO title={mdx.frontmatter.title} description={mdx.excerpt} />
      <div>
        <h1>{mdx.frontmatter.title}</h1>
        <MDXRenderer>{mdx.body}</MDXRenderer>
        <br />
        <br />
        <h2>{allMdx.totalCount} examples for using the component</h2>
        <ul>
          {data.allMdx.edges.map(({ node }) => (
            <li key={node.id}>
              <Link to={node.frontmatter.slug}>{node.frontmatter.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        slug
      }
      body
      excerpt(pruneLength: 100)
    }
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
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
          excerpt(pruneLength: 100)
        }
      }
    }
  }
`
