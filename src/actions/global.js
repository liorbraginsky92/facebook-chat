import Types from './actionTypes';

export const setPushInfo = ((device) => ({
    type: Types.SET_PUSH_INFO,
    payload: device,
}));

export const setLocation = ((location) => ({
    type: Types.SET_LOCATION,
    payload: location,
}));