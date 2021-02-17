import React from "react"
import { Link } from "gatsby"

const ListLink = props => (
  <li style={{ display: "inline", marginRight: "1rem" }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Layout({ children }) {
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
      <Link to="/" style={{ textShadow: "none", background: "none" }}>
        <h3>MySweetSite</h3>
      </Link>
      <ListLink to="/">Home</ListLink>
      <ListLink to="/about/">About</ListLink>
      <ListLink to="/contact/">Contact</ListLink>
      {children}
    </div>
  )
}
