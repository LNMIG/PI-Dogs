
export const getBreedDetail = (idBreed) => {
    return async function (dispatch) {
        try {
        const r = await fetch(`http://localhost:3001/dogs/${idBreed}`);
        const json = await r.json();
        dispatch({ type: "GET_BREED_DETAIL", payload: json });
        } catch (e) {
            return console.log(e);
        } 
    }
};

export const postNewBreed = (formData) => {
    return function (dispatch) {
        return fetch (`http://localhost:3001/dog`, {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {'Content-Type': 'application/json' }
        }).then(r => r.json()).then(json => dispatch({ type: "POST_NEW_BREED", payload: json})).catch(e => console.log('Error:', e))
    }
};


export const getTemperaments = () => {
    return async function (dispatch) {
            try {
                const r = await fetch(`http://localhost:3001/temperament`);
                const json = await r.json();
                return dispatch({ type: "GET_TEMPERS_LIST", payload: json });
            } catch (e) {
                return console.log(e);
            }
    }
};