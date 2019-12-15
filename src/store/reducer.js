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
      return {
        ...state,
        session: { ...state.session.playing, count: (state.session.count += 1) }
      };
    case "SESSDEC":
      return {
        ...state,
        session: { ...state.session.playing, count: (state.session.count -= 1) }
      };
    default:
      return state;
  }
}
