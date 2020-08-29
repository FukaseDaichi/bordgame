import { createSelector } from "reselect";

const usersSelector = (state) => state.users;

export const getSignedIn = createSelector(
  [usersSelector],
  (state) => state.isSignedIn
);

export const getUsername = createSelector(
  [usersSelector],
  (state) => state.username
);

export const getUserId = createSelector([usersSelector], (state) => state.uid);

export const getUserRole = createSelector(
  [usersSelector],
  (state) => state.role
);
