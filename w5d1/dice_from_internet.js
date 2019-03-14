
function Roll(numDice) {
    var roll = function(numDice) {
        var rolls = [];
        for (var i = 0; i < numDice; i++) {
            rolls.push(rolld10());
        }
        return rolls;
    };
    this.doubleSet = new Set([10]);
    this.rerollSet = new Set();
    this.rolls = roll(numDice);
    this.target = 7;
    this.autosuccesses = 0;
}

// This is called first within Roll Object and sometimes during rerolls
// Should it live here?
function rolld10() {
    return Math.floor(Math.random() * 10 + 1);
}

function parseMessage(message) {
    message = message.toString();
    var parsed = message.split(" ");

    // log parsed message for debugging:
    // console.log("parsed message: " + parsed);

    // If there's a number of dice at the end of the roll message...
    if (parsed[1].match(/^\d+/g)) {

        // get digits at beginning of string
        // I'm fairly sure this could be improved upon...
        var numDice = parsed[1].match(/^\d+/g);
        numDice = numDice[0];

        // Create a new Roll Object
        var theRoll = new Roll(numDice);

        // Parse roll options and pass to theRoll
        // To-do: test if empty array causes error
        var options = parsed[0].split("/");
        console.log("options: " + options);

        for (var i in options) {
            // set target number
            if (options[i].startsWith("tn")) {
                var target = options[i].match(/\d+/g);
                theRoll.target = parseInt(target, 10);
            }
            // set doubles
            // To-do: add code to not double 10's
            // To-do: add code for double 7+ (doub;les 7,8,9,and 10)
            if (options[i].startsWith("db")) {
                var double = options[i].match(/10|\d/g);
                double.forEach(function(item) {
                    theRoll.doubleSet.add(parseInt(item, 10));
                })
            }
            // set rerolls
            if (options[i].startsWith("re")) {
                var reroll = options[i].match(/10|\d/g);
                reroll.forEach(function(item) {
                    theRoll.rerollSet.add(parseInt(item, 10));
                })
            }
            // set autosuccesses
            if (options[i].startsWith("as")) {
                var autosuccesses = options[i].match(/\d+/g);
                theRoll.autosuccesses = parseInt(autosuccesses, 10);
            }

        }
        checkForRerolls(theRoll.rolls, theRoll.rerollSet);
        console.log(theRoll);

        // Pass theRoll through countSuccessesAndDisplayResults
        return countSuccessesAndDisplayResults(theRoll);

    } else {
        // Bad syntax handling
        // To-do: add better support here
        return "I can't find any numbers after roll. Syntax: roll/tn#/db#s/re#s/as# 8d10";
    }
}

// Check whether any of our roll values are contained in our rerollSet
// If so, initiate a cascade
function checkForRerolls(rolls, rerollSet) {
    for (var i in rolls) {
        if (rerollSet.has(rolls[i])) {
            cascade(rolls, rerollSet);
        }
    }
}
// Make a new roll, add it to our roll array. If this new value is
// also a reroll, run cascade again
function cascade(rolls, rerollSet) {
    roll = rolld10();
    rolls.push(roll);
    if (rerollSet.has(roll)) {
        cascade(rolls, rerollSet);
    }
}

function countSuccessesAndDisplayResults(theRoll) {
    // Sort dice rolls
    theRoll.rolls = theRoll.rolls.sort(function(a, b){return a-b});
    // Count successes and format results
    var successes = theRoll.autosuccesses;
    for (var i in theRoll.rolls) {
        if (theRoll.rolls[i] >= theRoll.target && theRoll.doubleSet.has(theRoll.rolls[i]) && theRoll.rerollSet.has(theRoll.rolls[i])) {
            successes+=2;
            theRoll.rolls[i] = "~~__**"+theRoll.rolls[i]+"**__~~";
        } else if (theRoll.rolls[i] >= theRoll.target && theRoll.doubleSet.has(theRoll.rolls[i])) {
            successes+=2;
            theRoll.rolls[i] = "__**"+theRoll.rolls[i]+"**__";
        } else if (theRoll.rolls[i] >= theRoll.target) {
            successes+=1;
            theRoll.rolls[i] = "**"+theRoll.rolls[i]+"**";
        } else if (theRoll.rerollSet.has(theRoll.rolls[i])) {
            theRoll.rolls[i] = "~~"+theRoll.rolls[i]+"~~";
        }
    }
    console.log(theRoll.rolls);
    return "you rolled " + theRoll.rolls + " for a total of **" + successes + "** successes";
}
