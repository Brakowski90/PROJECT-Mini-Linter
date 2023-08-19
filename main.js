
let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

let storyWords = story.split(' ')

console.log(storyWords) // (188) word count 


const betterWords = storyWords.filter(word =>!unnecessaryWords.includes(word));

// console.log(betterWords);

let reallyCount = [];
let veryCount = [];
let basicallyCount = [];

for (let word of storyWords) {
  if (word === 'really') {
    reallyCount.push(word);
  } else if (word === 'very') {
    veryCount.push(word);
  } else if (word === 'basically') {
    basicallyCount.push(word);
  }
}

console.log(`really word count: ${reallyCount.length}`); // 2
console.log(`very word count: ${veryCount.length}`); // 5
console.log(`basically word count: ${basicallyCount.length}`); // 1 

let sentenceCounter = [];

for (let word of storyWords) {
    if (word.endsWith('.') || word.endsWith('!')) {
        sentenceCounter.push(word);
    }
}

console.log(`sentence count: ${sentenceCounter.length}`); // 12 Sentences 

console.log(betterWords.join(' '));


// Step 8 

// let betterWords = [];
// for (let word of storyWords) {
//   if (!unnecessaryWords.includes(word)) {
//     if (overusedWords.includes(word)) {
//       betterWords.push(`think of another word instead of ${word}`);
//     } else {
//       betterWords.push(word);
//     }
//   }
// }


// console.log(betterWords.join(' '));
