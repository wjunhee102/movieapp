import { createStore } from "redux";

const ADD = "add";
const CHECK = "check";
const DELETE = "delete";

const dataAdd = data => {
    return {
        type : ADD,
        data
    }
}
const callCheck = () => {
    date = new Date
    return {
        type : CHECK,
        date
    }
}

const mReducer = ( state, action ) => {
    switch(action) {
        case ADD :
        const newState = action.data;
        localStorage("data", JSON.stringify(newState));
        return newState;
        case CHECK :
        const preDate = localStorage.getItem("date");
        if(!preDate) {
            localStorage.setItem("date", action.date);
        }
        default :
        state = {
            data : null,
            date : new Date
        }
        return state
    }
}  



export const movieStore = createStore(mReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());



