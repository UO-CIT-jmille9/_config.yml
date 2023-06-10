/*
    CiI 281 Project 1 
    Name: James Miller
*/
const days = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
];
const today = new Date();
const dayOfWeek = days[today.getDay()];
console.log(dayOfWeek);