import { Link } from "gatsby"
import React from "react"

export default function Notes() {
  return (
    <section id="notes" className="layout notes">
      <div className="wrapper">
        <div className="intro row">
          <div className="col">
            <h2>Notes & Photos</h2>
            <h3>Things I've Written</h3>
          </div>
        </div>
        <div className="row">
          <ul className="note-list">
            <li className="item">
              <Link to="/notes/a-summer-in-vancouver">
                A Summer in Vancouver
              </Link>
              <span className="category">Travel</span>
            </li>
            <li className="item">
              <Link to="/notes/behind-the-scenes-with-studio-faculty">
                Behind the Scenes with Studio Faculty
              </Link>
              <span className="category">Design</span>
            </li>
            <li className="item">
              <Link to="/notes/three-books">
                Three Books Every Business Owner Should Read
              </Link>
              <span className="category">Business</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
