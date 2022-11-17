const defaultState = {
    customers: [],
    loading: false,
}

export const ADD_CUSTOMER = 'ADD_CUSTOMER';
export const REMOVE_CUSTOMER = 'REMOVE_CUSTOMER';
export const ADD_MANY_CUSTOMERS = 'ADD_MANY_CUSTOMERS';
export const FETCH_CUSTOMERS = 'FETCH_CUSTOMERS';

export const customerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_CUSTOMER:
            return { ...state, customers: [...state.customers, action.payload], loading: false }
        case FETCH_CUSTOMERS:
            return {...state, loading: true}
        case REMOVE_CUSTOMER:
            return { ...state, customers: state.customers.filter(user => user.id !== action.payload), loading: true}
        case ADD_MANY_CUSTOMERS:
            return { ...state, customers: [...state.customers, ...action.payload], loading: false }
        default:
            return state;
    }
}

// export const addCustomerAction = (payload) => ({ type: ADD_CUSTOMER, payload });
// export const addManyCustomersAction = (payload) => ({type: ADD_MANY_CUSTOMERS, payload});
// export const removeCustomerAction = (payload) => ({ type: REMOVE_CUSTOMER, payload }); 