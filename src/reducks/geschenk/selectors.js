import { createSelector } from "reselect";

const geschenkSelector = (state) => state.geschenk;

export const getPlayers = createSelector(
  [geschenkSelector],
  (state) => state.players
);

export const getDeck = createSelector(
  [geschenkSelector],
  (state) => state.deck
);

export const getFirldChip = createSelector(
  [geschenkSelector],
  (state) => state.firldChip
);

export const getTurn = createSelector(
  [geschenkSelector],
  (state) => state.turn
);

export const getWinner = createSelector([geschenkSelector], (state) => {
  let winner = state.players[0];
  state.players.forEach((element) => {
    if (winner.point < element.point) {
      winner = element;
    }
  });
  return winner;
});
