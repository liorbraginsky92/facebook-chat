import Types from './actionTypes';

export const setToken = (token) => ({
    type: Types.SET_TOKEN,
    payload: token
});
export const setProfile = (profile) => ({
    type: Types.SET_PROFILE,
    payload: profile
});

export const logout = () => ({
    type:  Types.LOGOUT
});