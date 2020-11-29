// import { Link } from "gatsby"
import React from "react"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrapper">
        <div className="row">
          <nav className="endnotes">
            <h4>Endnotes</h4>
            <p>
              Thank you for visiting! I'll be moving to the Detroit area this
              summer, 2020, and I'm looking for job opportunities as a front end
              web developer. Please reach out if you feel like I'm a good fit
              for your advertising agency or freelance projects.
            </p>
          </nav>
          <div className="contact">
            <h4>Contact</h4>
            <p>
              Jennifer Hail
              <br />
              <a href="mailto:hello@jenniferhail.com">hello@jenniferhail.com</a>
            </p>
          </div>
          <div className="social">
            <h4>Links</h4>
            <ul className="list">
              <li className="item">
                <a
                  href="https://www.instagram.com/jenhail/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Insta
                </a>
              </li>
              <li className="item">
                <a
                  href="https://twitter.com/thejenhail"
                  target="_blank"
                  rel="noreferrer"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
