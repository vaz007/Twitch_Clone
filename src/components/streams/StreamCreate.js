import React from "react";
import { Field, reduxForm } from "redux-form";
import {connect} from 'react-redux';
import {createStream} from '../../actions'
 

class StreamCreate extends React.Component {
  
  renderErorr({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} />
        {this.renderErorr(meta)}
      </div>
    );
  };

  onSubmit = (formValues) => {
    console.log(formValues);
    this.props.createStream(formValues);
  }

  render() {
    // console.log(this.props);
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "You must enter a title";
  }
  if (!formValues.description) {
    errors.title = "You must enter a description";
  }
  return errors;
};
const formWrapped =  reduxForm({
  form: "streamCreate",
  validate: validate
})(StreamCreate);

const mapStateToProps = (state) => {
    return {}
}

export default connect(mapStateToProps, {createStream})(formWrapped);