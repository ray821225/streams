import React from "react";
import { connect } from "react-redux";
import { fetchStreams } from "../../actions";

//class 寫法
class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  render() {
    return <div>StreamList</div>;
  }
}

// const StreamList = () => {
//   return <div>StreamList</div>;
// };

// const mapStateToProps = (state) => {};

export default connect(null, { fetchStreams })(StreamList);
