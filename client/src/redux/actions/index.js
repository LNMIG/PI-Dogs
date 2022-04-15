
export const getBreedDetail = (idBreed) => {
    return async function (dispatch) {
        try {
        const r = await fetch(`http://localhost:3001/dogs/${idBreed}`);
        const json = await r.json();
        dispatch({ type: "GET_BREED_DETAIL", payload: json });
        } catch (e) {
            return dispatch({ type: "GET_MOVIE_DETAIL", payload: e });
        } 
    }
};
