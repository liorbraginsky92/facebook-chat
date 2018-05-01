import Immutable from 'seamless-immutable';
import { createReducer } from 'reduxsauce';
import Types from '@actions/actionTypes';

export const initialState = Immutable({
    userId: '',
    pushToken: '',
    latitude: 0,
    longitude: 0,
});

const setLocation = (state, action) => ({
    ...state,
    latitude: action.payload.latitude,
    longitude: action.payload.longitude,
});

const setPushInfo = (state, action) => ({
    ...state,
    pushToken: action.payload.pushToken,
    userId: action.payload.userId,
});

const actionHandlers = {
    [Types.SET_LOCATION]: setLocation,
    [Types.SET_PUSH_INFO]: setPushInfo,
};

export default createReducer(initialState, actionHandlers);