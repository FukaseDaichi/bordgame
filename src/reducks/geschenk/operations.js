import {
  resetGeschenkGame,
  deckShuffleGeschenkGame,
  drawGeschenkGame,
  resetPlayerGeschenkGame,
} from "./actions";

// ポイント計算
const calcPoint = (player) => {
  const array = player.handCards.map((value) => Number(value));
  const chip = player.chipAmount;

  let point = 0;
  array.forEach((value) => {
    if (!array.includes(value - 1)) {
      point = point - value;
    }
  });
  return point + chip;
};

export const shuffleDeck = () => {
  // shuffle function
  const shuffle = ([...array], slicenum) => {
    for (let i = array.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array.slice(slicenum);
  };

  return async (dispatch, getState) => {
    dispatch(resetGeschenkGame());
    const newDeck = shuffle(getState().geschenk.deck, 9);
    dispatch(deckShuffleGeschenkGame(newDeck));
  };
};

export const drawCard = () => {
  return async (dispatch, getState) => {
    const nowTurn = getState().geschenk.turn;
    const players = getState().geschenk.players;
    const playerNum = nowTurn % players.length;
    const player = players[playerNum];

    const newPlayer = {
      name: player.name,
      handCards: player.handCards
        .concat(getState().geschenk.deck[0])
        .sort((a, b) => Number(a) - Number(b)),
      chipAmount: player.chipAmount + getState().geschenk.firldChip,
      point: 0,
    };

    newPlayer.point = calcPoint(newPlayer);

    dispatch(
      drawGeschenkGame({
        players: players.map((value, index) => {
          if (index === playerNum) {
            return newPlayer;
          } else {
            return value;
          }
        }),
        firldChip: 0,
        deck: getState().geschenk.deck.slice(1),
      })
    );

    console.log(getState().geschenk);
  };
};

export const setHands = (hands) => {
  if (hands.length > 0) {
    return async (dispatch, getState) => {
      const nowTurn = getState().geschenk.turn;
      const players = getState().geschenk.players;
      const playerNum = nowTurn % players.length;
      const player = players[playerNum];

      const resetPlayer = {
        ...player,
        handCards: hands.sort((a, b) => Number(a) - Number(b)),
      };

      dispatch(
        resetPlayerGeschenkGame(
          players.map((value, index) => {
            if (index === playerNum) {
              return resetPlayer;
            } else {
              return value;
            }
          })
        )
      );

      console.log(getState().geschenk);
    };
  } else {
    return async (dispatch, getState) => {
      //処理なし
    };
  }
};

export const payChip = () => {
  return async (dispatch, getState) => {
    const nowTurn = getState().geschenk.turn;
    const players = getState().geschenk.players;
    const playerNum = nowTurn % players.length;
    const player = players[playerNum];
    const newPlayer = {
      name: player.name,
      handCards: player.handCards,
      chipAmount: player.chipAmount - 1,
      point: 0,
    };
    newPlayer.point = calcPoint(newPlayer);

    dispatch(
      drawGeschenkGame({
        players: players.map((value, index) => {
          if (index === playerNum) {
            return newPlayer;
          } else {
            return value;
          }
        }),
        firldChip: getState().geschenk.firldChip + 1,
        turn: nowTurn + 1,
      })
    );
  };
};
