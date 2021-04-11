const INTIAL_STATE = {
  isSignedIn: null,
};

export default (state = INTIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case "SIGN_IN":
      console.log("111");
      return { ...state, isSignedIn: true };
    case "SIGN_OUT":
      console.log("222");
      return { ...state, isSignedIn: false };
    default:
      return state;
  }
};
