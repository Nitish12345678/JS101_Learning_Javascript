// Problem 5: Given the days of the week in short format "Sun", "Mon" ... print in long format "Sunday", "Monday", ...

let day = "Wednesday";

switch (day) 
{
  case "Sunday": console.log("Today is Sunday");
    break;
  case "Monday": console.log("Today is Monday");
    break;
  case "Tuesday": console.log("Today is Tuesday");
    break;
  case "Wednesday": console.log("Today is Wednesday");
    break;
  case "Thursday": console.log("Today is Thursday");
    break;
  case "Friday": console.log("Today is Friday");
    break;
  case "Saturday": console.log("Today is Saturday");
    break;
  default : console.log("invalid input!!!");
}