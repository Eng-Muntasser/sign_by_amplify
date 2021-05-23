import { SIGN_IN_OUT_FLAG,USER_TOKEN } from './actionsType';

export const setSignInOutFlag = () =>({
    type: SIGN_IN_OUT_FLAG,
});

export const setUserTokenAction = token =>({
    type: USER_TOKEN,
    payload: token
});