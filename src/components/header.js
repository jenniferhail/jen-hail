import { Link } from "gatsby"
import React from "react"
import { createGlobalStyle } from "styled-components"
import styled from "styled-components"
// import "./header.scss"
import "fontsource-roboto"

export default function Header(props) {
  return (
    <HeaderTag className="header">
      <GlobalStyle />
      <div className="wrapper">
        <div className="row">
          <nav className="nav">
            <ul className="list">
              <li className="item">
                <Link to="/work">Work</Link>
              </li>
              <li className="item">
                <Link to="/notes">Notes</Link>
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
    </HeaderTag>
  )
}

const HeaderTag = styled.header`
  position: fixed;
  width: 100%;
  padding: 15px 30px 15px;
  top: 0;
  left: 0;
  right: 0;
  background-color: #f5f1ed;
  border-bottom: 1px solid #dddddd;
  z-index: 10;
`

const GlobalStyle = createGlobalStyle`
  // html {
  //   font-size: 16px;
  //   font-family: "Roboto";
  // }
  body {
    color: ${props => (props.theme === "white" ? "white" : "black")};
  }
`
