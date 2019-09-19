export const caseToColor = (id, count) => {
  return (count >= id) ? "grey" : id;
}

export const resultToColor = (result) => {
  if (result.isEnd) {
    return { "color": result.isWin ? "#2A9D8F" : "#BC0000" };
  } else {
    return {};
  }
}
