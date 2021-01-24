import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import {
  Wrapper,
  Image,
  BottomEdgeDown,
  BottomEdgeUp,
  Bonsai,
} from "../pageStyles/pageStyles"
import { COLORS } from "../constants"

const IndexPage = () => {
  const {
    wpcontent: {
      page: {
        homeMeta: {
          homePageDescription,
          homePageFeaturedBonsais,
          homePageHeaderDescription,
          homePageHeaderPicture,
          homePageHeaderTitle,
        }
      }
    }
  } = useStaticQuery(graphql`
  query {
    wpcontent {
      page(id: "home-page", idType: URI) {
        id
        homeMeta {
          homePageDescription
          homePageHeaderTitle
          homePageHeaderPicture {
            altText
            sourceUrl
            imageFile {
              childImageSharp {
                fluid (quality:50) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          homePageFeaturedBonsais {
            ... on WPGraphql_BonsaiTree {
              id
              slug
              bonsai {
                fieldGroupName
                artist
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
            }
          }
          homePageHeaderDescription
        }
      }
    }
  }
`)
  return (
  <Layout>
    <SEO title="Home" />
    <Wrapper>
      <div className="banner">
        <Image fluid={homePageHeaderPicture.imageFile.childImageSharp.fluid} alt={homePageHeaderPicture.altText} />
        <div className="inner-div">
          <p className="header-title">{homePageHeaderTitle}</p>
          <p className="header-description">{homePageHeaderDescription}</p>
        </div>
        <BottomEdgeDown color={COLORS.BLACK} />
      </div>
      <div className="description">
        <p>{homePageDescription}</p>
        <BottomEdgeUp color={COLORS.PRIMARY} />
      </div>
      <div className="bonsais">
        <h2>Featured Bonsais</h2>
        <div className="bonsai-items">
        {homePageFeaturedBonsais.map(({bonsai, slug}) =>(
            <Bonsai key={slug} to={`/${slug}`}>
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
  </Layout>)
}

export default IndexPage
