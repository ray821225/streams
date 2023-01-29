import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";

const StreamShow = ({ fetchStream, match, stream }) => {
  const videoRef = useRef(null);

  const mounted = useRef();

  useEffect(() => {
    const { id } = match.params.id;

    fetchStream(id);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => {
  //   if (mounted.current === false) {
  //     mounted.current = true;
  //     /* 下面是 componentDidMount*/
  //     const { id } = match.params.id;

  //     fetchStream(id);

  //     /* 上面是 componentDidMount */
  //   } else {
  //     /* 下面是componentDidUpdate */
  //     /* 上面是componentDidUpdate */
  //   }

  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [stream]);

  if (!stream) {
    return <div>loading....</div>;
  }

  // const { title, description } = stream;

  if (stream) {
    return (
      <div>
        {/* <video ref={videoRef} style={{ width: "100%" }} controls></video> */}
        <h1>{stream.title}</h1>
        <h5>{stream.description}</h5>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream })(StreamShow);

// class StreamShow extends React.Component {
//   constructor(props) {
//     super(props);

//     this.videoRef = React.createRef();
//   }

//   componentDidMount() {
//     const { id } = this.props.match.params;
//     console.log("1");
//     this.props.fetchStream(id);
//     // this.buildPlayer();
//   }

//   componentDidUpdate() {
//     console.log("2");
//     // this.buildPlayer();
//   }

//   // buildPlayer() {
//   //   if (this.player || !this.props.stream) {
//   //     return;
//   //   }

//   //   const { id } = this.props.match.params;
//   //   this.player = flv.createPlayer({
//   //     type: "flv",
//   //     url: `http://localhost:8000/live/${id}.flv`,
//   //   });
//   //   this.player.attachMediaElement(this.videoRef.current);
//   //   this.player.load();
//   // }

//   render() {
//     if (!this.props.stream) {
//       return <div>Loading...</div>;
//     }

//     const { title, description } = this.props.stream;

//     return (
//       <div>
//         <video ref={this.videoRef} style={{ width: "100%" }} controls />
//         <h1>{title}</h1>
//         <h5>{description}</h5>
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state, ownProps) => {
//   return { stream: state.streams[ownProps.match.params.id] };
// };

// export default connect(mapStateToProps, { fetchStream })(StreamShow);
