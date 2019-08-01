const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allMdx {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    result.data.allMdx.edges.forEach(({ node }) => {
      const slug = node.frontmatter.slug
      let component = path.resolve(`./src/templates/Page/index.js`)
      if (slug === "/") {
        component = path.resolve(`./src/templates/Home/index.js`)
      }
      createPage({
        path: slug,
        component,
        context: {
          slug,
        },
      })
    })
  })
}
