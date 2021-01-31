import { Link } from "gatsby"
import React from "react"
import { createGlobalStyle } from "styled-components"
// import styled from "styled-components"
import "fontsource-roboto"

export default function Header(props) {
  return (
    <header className="header">
      <GlobalStyle />
      <div className="wrapper">
        <div className="row">
          <nav className="nav">
            <ul className="list">
              <li className="item">
                <Link to="/#work">Work</Link>
              </li>
              <li className="item">
                <Link to="/#notes">Notes</Link>
              </li>
            </ul>
          </nav>
          <h1 className="logo">
            <Link to="/">{props.headerText}</Link>
          </h1>
          <div className="location">
            <ul className="list">
              <li className="item">KY</li>
              <li className="item">MI</li>
            </ul>
            <div className="note">
              I'll be moving to Detroit later this year. :)
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

const GlobalStyle = createGlobalStyle`
  // html {
  //   font-size: 16px;
  //   font-family: "Roboto";
  // }
  body {
    color: ${props => (props.theme === "white" ? "white" : "black")};
  }
`
