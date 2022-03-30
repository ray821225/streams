import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Modal from "../Modal";
import history from "../../history";
import { fetchStream, deleteStream } from "../../actions";

const StreamDelete = ({ match, fetchStream, deleteStream, stream }) => {
  useEffect(() => {
    fetchStream(match.params.id);
  }, []);

  const actions = (
    <>
      <button
        onClick={() => {
          deleteStream(match.params.id);
        }}
        className="ui button negative"
      >
        Delete
      </button>
      <Link to="/" className="ui button">
        Cancel
      </Link>
    </>
  );

  const renderContent = () => {
    if (!stream) {
      return `Are you sure want to delete this stream`;
    }
    return `Are you sure want to delete this title : ${stream.title}`;
  };

  return (
    <Modal
      title="Delete Stream"
      content={renderContent()}
      actions={actions}
      onDismiss={() => history.push("/")}
    />
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
