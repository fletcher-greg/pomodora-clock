


initialState = {
    playing: false,
    timer: 25,
    session: {playing: true, count: 25},
    break: {playing: false, count: 5}
}
export function reducer(state, action){
    switch(action.type){
        case 'STOP':
            return {...state, playing: false}
        default:
            return state
    }
}