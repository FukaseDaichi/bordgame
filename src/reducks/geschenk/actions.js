export const RESET_GESCHENK_GAME = "RESET_GESCHENK_GAME";
export const resetGeschenkGame = () => {
  return {
    type: RESET_GESCHENK_GAME,
    payload: null,
  };
};

export const DECK_SHUFFLE_GESCHENK_GAME = "DECK_SHUFFLE_GESCHENK_GAME";
export const deckShuffleGeschenkGame = (deck) => {
  return {
    type: DECK_SHUFFLE_GESCHENK_GAME,
    payload: deck,
  };
};

export const DRAW_GESCHENK_GAME = "DRAW_GESCHENK_GAME";
export const drawGeschenkGame = (firld) => {
  return {
    type: DRAW_GESCHENK_GAME,
    payload: firld,
  };
};

export const RESET_PLAYER_GESCHENK_GAME = "RESET_PLAYER_GESCHENK_GAME";
export const resetPlayerGeschenkGame = (player) => {
  return {
    type: RESET_PLAYER_GESCHENK_GAME,
    payload: player,
  };
};

export const PAY_CHIP_GESCHENK_GAME = "PAY_CHIP_GESCHENK_GAME";
export const payChipGeschenkGame = (firld) => {
  return {
    type: PAY_CHIP_GESCHENK_GAME,
    payload: firld,
  };
};
