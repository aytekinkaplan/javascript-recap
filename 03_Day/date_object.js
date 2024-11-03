// Creating a time object for the current date and time
let now = new Date();
console.log(now); // Current date and time

// Getting full year
let year = now.getFullYear();
console.log(year); // Current year

// Getting month
let month = now.getMonth();
console.log(month); // Current month (0-11, where 0 is January and 11 is December)

// Getting day of the month
let day = now.getDate();
console.log(day); // Current day of the month (1-31)

// Getting hours
let hours = now.getHours();
console.log(hours); // Current hour (0-23)

// Getting minutes
let minutes = now.getMinutes();
console.log(minutes); // Current minute (0-59)

// Getting seconds
let seconds = now.getSeconds();
console.log(seconds); // Current second (0-59)

// Getting milliseconds
let milliseconds = now.getMilliseconds();
console.log(milliseconds); // Current millisecond (0-999)

// Creating a date object with specified values (year, month, day, hour, minute, second, millisecond)
let date = new Date(2012, 5, 10, 15, 30, 45, 0); // June 10, 2012, 15:30:45
console.log(date); // Outputs 2012-06-10T15:30:45.000Z

// Creating a date object with milliseconds specified
let dateWithMilliseconds = new Date(2012, 5, 10, 15, 30, 45, 123);
console.log(dateWithMilliseconds); // Outputs 2012-06-10T15:30:45.123Z

// Creating a date object from a string representation of a date
let dateWithString = new Date("2012-06-10T15:30:45.000Z");
console.log(dateWithString); // Outputs 2012-06-10T15:30:45.000Z

// Creating a date object from a timestamp (milliseconds since January 1, 1970)
let dateWithTimestamp = new Date(1234567890);
console.log(dateWithTimestamp); // Outputs the date corresponding to the timestamp (1970-01-15T06:56:07.890Z)

// Creating a date object by copying an existing date object
let dateWithDateObject = new Date(date);
console.log(dateWithDateObject); // Outputs the same date as 'date' object (2012-06-10T15:30:45.000Z)
