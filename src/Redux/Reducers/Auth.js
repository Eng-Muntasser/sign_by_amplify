import { SIGN_IN_OUT_FLAG,USER_TOKEN } from '../actionsType';

const initalState = {
    signInOutFlag: false,
    userToken: null
}
export default function AuthReducer (state = initalState, action) {
    switch (action.type) {
        case SIGN_IN_OUT_FLAG:
            return{
                ...state,
                signInOutFlag: !state.signInOutFlag,
                userToke: state.userToken
            }
        case USER_TOKEN:
            const Token = action.payload
            return{
                ...state,
                signInOutFlag: state.signInOutFlag,
                userToke: Token
            }
        default:
            return state;
    }
}