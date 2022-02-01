import _ from "lodash";
import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";

//class component start
// class StreamEdit extends React.Component {
//   componentDidMount() {
//     this.props.fetchStream(this.props.match.params.id);
//   }

//   onSubmit = (formValues) => {
//     console.log(formValues, 14);
//     this.props.editStream(this.props.match.params.id, formValues);
//   };

//   render() {
//     console.log(this.props);

//     return (
//       <div>
//         <h3>Edit a Stream</h3>
//         <StreamForm
//           initialValues={_.pick(this.props.stream, "title", "description")}
//           onSubmit={this.onSubmit}
//         />
//       </div>
//     );
//   }
// }
//class component end

//function component start

const StreamEdit = ({ stream, editStream, fetchStream, match }) => {
  useEffect(() => {
    fetchStream(match.params.id);
  }, []);

  const onSubmit = (formValues) => {
    editStream(match.params.id, formValues);
  };
  return (
    <div>
      <h3>Edit a Stream</h3>
      <StreamForm
        initialValues={_.pick(stream, "title", "description")}
        onSubmit={onSubmit}
      />
    </div>
  );
};
//function component end

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit
);
