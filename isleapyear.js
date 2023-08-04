function isLeapYear(year) {
  const remainder = year % 4;
  if (remainder === 0) {
    // return true
    console.log("year year is leap year", year);
  } else {
    console.log("your year is not a leap year", year);
  }
}
// const is myYearLeapYear = isLeapYear(1933);
// console.log('my year', isMyYearLeapYear);

isLeapYear(1933);
isLeapYear(1960);
