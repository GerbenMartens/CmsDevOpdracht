import React from "react"
import {graphql} from 'gatsby'
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import {Wrapper, Image} from "./templateStyles/bonsaiStyles"

const BonsaiTemplate = ({data: {wpcontent: {bonsaiTree: {bonsai, styles: {edges: styles}}}}}) => {
    const {picture1, picture2, picture3} = bonsai.pictures
    const pictures = [picture1, picture2, picture3]
    return (
    <Layout>
        <SEO title="Bonsai" />
        <Wrapper>
            <div className="bonsai-container">
                <div className="bonsai-image">
                    <Image fluid={bonsai.profile.imageFile.childImageSharp.fluid} alt={bonsai.profile.altText}/>
                    <div className="styles">
                        {styles.map(({node: style}) => (
                            <div key={style.name} className="style">{style.name}</div>
                        ))}
                    </div>
                </div>
                <div className="bonsai-info">
                    <h2>{bonsai.tree}</h2>
                    <h3>{bonsai.artist}</h3>
                    <p className="info"><strong>Size: {bonsai.size} cm</strong></p>
                </div>
            </div>
            <div className="bonsai-piuctures">
                {pictures.map((picture, i) => (
                    <div key={i} className="bonsai-picture">
                    {picture ? (                        
                        <Image fluid={picture.imageFile.childImageSharp.fluid} alt={picture.altText} />                        
                    ) : (
                        <span></span>
                    )}      
                    </div>
                ))}
            </div>
        </Wrapper>
    </Layout>
    )
}

export default BonsaiTemplate

export const pageQuery = graphql`
query ($id: ID!) {
    wpcontent {
    bonsaiTree(id: $id, idType: ID) {
      bonsai {
        artist
        fieldGroupName
        profile {
            altText
            sourceUrl
                  imageFile {
                    childImageSharp {
                      fluid(quality: 75, grayscale: true) {
                        ...GatsbyImageSharpFluid_withWebp
                      }
                    }
                  }
        }
        pictures {
          picture3 {
            altText
            sourceUrl
                  imageFile {
                    childImageSharp {
                      fluid(quality: 75, grayscale: true) {
                        ...GatsbyImageSharpFluid_withWebp
                      }
                    }
                  }
          }
          picture2 {
            altText
            sourceUrl
                  imageFile {
                    childImageSharp {
                      fluid(quality: 75, grayscale: true) {
                        ...GatsbyImageSharpFluid_withWebp
                      }
                    }
                  }
          }
          picture1 {
            altText
            sourceUrl
                  imageFile {
                    childImageSharp {
                      fluid(quality: 75, grayscale: true) {
                        ...GatsbyImageSharpFluid_withWebp
                      }
                    }
                  }
          }
        }
        size
        tree
      }
      styles {
        edges {
          node {
            name
          }
        }
    }
      }
    }
  }
`