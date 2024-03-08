/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

// const weekDay: string = "Monday";
// const weekend: string = "Suturday";

enum WeekDay {
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
  Saturday = "Saturday",
  Sunday = "Sunday",
}

function isWeekend(day: string): boolean {
  return day === WeekDay.Saturday || day === WeekDay.Sunday;
}

isWeekend(WeekDay.Monday);
