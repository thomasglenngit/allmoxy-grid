import React from 'react'
import { Field, reduxForm } from 'redux-form'

class MovieForm extends React.Component {

  renderInput = ({ input, label}) => {
    return (
      <div className={`field`}>
        <label>{label}</label>
        <input {...input} />
      </div>
    )
  }

  onSubmit = (formValues) => {
   this.props.onSubmit(formValues)
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field name="description" component={this.renderInput} label="Enter Description" />
        <Field name="price" component={this.renderInput}
        label="Enter Price" />
        <Field name="Quantity" component={this.renderInput}
        label="Enter Quantity" />
        <Field name="Image" component={this.renderInput}
        label="Enter Image" />
        <button className="ui button primary">Submit</button>
      </form>
    )
  }
}

const validate = (formValues) => {
  const errors = {}
  if (!formValues.title) {
    errors.title = 'You must enter a title'
  }
  if (!formValues.description) {
    errors.description = 'You must enter a description'
  }
  if (!formValues.price) {
    errors.price = 'You must enter a price'
  }
  if (!formValues.quantity) {
    errors.quantity = 'You must enter a quantity'
  }
  return errors
}

export default reduxForm({
  form: 'movieForm', 
  validate
})(MovieForm)

