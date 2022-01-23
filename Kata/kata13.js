// // Kata 13 //

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const talkingCalendar = function (date) {
  let day = date.split("/");
  let result = [];

  for (let i = 0; day.length > i; i++) {
    //get month in the array//
    if (i === 1) {
      //convert to monthNames//
      let index = day[i] - 1;

      day[i] = monthNames[index];
      result.push(day[i]);
    }
    //get date in array//
    if (i === 2) {
      //convert date to Number//
      day[i] = Number(day[i]);

      // when date is bigger than 3 and smaller  than 21//
      if (day[i] > 3 || day[i] > 21) {
        day[i] = day[i] + "th";
      }

      switch (day[i] % 10) {
        //when date is 1, 21, 31//
        case 1:
          day[i] = day[i] + "st";
          break;
        //when date is 2, 22, //
        case 2:
          day[i] = day[i] + "nd";
          break;
        //when date is 3, 23 //
        case 3:
          day[i] = day[i] + "rd";
          break;
      }

      result = result + " " + day[i] + ", " + day[0];
      return result;
    }
  }
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
