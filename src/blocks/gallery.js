import React from "react"

export default function Gallery() {
  const sectionStyle = {
    "--vh": "1vh",
  }
  return (
    <section id="gallery" className="layout gallery" style={sectionStyle}>
      <div className="wrapper">
        <div className="row">
          <img className="img-1" src={"/smile.jpg"} alt="" />
          <img className="img-2" src={"/light-2.jpg"} alt="" />
          <img className="img-3" src={"/my-desk.jpg"} alt="" />
          <img className="img-4" src={"/olive.jpg"} alt="" />
          <img className="img-5" src={"/sand.jpg"} alt="" />
          <div className="caption">
            <span className="counter">1 of 5</span>
            <p>
              Photo Credit –{" "}
              <a
                href="https://www.instagram.com/caterobesonpickens/"
                target="_blank"
                rel="noreferrer"
              >
                Cate Robeson-Pickens
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
