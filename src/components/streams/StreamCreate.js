import React from "react";
import { connect } from "react-redux";
import { createStream } from "../../actions";
import StreamForm from "./StreamForm";

//class component start

// class StreamCreate extends React.Component {
//   onSubmit = (formProps) => {
//     this.props.createStream(formProps);
//   };

//   render() {
//     return (
//       <div>
//         <h3>Create a Stream</h3>
//         <StreamForm onSubmit={this.onSubmit} />
//       </div>
//     );
//   }
// }

//class component end

// function component start

const StreamCreate = ({ createStream }) => {
  const onSubmit = (formProps) => {
    createStream(formProps);
  };

  return (
    <div>
      <h3>Create a Stream</h3>
      <StreamForm onSubmit={onSubmit} />
    </div>
  );
};

export default connect(null, { createStream })(StreamCreate);
