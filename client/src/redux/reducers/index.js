const initialState = {
        breedsDetail: {}
}

function rootReducer (state = initialState, action) {
    switch (action.type) {
// case "ADD_MOVIE_FAVORITE":
// return {
// ...state,
// moviesFavorities : state.moviesFavorities.concat(action.payload)
// }
// case "GET_MOVIES":
// return {
// ...state,
// moviesLoaded: action.payload.Search
// }
        case "GET_BREED_DETAIL":
            return {
                ...state,
                breedsDetail: action.payload
            }
// case "REMOVE_MOVIE_FAVORITE":
// return {
// ...state,
// moviesFavorities: state.moviesFavorities.filter((movie) => movie.imdbID !== action.payload)
// }
    default:
        return state;
    }
}
export default rootReducer;