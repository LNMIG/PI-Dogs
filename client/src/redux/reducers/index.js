const initialState = {
        breedsDetail: {},
        breedCreated:{},
        temperslist:[]
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

        case "POST_NEW_BREED":
            return {
                ...state,
                breedCreated: action.payload
            }

        case "GET_TEMPERS_LIST":
            return {
                ...state,
                temperslist: action.payload
            }

    default:
        return state;
    }
}
export default rootReducer;