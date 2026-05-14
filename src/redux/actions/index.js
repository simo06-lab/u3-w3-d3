export const ADD_FAVOURITE = "ADD_FAVOURITE"
export const REMOVE_FAVOURITE = "REMOVE_FAVOURITE"

export const GET_JOBS = "GET_JOBS"
export const GET_JOBS_LOADING = "GET_JOBS_LOADING"
export const GET_JOBS_ERROR = "GET_JOBS_ERROR"

export const addFavouriteAction = (company) => ({
  type: ADD_FAVOURITE,
  payload: company,
})

export const removeFavouriteAction = (company) => ({
  type: REMOVE_FAVOURITE,
  payload: company,
})

export const fetchJobsAction = (query) => {
  return async (dispatch) => {
    try {
      dispatch({ type: GET_JOBS_LOADING })

      const response = await fetch(
        "https://strive-benchmark.herokuapp.com/api/jobs?search=" +
          query +
          "&limit=20",
      )

      if (!response.ok) throw new Error("Errore nel recupero dei dati")

      const { data } = await response.json()

      dispatch({
        type: GET_JOBS,
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: GET_JOBS_ERROR,
        payload: error.message,
      })
    }
  }
}
