
const readLine = require('readline');               /*THIS IS TO GET DATA FROM CONSOLE WITH JAVASCRIPT AND NODE
                                                                                 */
let captureAnswer = readLine.createInterface({
 input: process.stdin,
 output: process.stdout
});

let movies = ['Jurassic World: Dominion', 'The Batman', 'Minions : Origin of Gru'];
captureAnswer.question("Choose your option number:\n1. Jurassic World: Dominion\n2. The Batman\n3. Minions : Origin of Gru\n", function(answer){
    console.log("Your most desired movie for this year is: " + movies[answer-1]);
    captureAnswer.close();
});

