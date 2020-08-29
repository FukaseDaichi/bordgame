const Cpu = (deck, players, firldChip, turn) => {
  const threshold = 15;
  const topCard = Number(deck[0]);
  const player = players[turn % players.length];

  if (player.tipAmount <= 0) {
    // チップがないためカード引く
    return true;
  }

  if (
    player.handCards.includes(topCard - 1) ||
    player.handCards.includes(topCard + 1)
  ) {
    // 引いても問題ないため引く
    return true;
  }

  if (topCard - firldChip > threshold) {
    // チップを払う
    return false;
  }

  return true;
};

export default Cpu;
