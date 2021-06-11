//Construct a for loop that combines two strings together, alternating the characters from each source.  Print the result.

//Example: If string = “1234” and otherString = “5678”, then the output will be “15263748”.

//For now, make sure the two strings contain the same number of characters!

let word1 = 'Rutabagasandonions';
let word2 = 'Chemistry';
let wordNew = ' ';
let longestLength;

if (word1.length>word2.length) {
  longestLength=word1.length;
 } else {
   longestLength=word2.length;
 }

 

for (let i = 0; i < longestLength; i++) {

 if (i< word1.length){
   wordNew=wordNew.concat(word1[i]);}

if (i< word2.length){

   wordNew=wordNew.concat(word2[i]);
}
}
console.log(wordNew);
