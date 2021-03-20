/* eslint-disable no-undef */
const HashMap = require("./HashMap");

function main() {
  let lotr = new HashMap();

  HashMap.MAX_LOAD_RATIO = 0.5;
  HashMap.SIZE_RATIO = 3;

  lotr.set("Hobbit", "Bilbo");
  lotr.set("Hobbit", "Frodo");
  lotr.set("Wizard", "Gandalf");
  lotr.set("Human", "Aragorn");
  lotr.set("Elf", "Legolas");
  lotr.set("Maiar", "The Necromancer");
  lotr.set("Maiar", "Sauron");
  lotr.set("RingBearer", "Gollum");
  lotr.set("LadyOfLight", "Galadriel");
  lotr.set("HalfElven", "Arwen");
  lotr.set("Ent", "Treebeard");

  console.log(lotr);
  console.log(lotr.get("Maiar"));
  console.log(lotr.get("Hobbit"));
  console.log(lotr._capacity);
}

function removeDuplicate(string) {
  let duplicateMap = new HashMap();

  for (let i = 0; i < string.length; i++) {
    duplicateMap.set(string[i]);
  }
  let newString = "";

  duplicateMap._hashTable.forEach((str) => {
    newString += str.key;
  });
  console.log(newString);
  return;
}

removeDuplicate("google");
removeDuplicate("hello world");

function anagramGrouping(array) {
  let groupArray = [];
  let anagramMap = new HashMap();

  array.forEach((string) => {
    let word = string.split("").sort().join();

    try {
      let index = anagramMap.get(word);
      groupArray[index].push(string);
    } catch (e) {
      anagramMap.set(word, groupArray.length);
      groupArray.push([string]);
    }
  });
  return groupArray;
}

console.log(anagramGrouping(['east','cars','acre','arcs','teas','eats','race']))

main();
