let URL = process.env.REACT_APP_API || 'http://localhost:3001' 

export const getAllBreeds = () => {
    return async function (dispatch) {
        try {
            const r = await fetch(`${URL}/dogs`)
            //  , {
            //      mode: 'no-cors',
            //      method: 'GET',
            //      headers: { 'Content-Type': 'application/json' },
            //  });
            console.log('Breeds: ',r)
            const json = await r.json();
            return dispatch({ type: "GET_ALL_BREEDS", payload: json });
        } catch (e) {
            return console.error('Error in GET ALL BREEDS:', e);
        }
    }
};

export const getTemperaments = () => {
    return async function (dispatch) {
            try {
                const r = await fetch(`${URL}/temperament`)
              //   , {
              //     mode: 'cors',
              //     method: 'GET',
              //     headers: { 'Content-Type': 'application/json' },
              // });
                console.log('Temperaments: ',r)
                const json = await r.json();
                return dispatch({ type: "GET_TEMPERS_LIST", payload: json });
            } catch (e) {
                return console.error('Error in GET TEMPERAMENTS LIST',e);
            }
    }
};

export const postNewBreed = (formData) => {
    return function (dispatch) {
        return fetch (`${URL}/dog`, {
                mode: 'cors',
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {'Content-Type': 'application/json' }
        }).then(r => r.json())
          .then(json => dispatch({ type: "POST_NEW_BREED", payload: json}))
          .catch(e => { dispatch({ type: "POST_NEW_BREED", payload: {newBreed: 'Sorry, new breed not added. There is already a breed matching yours'}})
                        console.error('Error in POST NEW BREED', e)
                });
    }
};

