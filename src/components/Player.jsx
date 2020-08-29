import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getPlayers } from "../reducks/geschenk/selectors";
import { BubblyButton } from "./UIkit";

const Player = (props) => {
  const selectors = useSelector((state) => state);
  const player = getPlayers(selectors)[props.playerNum];

  const importAll = (r) => {
    let images = {};
    r.keys().forEach((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  };
  const images = importAll(
    require.context("../contents/img/card", false, /\.png/)
  );

  useEffect(() => {});

  return (
    <div className={"player " + (props.activateFlg ? "playeracive" : "")}>
      <div className="row status">
        <div>
          <label>Point : {player.point}</label> 　　　
        </div>
        <div>
          <label>Chip : {player.chipAmount}</label>
        </div>
      </div>
      <div className="hands w-100">
        <div className="cards">
          {player.handCards.map((value, index) => {
            return (
              <div key={index.toString()} className="cardWrapper">
                <img
                  src={images["card_" + value + ".png"]}
                  alt="value"
                  className="gray card"
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="playerButtons row">
        <BubblyButton
          onClick={() => {
            props.getCard();
          }}
          disabled={!props.activateFlg}
          label="DRAW"
        />
        <BubblyButton
          label="PAY"
          onClick={() => {
            props.payChip();
          }}
          disabled={!props.activateFlg || player.chipAmount <= 0}
        />
      </div>
    </div>
  );
};

export default Player;
