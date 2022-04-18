const initialState = {
        allBreeds:[],
        breedCreated:{},
        breedsDetail: {},
        temperslist:[]
}

function rootReducer (state = initialState, action) {
    switch (action.type) {
        case "GET_ALL_BREEDS":
            return {
                ...state,
                allBreeds: action.payload
            }
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