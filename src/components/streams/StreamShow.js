import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";

const StreamShow = ({ fetchStream, match, stream }) => {
  useEffect(() => {
    fetchStream(match.params.id);
  }, []);

  console.log(stream, "aaa");

  if (!stream) {
    return <div>loading....</div>;
  }

  return (
    <div>
      <h1>{stream.title}</h1>
      <h5>{stream.description}</h5>
    </div>
  );
};
const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream })(StreamShow);
