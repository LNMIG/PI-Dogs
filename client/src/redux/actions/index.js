//const fetch = require ('node-fetch');

export const getBreedDetail = (idBreed) => {
    return async function (dispatch) {
        const r = await fetch(`http://localhost:3001/dogs/${idBreed}`);
        const json = await r.json();
        dispatch({ type: "GET_BREED_DETAIL", payload: json });
                                } 
};