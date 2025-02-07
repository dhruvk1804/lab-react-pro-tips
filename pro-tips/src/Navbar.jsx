import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Home
      </Link>
      <ul>
        <Link to="/contacts">Contacts</Link>
        <Link to="/about">Registration Form</Link>
      </ul>
    </nav>
  )
}