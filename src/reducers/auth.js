import Immutable from 'seamless-immutable';
import { createReducer } from 'reduxsauce';
import Types from '@actions/actionTypes';

export const initialState = Immutable({
    token: null,
    profile: null
});

const setToken = (state, action) => ({
    ...state,
    token: action.payload
});

const setProfile = (state, action) => ({
    ...state,
    profile: action.payload
});

const logout = (state, action) => ({
    token: null,
    profile: null,
});
const actionHandlers = {
    [Types.SET_TOKEN]: setToken,
    [Types.SET_PROFILE]: setProfile,
    [Types.LOGOUT]: logout,
};

export default createReducer(initialState, actionHandlers);