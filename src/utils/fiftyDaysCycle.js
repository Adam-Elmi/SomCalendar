function fiftyDaysCycle(currentWeek) {
  if (typeof currentWeek !== "number") {
    console.error("currentWeek must be a number.");
    return;
  }

  if (currentWeek <= 0) {
    console.error("currentWeek must be greater than 0.");
    return;
  } else if (currentWeek > 7) {
    console.error("currentWeek must be less than or equal to 7.");
    return;
  }

  return currentWeek * 7 + 1;
}

export default fiftyDaysCycle;
