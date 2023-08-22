
import {
    GET_BOARD
    ,POST_BOARD
} from '../modules/BoardMocule';

// export const callBulletinAPI = ({categoryCode, currentPage}) => {
   export const callBulletinAPI = () => {
//    const requestURL = `http://localhost:8080/bulletin/${categoryCode}?offset=${currentPage}`;
   const requestURL = `http://localhost:8080/bulletin/board`;

   return async (dispatch, getState) => {
    const result = await fetch(requestURL,{
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "*/*"
        }
    })
    .then(response => response.json());
    if(result.status === 200){
        console.log('result.data', result.data);
        dispatch({ type: GET_BOARD,  payload: result.data });
    }
   };

}

export const callBoardNameAddAPI = ({form}) => {
   const requestURL = `http://localhost:8080/bulletin/boardAdd`;

   return async (dispatch, getState) => {

    const result = await fetch(requestURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "*/*" ,
            "Access-Control-Allow-Origin": "*" 
        },
        body: JSON.stringify({
            nameBoard: form.nameBoard
        })
    })
    .then(response => response.json());

    dispatch({type: POST_BOARD, payload: result});
   };
}