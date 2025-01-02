function sevenYearsCycle(fullYear) {
  switch (true) {
    case (!fullYear):
      console.error("Error: fullYear is not found.");
      return;
    case (typeof fullYear === "number"):
      return fullYear * 7;
    default:
      console.error("Error: fullYear is not a number.");
      return;
  }
}

export default sevenYearsCycle;
