const redux = require("redux");
const createStore = redux.createStore;

const initialState = {
  counter: 0
};

//Reducer
const rootReducer = (state = initialState, action) => {
  if (action.type === "ADD_COUNTER") {
    return {
      ...state,
      counter: state.counter + action.value
    };
  }
  return state;
};

//Store
const store = createStore(rootReducer);
console.log(store.getState());

//Subscribtion
store.subscribe(() => {
  console.log("[Subscribtion]", store.getState());
});

//Dispatching Action
store.dispatch({ type: "INC_COUNTER" });
store.dispatch({ type: "ADD_COUNTER", value: 15 });
console.log(store.getState());
