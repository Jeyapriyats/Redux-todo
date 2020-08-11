//console.log('hiiiii');
// const redux = require("redux");
// const createStore = redux.createStore;
// const combineReducers = redux.combineReducers;
// const BUY_CAKE = "BUY_CAKE";
// const BUY_ICECREAM = "BUY_ICECREAM";
// function buycake() {
//   return {
//     type: BUY_CAKE,
//     info: "first_redux_action",
//   };
// }
// function buyicecream() {
//   return {
//     type: BUY_ICECREAM,
//     info: "first_redux_action",
//   };
// }
// const InitialCakeState = {
//   NumOfCakes: 10
  
// };
// const InitialIceCreamState = {
  
//   NumOfIceCreams: 20
// }; 
// const Cakereducer = (state = InitialCakeState, action) => {
//   switch (action.type) {
//     case BUY_CAKE:
//       return {
//         ...state,
//         NumOfCakes: state.NumOfCakes - 1,
//       };
      
//     default:
//       return state;
//   }
// };
// const IceCreamreducer = (state = InitialIceCreamState, action) => {
//   switch (action.type) {
    
//       case BUY_ICECREAM:
//       return {
//         ...state,
//         NumOfIceCreams: state.NumOfIceCreams - 1,
//       };
//     default:
//       return state;
//   }
// };
// const rootreducer=redux.combineReducers(
// {
//   Cake:Cakereducer,
//   IceCream:IceCreamreducer
// })
// const store = createStore(rootreducer);
// console.log("InitialState", store.getState());
// const unsubscribe = store.subscribe(() =>
//   console.log("updatedState", store.getState())
// );
// store.dispatch(buycake());
// store.dispatch(buycake());
// store.dispatch(buycake());cd
// store.dispatch(buyicecream());
// store.dispatch(buyicecream());
// unsubscribe();
// index.js
import React from "react";
import ReactDOM from "react-dom";
import TodoApp from "./TodoApp";

import { Provider } from "react-redux";
import store from "./redux/store";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  rootElement
);
