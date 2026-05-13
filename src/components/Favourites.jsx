import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const Favourites = () => {
  const favourites = useSelector((state) => state.favourites.list)

  return (
    <div className="container mt-4">
      <h2>Preferiti</h2>

      {favourites.length === 0 && <p>Nessun preferito salvato.</p>}

      <ul className="list-unstyled">
        {favourites.map((company, i) => (
          <li key={i}>
            <Link to={`/${company}`}>{company}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Favourites
