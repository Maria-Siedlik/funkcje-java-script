function helloFriend(name, age) {
   console.log(`Witaj ${name} !!`);
   if (age <= 20) {
      console.log(` Twój wiek to mniej niż 20`);
   } else if (age >= 20 && age <= 40) {
      console.log('Twój wiek to więcej niż 20 i mniej niż 40');
   } else if (age >= 40 && age <= 60) {
      console.log('Twój wiek to więcej niż 40 i mniej niż 60');
   } else if (age >= 60 && age <= 80) {
      console.log('Twój wiek to więcej niż 60 i mniej niż 80');
   } else {
      console.log('Twój wiek to poand 80 lat');
   }

   console.log(`A dokładnie ${age} !!`);
   return;
}

helloFriend('Anna', 42);

function helloFriend2(name, age) {
   console.log(`Witaj ${name} Twój wiek to ${age} :)`);
   return;
}
helloFriend2('Anna', 52);
