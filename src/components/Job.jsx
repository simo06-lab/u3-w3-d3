import { Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import { FaHeart, FaRegHeart } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"

const Job = ({ data }) => {
  const dispatch = useDispatch()

  const favourites = useSelector((state) => state.favourites.list)
  const isFavourite = favourites.includes(data.company_name)

  const toggleFavourite = () => {
    dispatch({
      type: isFavourite ? "REMOVE_FAVOURITE" : "ADD_FAVOURITE",
      payload: data.company_name,
    })
  }

  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: "1px solid #00000033", borderRadius: 4 }}
    >
      <Col xs={3} className="d-flex align-items-center gap-2">
        <Link to={`/${data.company_name}`} className="fw-bold">
          {data.company_name}
        </Link>

        <span
          style={{ cursor: "pointer", fontSize: "1.3rem" }}
          onClick={toggleFavourite}
        >
          {isFavourite ? <FaHeart color="red" /> : <FaRegHeart />}
        </span>
      </Col>

      <Col xs={9}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
    </Row>
  )
}

export default Job
