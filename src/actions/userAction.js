export const LOGGING_USER_BEGIN   = 'LOGGING_USER_BEGIN';
export const LOGGING_USER_SUCCESS = 'LOGGING_USER_SUCCESS';
export const LOGGING_USER_FAILURE = 'LOGGING_USER_FAILURE';


export async function getUser(data){
    return dispatch => {

        dispatch(loggingUserBegin())
        console.log('reached action')

        return fetch(
          'http://localhost:8080/user/login', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        }
        ).then(handleErrors)
        .then(res => res.json())
        .then( user =>{
          dispatch(loggingUserSuccess(user))
          return user 
        })
        .catch( error => dispatch(loggingUserFailure(error)))
        // let response = await fetch(
        //     'http://localhost:8080/user/login', {
        //         method: 'POST',
        //         headers: {
        //             'Content-type': 'application/json'
        //         },
        //         body: JSON.stringify(data)
        //     }
        //   );
        //   let responseJson = await response.json();
        //   dispatch(loggingUserSuccess(responseJson))
        //   return responseJson;
        // } catch (error) {
        //   dispatch(loggingUserFailure(error))
        // }
    }
  
      
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }

  export const loggingUserBegin = () => ({
    type: LOGGING_USER_BEGIN
  });
  
  export const loggingUserSuccess = user => ({
    type: LOGGING_USER_SUCCESS,
    payload: { user }
  });
  
  export const loggingUserFailure = error => ({
    type: LOGGING_USER_FAILURE,
    payload: { error }
  });