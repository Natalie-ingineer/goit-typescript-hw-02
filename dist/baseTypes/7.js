/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
// const weekDay: string = "Monday";
// const weekend: string = "Suturday";
var WeekDay;
(function (WeekDay) {
    WeekDay["Monday"] = "Monday";
    WeekDay["Tuesday"] = "Tuesday";
    WeekDay["Wednesday"] = "Wednesday";
    WeekDay["Thursday"] = "Thursday";
    WeekDay["Friday"] = "Friday";
    WeekDay["Saturday"] = "Saturday";
    WeekDay["Sunday"] = "Sunday";
})(WeekDay || (WeekDay = {}));
function isWeekend(day) {
    return day === WeekDay.Saturday || day === WeekDay.Sunday;
}
isWeekend(WeekDay.Monday);
//# sourceMappingURL=7.js.map