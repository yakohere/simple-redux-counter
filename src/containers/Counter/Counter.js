import React, { Component } from "react";
import { connect } from "react-redux";
import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

class Counter extends Component {
  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl label="Add 10" clicked={this.props.onAdd5Counter} />
        <CounterControl
          label="Subtract 15"
          clicked={this.props.onSubstract5Counter}
        />
        <hr />
        <button onClick={this.props.onStoreResult}>Store Results</button>
        <ul>
          {this.props.storedResults.map(storedResult => (
            <li
              key={storedResult.id}
              onClick={() => this.props.onDeleteResult(storedResult.id)}
            >
              {storedResult.value}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ctr: state.counter,
    storedResults: state.results
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch({ type: "INCREMENT" }),
    onDecrementCounter: () => dispatch({ type: "DECREMENT" }),
    onAdd5Counter: () => dispatch({ type: "ADD", val: 10 }),
    onSubstract5Counter: () => dispatch({ type: "SUBSTRACT", val: 15 }),
    onStoreResult: () => dispatch({ type: "STORE_RESULTS" }),
    onDeleteResult: id => dispatch({ type: "DELETE_RESULTS", resultElId: id })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
