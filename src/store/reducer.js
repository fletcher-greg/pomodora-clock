


export const initialState = {
    playing: false,
    timer: 25,
    session: {playing: true, count: 25},
    break: {playing: false, count: 5}
}
export function reducer(state, action){
    switch(action.type){
        case 'START_STOP':
            console.log('works a fine')
            return {...state, playing: !state.playing}
            case 'SESSINC':
            console.log('works a fine')
            return state
        default:
            return state
    }
}