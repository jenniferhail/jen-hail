import React from "react"
import Header from "../../components/header"
import Footer from "../../components/footer"

export default function Note() {
  return (
    <React.Fragment>
      <Header headerText="Jen Hail" />
      <main className="main single-post">
        <section className="layout article">
          <article id="note-1" className="wrapper">
            <div className="row">
              <div class="image">
                <img src={"/notes/vancouver/street.jpg"} alt="" />
                <img src={"/notes/vancouver/shop.jpg"} alt="" />
                <img src={"/notes/vancouver/friend.jpg"} alt="" />
                <img src={"/notes/vancouver/boats.jpg"} alt="" />
                <img src={"/notes/vancouver/bridge.jpg"} alt="" />
                <img src={"/notes/vancouver/trees.jpg"} alt="" />
              </div>

              <div className="content">
                <h2 className="h3 title">A Summer in Vancouver</h2>

                <div className="meta">
                  <span className="category">Travel</span>
                  <span className="date">August 2016</span>
                </div>

                <p>
                  Four years ago, I spent the summer living and working with my
                  favorite design studio, Faculty. I quickly fell in love with
                  this city juxtaposed between mountains and sea. Enough nature
                  to get out and explore, paired with an endless list of food to
                  try and the public transit to get you there.
                </p>
                <hr class="wp-block-separator is-style-wide" />
                <p>Credits: Photos taken by me.</p>
              </div>
            </div>
          </article>
        </section>
      </main>
      <Footer />
    </React.Fragment>
  )
}
