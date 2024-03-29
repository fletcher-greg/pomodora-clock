export const initialState = {
  playing: false,
  timer: 25,
  session: { playing: true, count: 25 },
  bCount: { playing: false, count: 5 }
};
export function reducer(state, action) {
  switch (action.type) {
    case "START_STOP":
      console.log("works a fine");
      return { ...state, playing: !state.playing };
    case "RESET":
      console.log("reset");
      return initialState;
    case "SESSINC":
      console.log("session inc");
      console.log(state.session.count);
      console.log(state.session);
      return {
        ...state,
        session: { ...state.session, count: state.session.count + 1 }
      };
    case "SESSDEC":
      console.log("session dec");
      return {
        ...state,
        session: { ...state.session, count: state.session.count - 1 }
      };
    case "BINC":
      return {
        ...state,
        bCount: { ...state.bCount, count: state.bCount.count + 1 }
      };
    case "BDEC":
      console.log(state.bCount);
      return {
        ...state,
        bCount: { ...state.bCount, count: state.bCount.count - 1 }
      };
    case "SESSPLAY":
      return {
        ...state,
        session: { ...state.session, playing: !state.session.playing }
      };
    default:
      return state;
  }
}
