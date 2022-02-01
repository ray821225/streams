import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchStreams } from "../../actions";
import streams from "../../apis/streams";

//class  寫法  ------start-----
// class StreamList extends React.Component {
//   componentDidMount() {
//     this.props.fetchStreams();
//   }

//   renderAdmin(stream) {
//     if (stream.userId === this.props.currentUserId) {
//       return (
//         <div className="right floated content">
//           <Link to={"/streams/edit/${stream.id}"} className="ui button primary">Edit</Link>
//           <button className="ui button negative">Delete</button>
//         </div>
//       );
//     }
//   }

//   renderList() {
//     return this.props.streams.map((stream) => {
//       return (
//         <div className="item" key={stream.id}>
//           {this.renderAdmin(stream)}
//           <i className="large middle aligned icon camera" />
//           <div className="content">
//             {stream.title}
//             <div className="description">{stream.description}</div>
//           </div>
//         </div>
//       );
//     });
//   }

//   renderCreate() {
//     if (this.props.isSignedIn) {
//       return (
//         <div style={{ textAlign: "right" }}>
//           <Link to="/streams/new" className="ui button primary">
//             Creatr Stream
//           </Link>
//         </div>
//       );
//     }
//   }

//   render() {
//     return (
//       <div>
//         <h2></h2>
//         <div className="ui celled list">{this.renderList()}</div>
//         {this.renderCreate()}
//       </div>
//     );
//   }
// }

//class  寫法  ------end-----

//function component -----start-----

const StreamList = ({ streams, currentUserId, isSignedIn, fetchStreams }) => {
  useEffect(() => {
    fetchStreams();
  }, []);

  const renderAdmin = (stream) => {
    if (stream.userId === currentUserId) {
      return (
        <div className="right floated content">
          <Link to={`/streams/edit/${stream.id}`} className="ui button primary">
            Edit
          </Link>
          <button className="ui button negative">Delete</button>
        </div>
      );
    }
  };

  const renderList = (streams) => {
    return streams.map((stream) => {
      return (
        <div className="item" key={stream.id}>
          {renderAdmin(stream)}
          <i className="large middle aligned icon camera" />
          <div className="content">
            {stream.title}
            <div className="description">{stream.description}</div>
          </div>
        </div>
      );
    });
  };

  const renderCreate = (isSignedIn) => {
    if (isSignedIn) {
      return (
        <div style={{ textAlign: "right" }}>
          <Link to="/streams/new" className="ui button primary">
            Creatr Stream
          </Link>
        </div>
      );
    }
  };

  return (
    <div>
      <h2></h2>
      <div className="ui celled list">{renderList(streams)}</div>
      {renderCreate(isSignedIn)}
    </div>
  );
};

//function component -----end-----

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
