// write a program that:


// given any number of arguments from the command line (strings)
var args = process.argv;

// will reverse the characters of each of the strings
function reverse(subString) {
  subString.split("").forEach((character, index) => {
    // console.log(character);
    console.log(index);
    // what else...?
  });
}

// and output the strings in the same order that they were input
args.slice(2).forEach(arg => {
  reverse(arg);
});
