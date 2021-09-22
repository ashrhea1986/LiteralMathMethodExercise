// 1a.
let warmHugs = "Hi, I\'m Olaf and I like warm hugs.";
// 1b.
console.log(warmHugs.toUpperCase());
// 1c.
console.log(warmHugs.replace("like", "love"));
// 2a.
let beenImpaled = "Oh, look at that. I\'ve been impaled.";
// 2b.
console.log(beenImpaled.slice(18));
// 3a.
const dotDotDot = `...`
// 3b.
let skullBones = `I don\'t have a skull${dotDotDot}or bones`;
console.log(skullBones);
// 4.
console.log(Math.PI);
// 5.
let randomNumber = Math.random()
console.log(randomNumber)
randomNumber *= 3;
console.log(randomNumber)
randomNumber = Math.floor(randomNumber)
console.log(randomNumber)
randomNumber++;
console.log(randomNumber)

// BONUS
// 6.
console.log(` Let it Go!`.trim().repeat(2).toUpperCase());
// 7a.
let reindeers="Reindeers are better than people.";
// 7b. 
reindeers = reindeers.split(" ").join("_");
console.log(reindeers);
// 8.
console.log(Math.sqrt(2));
// 9.
let newRandomNumber=Math.floor(Math.random()*(17))+7;
console.log(newRandomNumber); 