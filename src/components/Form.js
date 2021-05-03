import React from 'react'
// import { Field, reduxForm } from 'redux-form'

class Form extends React.Component {
  render() {return (
    <React.Fragment>
      <div className="ui five column relaxed grid">
        <div className="column">
          <div>Title</div>
          <div>something</div>
          
  </div>
        <div className="column">
          Description
  </div>
        <div className="column">
          Price
  </div>
        <div className="column">
          Quantity
  </div>
        <div className="column">
          Image
  </div>
      </div>
    </React.Fragment>
  )}
}

export default Form