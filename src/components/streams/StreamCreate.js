import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { createStream } from "../../actions";

//class component start

// class StreamCreate extends React.Component {
//   renderError({ error, touched }) {
//     if (touched && error) {
//       return (
//         <div className="ui error message">
//           <div className="header">{error}</div>
//         </div>
//       );
//     }
//   }

//   renderInput = ({ input, label, meta }) => {
//     const className = `field ${meta.error && meta.touched ? "error" : ""}`;
//     return (
//       <div className={className}>
//         <label>{label}</label>
//         <input {...input} autoComplete="off" />

//         {this.renderError(meta)}
//       </div>
//     );
//   };

//   onSubmit = (formProps) => {
//     console.log(formProps);
//     console.log(this.props,'props')
//     this.props.createStream(formProps);
//   };

//   render() {
//     return (
//       <form
//         className="ui form error"
//         onSubmit={this.props.handleSubmit(this.onSubmit)}
//       >
//         <Field name="title" component={this.renderInput} label="Enter Title" />
//         <Field
//           name="description"
//           component={this.renderInput}
//           label="Enter Description"
//         />
//         <button className="ui button primary">submit</button>
//       </form>
//     );
//   }
// }

// const validate = (formValues) => {
//   // console.log(formValues);
//   const errors = {};
//   if (!formValues.title) {
//     errors.title = "You must enter a title";
//   }
//   if (!formValues.description) {
//     errors.description = "You must enter a description";
//   }

//   return errors;
// };

//class component end

// function component start

const renderInput = ({ input, label, meta }) => {
  const className = `field ${meta.error && meta.touched ? "error" : ""}`;
  return (
    <div className={className}>
      <label>{label}</label>
      <input {...input} autoComplete="off" />
      {renderError(meta)}
    </div>
  );
};

const renderError = ({ error, touched }) => {
  if (touched && error) {
    return (
      <div className="ui error message">
        <div className="header">{error}</div>
      </div>
    );
  }
};

const StreamCreate = ({ createStream, handleSubmit }) => {
  const onSubmit = (value) => {
    createStream(value);
  };

  return (
    <form className="ui form error" onSubmit={handleSubmit(onSubmit)}>
      <Field name="title" component={renderInput} label="Enter title" />
      <Field
        name="description"
        component={renderInput}
        label="Enter Description"
      />
      <button className="ui button primary">submit</button>
    </form>
  );
};

const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "You must enter a title";
  }
  if (!formValues.description) {
    errors.description = "You must enter a description";
  }

  return errors;
};

//function component end

// const formWrapper = reduxForm({ form: "streamCreate", validate })(StreamCreate);

// export default reduxForm({ form: "streamCreate", validate })(StreamCreate);
// export default connect(null, { createStream })(formWrapper);
export default connect(null, { createStream })(
  reduxForm({ form: "streamCreate", validate })(StreamCreate)
);
