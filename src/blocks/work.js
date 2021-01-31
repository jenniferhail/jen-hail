import React from "react"
import Project from "../components/project"

export default function Work() {
  return (
    <section id="work" className="layout table">
      <div className="wrapper">
        <div className="intro row">
          <div className="col">
            <h2>Selected Work</h2>
            <h3>Things I've Made</h3>
          </div>
        </div>
        <div className="grid">
          <div className="row titles">
            <div className="col">
              <span></span>
            </div>
            <div className="col">
              <span>Project</span>
            </div>
            <div className="col notes">
              <span>Notes</span>
            </div>
          </div>
          <Project
            year="2020"
            category="Dev"
            name="IMC Licensing"
            url="https://imclicensing.com/"
            description="A snappy, colorful website for an accomplished licensing company."
          />

          <Project
            year="2020"
            category="Dev"
            name="NBA 2 Lou"
            url="https://nba2lou.com/"
            description="We're bringing the next NBA team to Louisville, KY. Built at Mightily."
          />

          <Project
            year="2020"
            category="Dev"
            name="Lifequipt"
            url="https://lifequipt.com/"
            description="A neat little landing page for an app company that helps companies improve the health and wellbeing of their employees. Built at Mightily."
          />

          <Project
            year="2019"
            category="Dev"
            name="Hosparus Health"
            url="https://hosparushealth.org/"
            description="A smooth, approachable website for a difficult reality. Built at Mightily."
          />

          <Project
            year="2019"
            category="Dev"
            name="Gravely Brewing"
            url="https://gravelybrewing.com/"
            description="A clever site for a hip, local brewery slinging the best beer, tunes, and food in town. Built at Mightily."
          />

          <Project
            year="2018"
            category="Design"
            name="Love, Leon"
            description="Rebranding a husband-and-wife photography team that celebrates intimacy, adventure, and wild love."
          />

          <Project
            year="2018"
            category="Dev, Design"
            name="Forage"
            description="A cool brand and website for a growing plant shop."
          />

          <Project
            year="2018"
            category="Dev"
            name="Investor's Heritage"
            url="https://investorsheritage.com/"
            description="A classy, professional site that elevated an insurance company. Built at Mightily."
          />

          <Project
            year="2018"
            category="Dev"
            name="Metro United Way"
            url="https://metrounitedway.org/"
            description="A website to unite a community — featuring full-bleed images and eye-catching headlines. Built at Mightily."
          />

          <Project
            year="2017"
            category="Dev, Design"
            name="Crowned Events"
            url="http://crowned-events.com/"
            description="A clean identity and website update to show off the exquisite work of a SoCal wedding planner."
          />

          <Project
            year="2016"
            category="Design"
            name="Foe & Dear x Faculty"
            description="Museum-inspired package design for a boutique jewelry designer in Vancouver, Canada."
          />

          <Project
            year="2016"
            category="Design"
            name="Story Louisville"
            description="Logo design for an empowering, female-led organization focused on encouraging entrepreneurship and building community."
          />
        </div>
      </div>
    </section>
  )
}
