import React from "react"
import Header from "../components/header"
import Container from "../components/container"
// import styled from "styled-components"

export default function Home() {
  return (
    <React.Fragment>
      <Header headerText="Jen Hail" />
      <Container type="basic-content">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium,
          officiis!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A dolore
          repellendus suscipit?
        </p>
      </Container>
    </React.Fragment>
  )
}
