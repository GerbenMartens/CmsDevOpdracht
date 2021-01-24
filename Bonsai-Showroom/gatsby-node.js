const  {graphql} = require("gatsby")
const { createRemoteFileNode } = require(`gatsby-source-filesystem`)
const path = require("path")

exports.createPages = ({graphql, actions}) => {
  const {createPage} = actions
  return graphql(`{
  wpcontent {
    bonsaiTrees {
      edges {
        node {
          slug
          id
        }
      }
    }
  }
}
  `).then(result => {
    if(result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const bonsaiTrees = result.data.wpcontent.bonsaiTrees.edges
    bonsaiTrees.forEach(bonsai => {
      const {id, slug} = bonsai.node
      createPage({
        path: slug,
        component: path.resolve(`src/templates/bonsai.js`),
        context: {
          id, 
          slug
        }
      })
    })
    return result
  })

}

exports.createResolvers = async ({
    actions,
    cache,
    createNodeId,
    createResolvers,
    store,
    reporter,
  }) => {
    const { createNode } = actions
  
    await createResolvers({
      WPGraphql_MediaItem: {
        imageFile: {
          type: "File",
          async resolve(source) {
            let sourceUrl = source.sourceUrl
  
            if (source.mediaItemUrl !== undefined) {
              sourceUrl = source.mediaItemUrl
            }
  
            return await createRemoteFileNode({
              url: encodeURI(sourceUrl),
              store,
              cache,
              createNode,
              createNodeId,
              reporter,
            })
          },
        },
      },
    })
  }