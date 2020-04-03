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
    const date = new Date
    return {
        type : CHECK,
        date
    }
}

const mReducer = ( state, action ) => {
    const preDate = localStorage.getItem("date");
    switch(action) {
        case ADD :
        const newState = action.data;
        localStorage("data", JSON.stringify(newState));
        return newState;
        default :
        const date = new Date;
        const nowDate = {
            year : date.getFullYear(),
            month : () => {
                if(date.getMonth() <= 9) {
                    return `0${date.getMonth()+1}`
                }
                    return date.getMonth()+1
            },
            day : () => {
                if(date.getDate() <= 10) {
                    return `0${date.getDate()}`
                }
                    return date.getDate()
            }
        }

        const nowDay = `${nowDate.year}${nowDate.month()}${nowDate.day()}`
        if(preDate && preDate !== nowDay) {
            state = {
                data : null,
                date : nowDay,
                refresh : true
            }
        } else {
            state = {
                data : null,
                date : preDate,
                refresh : false
            }
        }
        localStorage.setItem("data", JSON.stringify(state.data))
        localStorage.setItem("date", state.date);
        localStorage.setItem("refresh", state.refresh);
        console.log(state);
        return state
    }
}  


const movieStore = createStore(mReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default movieStore;



