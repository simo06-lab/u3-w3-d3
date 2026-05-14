import { GET_JOBS, GET_JOBS_LOADING, GET_JOBS_ERROR } from "../actions"

const initialState = {
  results: [],
  isLoading: false,
  isError: false,
}

const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOBS_LOADING:
      return {
        ...state,
        isLoading: true,
        isError: false,
      }

    case GET_JOBS:
      return {
        ...state,
        results: action.payload,
        isLoading: false,
        isError: false,
      }

    case GET_JOBS_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: action.payload,
      }

    default:
      return state
  }
}

export default jobsReducer
