import React from "react"

export default function Bio() {
  return (
    <section id="about" className="layout about">
      <div className="wrapper">
        <div className="row">
          <div className="col"></div>
          <div className="col">
            <h2>About Me</h2>
            <h3>Web Developer + Designer</h3>
            <p>
              Hey, my name is Jennifer, but you can call me Jen. I'm a web
              developer, currently wrangling code at{" "}
              <a href="https://mightily.com" target="_blank" rel="noreferrer">
                Mightily
              </a>{" "}
              in Louisville, Kentucky. I'm a big fan of hand crafted coffee—I
              make a Chemex nearly every morning—and I'm inspired by minimalism
              in architecture, interior design, and photography.
            </p>
          </div>
          <div className="col"></div>
          <div className="col"></div>
        </div>
      </div>
    </section>
  )
}
