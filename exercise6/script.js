// ? Question-2:Write a function called "printPersons" that takes an array of persons and displays them on the screen.
const persons = [
  { name: "Alice", age: 18 },
  { name: "Bob", age: 21 },
  { name: "Charlie", age: 15 },
];
const printPersons = (persons) => {
  const personList = document.getElementById('personList');
  persons.forEach(person => {
      const personDiv = document.createElement('div');
      personDiv.innerText = `${person.name}, Age: ${person.age}`;
      personList.appendChild(personDiv);
  });
};
printPersons(persons);
