import * as Actions from "./actions";
import { initialState } from "../store/initialState";

export const GeschenkReducer = (state = initialState.geschenk, action) => {
  switch (action.type) {
    case Actions.RESET_GESCHENK_GAME:
      return {
        ...initialState.geschenk,
      };
    case Actions.DECK_SHUFFLE_GESCHENK_GAME:
      return {
        ...state,
        deck: action.payload,
      };
    case Actions.DRAW_GESCHENK_GAME:
      return {
        ...state,
        ...action.payload,
      };
    case Actions.PAY_CHIP_GESCHENK_GAME:
      return {
        ...state,
        ...action.payload,
      };
    case Actions.RESET_PLAYER_GESCHENK_GAME:
      return {
        ...state,
        players: action.payload,
      };
    default:
      return state;
  }
};
