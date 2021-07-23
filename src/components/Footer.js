import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
// import logo from '../img/logo.svg'
// import facebook from '../img/social/facebook.svg'
// import instagram from '../img/social/instagram.svg'
// import twitter from '../img/social/twitter.svg'
// import vimeo from '../img/social/vimeo.svg'

const Footer = class extends React.Component {
  render() {
    console.log(this.props.data.markdownRemark.html)
    return (
      <footer
      className="u-align-center u-clearfix u-footer u-grey-80 u-footer"
      id="sec-d5e7"
    >
      <div className="u-clearfix u-sheet u-sheet-1">
        <p className="u-small-text u-text u-text-variant u-text-1" dangerouslySetInnerHTML={{__html:this.props.data.markdownRemark.html}}>
          
        </p>
      </div>
    </footer>
    )
  }
}

export default () => (
  <StaticQuery
    query={graphql`
      query FooterQuery {
        markdownRemark(
           frontmatter: { templateKey: { eq: "footer" } } 
        ) {
          html
          id
        }
      }
    `}
    render={(data, count) => <Footer data={data} count={count} />}
  />
)
