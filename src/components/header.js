import { Link } from "gatsby"
import React from "react"
import { createGlobalStyle } from "styled-components"
import "fontsource-roboto"

export default function Header(props) {
  return (
    <header>
      <GlobalStyle />
      <h1 className="logo">{props.headerText}</h1>
      <nav>
        <ul className="main-menu">
          <li className="menu-item">
            <Link to="/">Home</Link>
          </li>
          <li className="menu-item">
            <Link to="/about/">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 16px;
    font-family: "Roboto";
  }
  body {
    padding: 0 30px;
    color: ${props => (props.theme === "white" ? "white" : "black")};
  }
  h1 {
    font-size: 2em;
  }
`
