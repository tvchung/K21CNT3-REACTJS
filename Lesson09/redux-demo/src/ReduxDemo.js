// const reducer = "Devmaster"
// console.log(reducer);

import {createStore} from 'redux'

const initialState = {
    userName:"Chung Chung",
    courseName:"ReactJS -Redux",
}

const reducer = (state=initialState,action)=>{
    switch (action.type) {
        case "CHANGE_USERNAME":
            state.userName=action.userNameNew;
            break;
        case "CHANGE_COURSENAME":
            state.courseName=action.payload;
            break;
        default:
            return state;

        
    }
    return state;
}

const store = createStore(reducer)

console.log(store);

console.log(store.getState());

// action
const actChangeUserName = ()=>{
    return {
        type:"CHANGE_USERNAME",
        userNameNew:"Chung Trinhj Vawn"
    }
}

// bắn action 
store.dispatch(actChangeUserName())
console.log(store.getState());
const actChangeCourseName = (data)=>{
    return{
        type:"CHANGE_COURSENAME",
        payload:data,
    }
}
store.dispatch(actChangeCourseName("ReactJS Redux Devmaster"))
console.log(store.getState());
export default reducer;