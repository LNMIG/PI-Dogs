const initialState = {
        allBreeds:[],
        breedCreated:{},
        temperslist:[]
}

function reducer (state = initialState, action) {
    switch (action.type) {
        case "GET_ALL_BREEDS":
            return {
                ...state,
                allBreeds: action.payload
            }
        case "GET_TEMPERS_LIST":
            return {
                ...state,
                temperslist: action.payload
            }
        case "POST_NEW_BREED":
            return {
                ...state,
                breedCreated: action.payload
            }
    default:
        return state;
    }
}
export default reducer;