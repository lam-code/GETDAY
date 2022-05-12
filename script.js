const birthday = new Date('12, may, 1993 ');
const day = birthday.getDay();

var options = {weekday: "long", year: "numeric", month: "long", day: "numeric"};
console.log(new Intl.DateTimeFormat('fr-FR', options).format(birthday));

// console.log(day);