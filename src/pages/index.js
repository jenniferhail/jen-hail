import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import Gallery from "../blocks/gallery"
import Bio from "../blocks/bio"
import Notes from "../blocks/notes"
import Work from "../blocks/work"

export default function Home() {
  return (
    <React.Fragment>
      <Header headerText="Jen Hail" />
      <main className="main">
        <Gallery />
        <Bio />
        <Work />
        <Notes />
      </main>
      <Footer />
    </React.Fragment>
  )
}
