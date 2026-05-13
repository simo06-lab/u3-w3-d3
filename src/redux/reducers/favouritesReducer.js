const initialState = {
  list: [],
}

const favouritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FAVOURITE":
      return {
        ...state,
        list: [...state.list, action.payload],
      }

    case "REMOVE_FAVOURITE":
      return {
        ...state,
        list: state.list.filter((company) => company !== action.payload),
      }

    default:
      return state
  }
}

export default favouritesReducer
