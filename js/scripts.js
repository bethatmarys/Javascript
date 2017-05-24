var name = prompt("What's your name?");
var age  = prompt("How old are you?");
var food = prompt("What's your favorite food?");

function sentence () {
  return ("Hello " + name + "! Your " + age + " is sexy! Let's go grab some " + food + "!");
}
 var sentence = sentence()
alert(sentence);
