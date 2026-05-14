import { useState } from "react"
import { Container, Row, Col, Form } from "react-bootstrap"
import Job from "./Job"
import { FaHeart } from "react-icons/fa"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { fetchJobsAction } from "../redux/actions"

const MainSearch = () => {
  const [query, setQuery] = useState("")
  const dispatch = useDispatch()

  const { results, isLoading, isError } = useSelector((state) => state.jobs)

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(fetchJobsAction(query))
  }

  return (
    <Container>
      <Row>
        <Col
          xs={10}
          className="mx-auto my-3 d-flex justify-content-between align-items-center"
        >
          <h1 className="display-1 m-0">Remote Jobs Search</h1>

          <Link to="/favourites" className="fs-2 text-dark">
            <FaHeart />
          </Link>
        </Col>

        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="type and press Enter"
            />
          </Form>
        </Col>

        <Col xs={10} className="mx-auto mb-5">
          {isLoading && <p>Loading...</p>}
          {isError && <p style={{ color: "red" }}>Errore nel caricamento</p>}

          {results.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  )
}

export default MainSearch
