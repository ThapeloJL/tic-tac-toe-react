const getComputerMove = (board, randomValue) => {
  // Injecting randomness keeps the cell-selection logic deterministic.
  const emptyCells = board.reduce((indices, cell, index) => {
    if (cell === "") indices.push(index);
    return indices;
  }, []);

  if (emptyCells.length === 0) return null;

  const randomIndex = Math.min(
    Math.max(Math.floor(randomValue * emptyCells.length), 0),
    emptyCells.length - 1,
  );
  return emptyCells[randomIndex];
};

export default getComputerMove;
