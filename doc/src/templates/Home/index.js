import React from "react"
import { graphql } from "gatsby"
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer"
import Layout from "../../components/Layout"
import SEO from "../../components/seo"

export default ({ data }) => {
  const { mdx } = data
  return (
    <Layout>
      <SEO title={mdx.frontmatter.title} />
      <div style={{ marginTop: "30px" }}>
        <h2>{mdx.frontmatter.title}</h2>
        <MDXRenderer>{mdx.body}</MDXRenderer>
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
    }
  }
`
