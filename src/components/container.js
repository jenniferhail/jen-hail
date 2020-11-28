import React from "react"
import styled from "styled-components"

const Section = styled.section`
  max-width: 1200px;
  margin: 0 auto;
`

export default function Container(props) {
  return (
    <Section className={`block ${props.type}`}>
      <h2>{props.type}</h2>
      <div className="wrapper">{props.children}</div>
    </Section>
  )
}
