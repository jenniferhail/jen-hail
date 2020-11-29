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
              <a href="<?php the_permalink(); ?>">Post Title</a>
              <span className="category">Category</span>
            </li>
            <li className="item">
              <a href="<?php the_permalink(); ?>">Post Title</a>
              <span className="category">Category</span>
            </li>
            <li className="item">
              <a href="<?php the_permalink(); ?>">Post Title</a>
              <span className="category">Category</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
