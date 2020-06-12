import React from "react"
import styled from "styled-components"

import { rhythm } from "../utils/typography"

class Module extends React.Component {
  render() {
    const { type, title, children } = this.props

    // if type = description/stories/share/title/blog/fact/subscribe

    // if (location.pathname === rootPath || location.pathname === blogPath) {
    //   header = (
    //     <h1
    //       style={{
    //         ...scale(1.5),
    //         marginBottom: rhythm(1.5),
    //         marginTop: 0,
    //       }}
    //     >
    //       <Link
    //         style={{
    //           boxShadow: `none`,
    //           textDecoration: `none`,
    //           color: `inherit`,
    //         }}
    //         to={location.pathname === blogPath ? `/blog/` : `/`}
    //       >
    //         {title}
    //       </Link>
    //     </h1>
    //   )
    // } else {
    //   header = (
    //     <h3
    //       style={{
    //         fontFamily: `Montserrat, sans-serif`,
    //         marginTop: 0,
    //       }}
    //     >
    //       <Link
    //         style={{
    //           boxShadow: `none`,
    //           textDecoration: `none`,
    //           color: `inherit`,
    //         }}
    //         to={`/`}
    //       >
    //         {title}
    //       </Link>
    //     </h3>
    //   )
    // }

    return (
      <Wrapper>
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
          }}
        >
          <h3>{title}</h3>
          <div>{children}</div>
        </div>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div``

export default Module
