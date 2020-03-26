const initialState = {
  counter: 0,
  results: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        counter: state.counter + 1
      };
    case "DECREMENT":
      return {
        ...state,
        counter: state.counter - 1
      };
    case "ADD":
      return {
        ...state,
        counter: state.counter + action.val
      };
    case "SUBSTRACT":
      return {
        ...state,
        counter: state.counter - action.val
      };
    case "STORE_RESULTS":
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: state.counter })
      };
    case "DELETE_RESULTS":
      return {
        ...state,
        results: state.results.slice({ id: new Date(), value: state.counter })
      };
  }

  return state;
};

export default reducer;
