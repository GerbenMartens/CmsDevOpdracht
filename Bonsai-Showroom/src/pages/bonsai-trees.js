import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import {
  Wrapper,
  Image,
  BottomEdgeDown,
  BottomEdgeUp,
  Bonsai
} from "../pageStyles/pageStyles"
import { COLORS } from "../constants"

const BonsaisPage = () => {
    const {
      wpcontent: {
      page: {
        bonsaisMeta: {  
        bonsaiPageDescription,
        bonsaiPageHeaderPicture
        }
      },
      bonsaiTrees: {
        edges: bonsaiTrees
      }
    }} = useStaticQuery(graphql`
    query {
        wpcontent {
        page(id: "bonsai-trees", idType: URI) {
          id
          bonsaisMeta {
            bonsaiPageDescription
            bonsaiPageHeaderPicture {
            sourceUrl
            imageFile {
                childImageSharp {
                    fluid (quality:50) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              altText
            }
          }
        }
        bonsaiTrees {
            edges {
                node {
                    bonsai {
                        artist
                        fieldGroupName
                        size
                        tree
                        profile {
                          altText
                          sourceUrl
                          imageFile {
                            childImageSharp {
                              fluid(quality: 50, grayscale: true) {
                                ...GatsbyImageSharpFluid_withWebp
                              }
                            }
                          }
                        }             
                  }
                  slug
                }
              }
            }
          }
        }
      
    `)
    return (
        <Layout>
        <SEO title="Bonsais" />
          <Wrapper bonsaisColor={COLORS.BLACK} descriptionColor={COLORS.SECONDARY}>
            <div className="banner">
              <Image fluid={bonsaiPageHeaderPicture.imageFile.childImageSharp.fluid} alt={bonsaiPageHeaderPicture.altText} />
              <BottomEdgeDown color={COLORS.SECONDARY} />
            </div>
            <div className="description">
              <h2>We are a bonsai tree showroom</h2>
              <p>{bonsaiPageDescription}</p>
              <BottomEdgeUp color={COLORS.BLACK} />
            </div>
            <div className="bonsais">
              <h2>Our bonsai trees</h2>
              <div className="bonsai-items">
                {bonsaiTrees.map(({node: {bonsai, slug}}) => (
                  <Bonsai to={`/${slug}`} key={slug}>
                    <Image fluid={bonsai.profile.imageFile.childImageSharp.fluid} alt={bonsai.profile.altText} />
                    <div className="bonsai-info">
                      <p>{bonsai.tree}</p>
                      <p>{bonsai.artist}</p>
                    </div>
                    </Bonsai>
                ))}
              </div>
            </div>
          </Wrapper>
        </Layout>
    )
}

export default BonsaisPage