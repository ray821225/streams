import React, { useEffect, useRef, useState } from "react";

import { connect } from "react-redux";

import { signIn, signOut } from "../actions";
// import * as actions from "../actions";

/* class component start*/

// class GoogleAuth extends React.Component {
//   componentDidMount() {
//     window.gapi.load("client:auth2", () => {
//       window.gapi.client
//         .init({
//           clientId:
//             "921124256473-9mplcnmlm9bg0dabvh92jbru92iipqfj.apps.googleusercontent.com",
//           scope: "email",
//         })
//         .then(() => {
//           this.auth = window.gapi.auth2.getAuthInstance();
//           this.onAuthChange(this.auth.isSignedIn.get());
//           this.auth.isSignedIn.listen(this.onAuthChange);
//         });
//     });
//   }

//   onAuthChange = (isSignedIn) => {
//     if (isSignedIn) {
//       this.props.signIn(this.auth.currentUser.get().getId());
//     } else {
//       this.props.signOut();
//     }
//   };

//   onSignInClick = () => {
//     this.auth.signIn();
//   };
//   onSignOutClick = () => {
//     this.auth.signOut();
//   };

//   renderAuthButton() {
//     if (this.props.isSignedIn === null) {
//       return <div>null</div>;
//     } else if (this.props.isSignedIn) {
//       return (
//         <button onClick={this.onSignOutClick} className="ui red google button">
//           <i>Sign out with Google</i>
//         </button>
//       );
//     } else {
//       return (
//         <button onClick={this.onSignInClick} className="ui red google button">
//           <i>Sign In with Google</i>
//         </button>
//       );
//     }
//   }
//   render() {
//     return <div>{this.renderAuthButton()}</div>;
//   }
// }

// const mapStateToPorps = (state) => {
//   return { isSignedIn: state.auth.isSignedIn };
// };

/*class component end*/

/*function component start*/

const GoogleAuth = ({ isSignedIn, signIn, signOut }) => {
  let auth = window.gapi.auth2?.getAuthInstance();

  useEffect(() => {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "921124256473-9mplcnmlm9bg0dabvh92jbru92iipqfj.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          let auth = window.gapi.auth2.getAuthInstance();
          onAuthChange(auth?.isSignedIn.get());
          auth?.isSignedIn.listen(onAuthChange);
        });
    });
  }, [isSignedIn]);

  const onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      signIn(auth?.currentUser.get().getId());
    } else {
      signOut();
    }
  };

  const onSignInClick = () => {
    auth.signIn();
  };

  const onSignOutClick = () => {
    auth.signOut();
  };

  const renderAuthButton = () => {
    if (isSignedIn === null) {
      return <div>null</div>;
    } else if (isSignedIn) {
      return (
        <button
          onClick={() => {
            onSignOutClick();
          }}
          className="ui red google button"
        >
          <i>Sign out with Google</i>
        </button>
      );
    } else {
      return (
        <button
          onClick={() => {
            onSignInClick();
          }}
          className="ui red google button"
        >
          <i>Sign in with Google</i>
        </button>
      );
    }
  };

  return <div>{renderAuthButton()}</div>;
};

const mapStateToPorps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

/*function component end*/

export default connect(mapStateToPorps, { signIn, signOut })(GoogleAuth);
