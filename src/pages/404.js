import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

export default function Error404() {
  return (
    <React.Fragment>
      <div className="error404">
        <Header headerText="Jen Hail" />
        <main className="main">
          <div className="layout basic-content">
            <div className="wrapper">
              <div className="row">
                <h1>The page you were looking for doesn't exist.</h1>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </React.Fragment>
  )
}
