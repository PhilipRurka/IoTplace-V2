import React, { Component } from "react";
import { connect } from "react-redux";
import uuid from "uuid";
import { addArticle } from "../redux/actions";

/** Sets up the mapDispatchToProps for the connect() */
function mapDispatchToProps(dispatch) {
  return { addArticle: article => dispatch(addArticle(article)) };
}

/** This creates a stateful component. */
class ConnectedForm extends Component {

  /** Initialize the state */
  constructor() {
    /** This is required to inform the code to run and upload the dependencies first before running the following. */
    super();

    /** Sets the initial state that lives on this component. */
    this.state = {
      title: ""
    };

    /** A small hack to bind these event handlers. */
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /** Event handler updates the state on "onChange" */
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  /** Triggers the Redux */
  handleSubmit(event) {
    /** Prevents the page from reloading due to the default form functionality. */
    event.preventDefault();
    /** Deconstructing the variable */
    const { title } = this.state;
    /** Prevent the submition if the value is empty. */
    if(title.length === 0) { return; };
    /** Create a UUID */
    const id = uuid();
    /** Redux Stuff. Refer to the bottom of the file for more detailed instructions. */
    this.props.addArticle({ title, id });
    /** Sets the form value to an empty string. */
    this.setState({ title: "" });
  }

  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={this.handleChange}
          />
        </div>
        <button disabled={title.length === 0} type="submit" className="btn btn-success btn-lg">
          SAVE
        </button>
      </form>
    );
  }
}

/** This connects the component with the store. */
const Form = connect(null, mapDispatchToProps)(ConnectedForm);

export default Form;


/**
 * 
 * The Redux Steps are the following:
 *  1. The store is created by the store.js. That is being called from the index.js, *<Provider store={store}>*. The Provider wraps a subset of elemtents and components and each component within the Provider wrapper is given the store as a prop.
 *  2. When the connect function is called, it connects the mapDispatchToProps which is created above the Component with the ConnectedForm Component. The mapDispatchToProps's param is provided by Redux via connect().
 *  3. The mapDispatchToProps function combined with connect() creates a prop called addArticle that dispatches *addArticle(article)*.
 *  4. When calling the handleSubmit function, ignoring the dispatch function, the *this.props.addArticle({ title, id });*  can be broken down by the following:
 *     a. *this.props* contains addArticle() due to the connect() used with mapDispatchToProps function as its second param, which is reserved for dispatching actions.
 *     b. The *addArticle()* within *this.props* runs addArticle function inside the action.js file. The payload is { title, id }.
 *     c. When the action returnes, *{ type: ..., payload: ... }*, the reducer found in the reducer.js is called. The first param is the current state of the component, the state value is set to initialState if state is undefined. The second param is the returned value from the action function in action.js
 *     d. Inside the reducer, after the action.type matches the action type, a new object is created by concatenating new values to the current state, then returned which updates state to the new value.
 * 
 */