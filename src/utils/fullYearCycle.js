function fullYearCycle(fiftyDays) {
  if (!fiftyDays) {
    console.error("Error: fiftyDays is not found.");
    return;
  }

  const yearCycle = fiftyDays * 7 + 15;

  switch (true) {
    case (typeof fiftyDays === "number" && yearCycle <= 365):
      return yearCycle;
    case(typeof fiftyDays !== "number"):
      console.error("Error: fiftyDays is not a number.");
      return;
    default:
      console.error("Error: yearCycle must equal to or less than 365.");
      return;
  }
}

export default fullYearCycle;
