import { createStore } from "redux";


const ADD = "add";
const CHECK = "check";
const DELETE = "delete";

const ADD_DATA = data => {
    return {
        type : ADD,
        data
    }
}
const CALL_CHECK = refresh => {
    return {
        type : CHECK,
        refresh
    }
}

const mReducer = ( state, action ) => {

    const preDate = localStorage.getItem("date");
    const preData = JSON.parse(localStorage.getItem("data"));

    console.log(preData)

    switch(action.type) {
    
        case ADD :
        const newState = Object.assign({}, state, {
            data : action.data
        });
        localStorage.setItem("data", JSON.stringify(newState.data));
        localStorage.setItem("refresh", newState.refresh)
        console.log("실행됨");
 
        return newState;

        case CHECK : 
        const newCheck = Object.assign({}, state, {
            refresh : action.refresh
        })
        localStorage.setItem("refresh", newCheck.refresh);
        console.log("실행됨2");

        return newCheck;

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
        if(!preData || preData[0] === 1 || preDate !== nowDay) {
            state = {
                data : [1],
                date : nowDay,
                refresh : true
            }
        } else {
            state = {
                data : preData,
                date : preDate,
                refresh : false
            }
        }
        localStorage.setItem("data", JSON.stringify(state.data))
        localStorage.setItem("date", state.date);
        localStorage.setItem("refresh", state.refresh)
        console.log(state);
        return state
    }
}  

export const actionCreators = {
    ADD_DATA,
    CALL_CHECK
}


const movieStore = createStore(mReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default movieStore;



