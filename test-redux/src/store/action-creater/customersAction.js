import { ADD_CUSTOMER, REMOVE_CUSTOMER, ADD_MANY_CUSTOMERS, FETCH_CUSTOMERS } from "../customerReducer";

export const addCustomerAction = (payload) => ({ type: ADD_CUSTOMER, payload });
export const removeCustomerAction = (payload) => ({ type: REMOVE_CUSTOMER, payload }); 
export const addManyCustomersAction = () => {
    return async (dispatch) => {
        dispatch ({type: FETCH_CUSTOMERS})
        let resp = await fetch('https://jsonplaceholder.typicode.com/users');
        let data = await resp.json();
        dispatch({type: ADD_MANY_CUSTOMERS, payload: data});
    }
}