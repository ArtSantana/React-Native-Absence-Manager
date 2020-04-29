import * as firebase from 'firebase';

export const Types = {
  LOGIN: "auth/LOGIN",
  LOGOUT: "auth/LOGOUT",
};

const INITIAL_STATE = {
  isSigned: false,
};

export default function auth(state = INITIAL_STATE, action) {
  switch(action.type) {
    case Types.LOGIN:
      return state.isSigned = true;
    case Types.LOGOUT:
      signOutUser();
      return state.isSigned = false;
    default:
      return state
  }
}

export const Creators = {
  login: () => ({
    type: Types.LOGIN,
  }),

  logout: () => ({
    type: Types.LOGOUT,
  })
}

function signOutUser() {
  firebase.auth().signOut();
}