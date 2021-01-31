import React from "react"

export default function Project(props) {
  return (
    <div className="row project">
      <div className="col first">
        <span>{props.year}</span>{" "}
        <span className="category">{props.category}</span>
      </div>
      <div className="col">
        <span>{props.name}</span>
        {props.url && (
          <React.Fragment>
            <a
              className="link"
              href={props.url}
              target="_blank"
              rel="noreferrer"
            >
              <span className="visually-hidden">{props.name}</span>
            </a>
            <span className="hidden-msg">⟶</span>
          </React.Fragment>
        )}
      </div>
      <div className="col notes">{props.description}</div>
    </div>
  )
}
