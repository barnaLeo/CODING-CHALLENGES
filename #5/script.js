function animal(obj) {
  return "This " + obj.color + " " + obj.name + " has " + obj.legs + " legs.";
}
var myAnimal = {name: "dog", legs: 4, color: "white"};
console.log(animal(myAnimal)); // Output: "This white dog has 4 legs."
