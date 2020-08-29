import React from "react";
import { Coin } from "./UIkit";
import { useSelector } from "react-redux";
import { getWinner } from "../reducks/geschenk/selectors";

const Firld = (props) => {
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

  //coins
  var coins = [];
  for (let step = 0; step < props.firldChip; step++) {
    coins.push(<Coin key={step} />);
  }

  //winner
  const selectors = useSelector((state) => state);
  let winner = null;
  if (props.cards.length === 0) {
    winner = getWinner(selectors);
  }
  return (
    <div className="firld row">
      <div className="firldcard col-4">
        {props.cards.length > 0 && (
          <img
            src={images["card_" + props.cards[0] + ".png"]}
            alt={props.card}
            className="gray"
            onClick={props.onClick}
          />
        )}
        {props.cards.length > 0 && (
          <p className="text-center">{props.cards.length}cards</p>
        )}
      </div>
      <div className="firldChip col-8">{coins}</div>
      {/* {props.cards.length > 0 && (
        <p className="text-center offset-4 col-8">{props.firldChip}chips</p>
      )} */}
      {props.cards.length === 0 && (
        <div className="w-100">
          <h1 className="text-center">WINNER!　{winner.name}</h1>
        </div>
      )}
    </div>
  );
};

export default Firld;
