import React, { useCallback, useEffect, useState } from "react";
import { Player, Firld } from "../components/index";
import DeleteIcon from "@material-ui/icons/Delete";
import Cpu from "../Cpu";

import { useSelector } from "react-redux";
import {
  getDeck,
  getFirldChip,
  getTurn,
  getPlayers,
} from "../reducks/geschenk/selectors";
import { shuffleDeck, drawCard, payChip } from "../reducks/geschenk/operations";
import { useDispatch } from "react-redux";
import { BubblyButton } from "../components/UIkit";

function Geschenk() {
  const dispatch = useDispatch();
  const selectors = useSelector((state) => state);
  const deck = getDeck(selectors);
  const firldChip = getFirldChip(selectors);
  const players = getPlayers(selectors);
  const turn = getTurn(selectors);
  const playerNum = turn % players.length;
  const [tab, setTab] = useState(1);

  // reset
  const callbackRset = useCallback(() => {
    dispatch(shuffleDeck());
  }, []);

  // カード取得
  const callbackCard = useCallback(() => {
    dispatch(drawCard());
  }, []);

  // チップ支払い
  const callbackChip = useCallback(() => {
    dispatch(payChip());
  }, []);

  // チップ支払い
  const changeTab = useCallback((e) => {
    console.log(e.target.value);
    setTab(e.target.value);
  }, []);

  useEffect(() => {
    if (turn === 0 && deck.length >= 32) {
      dispatch(shuffleDeck());
    } else {
      setTimeout(() => {
        if (playerNum != 0 && deck.length > 0) {
          if (Cpu(deck, players, firldChip, turn)) {
            dispatch(drawCard());
          } else {
            dispatch(payChip());
          }
        }
      }, 500);
    }
  });

  return (
    <div className="main">
      <h1>Geschenk</h1>
      <div className="mainbuttonarea">
        <BubblyButton label="RESET" onClick={callbackRset} id="resetbutton" />
      </div>
      <div className="container">
        <Firld cards={deck} firldChip={firldChip} onClick={callbackCard} />
      </div>

      <div>
        <div className="tab_container">
          {players.map((value, index) => {
            return (
              <React.Fragment key={index}>
                <input
                  id={"tab" + (index + 1)}
                  type="radio"
                  name="tabs"
                  checked={Number(tab) === Number(index + 1)}
                  value={index + 1}
                  onChange={changeTab}
                />
                <label htmlFor={"tab" + (index + 1)} className="tab_label">
                  <span>{value.name}</span>
                </label>
              </React.Fragment>
            );
          })}
          {players.map((value, index) => {
            return (
              <section
                id={"content" + (index + 1)}
                className="tab-content"
                key={index.toString()}
              >
                <Player
                  firldChip={firldChip}
                  getCard={callbackCard}
                  payChip={callbackChip}
                  playerNum={index}
                  activateFlg={index === playerNum && deck.length > 0}
                />
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Geschenk;
