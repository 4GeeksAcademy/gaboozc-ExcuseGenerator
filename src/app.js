let who = [
  "A rabid kangaroo wearing a tuxedo",
  "My pet hamster who moonlights as a DJ",
  "An angry ghost with a vendetta against furniture",
  "The ghost of an 80s rockstar",
  "A professional wrestler who also does stand-up comedy",
  "A confused time traveler who thinks it’s 1994"
];

let action = [
  "screamed at",
  "ate with no remorse",
  "accidentally launched into space",
  "broke while doing a backflip",
  "set on fire for dramatic effect",
  "hid in the pantry like a coward"
];

let what = [
  "my entire life savings in Monopoly money",
  "the last cookie in the jar and blamed it on the dog",
  "the internet connection during my Zoom meeting",
  "the cake I was hiding from my roommate",
  "my favorite potato, which was on a diet",
  "the entire family’s group chat with a single meme"
];

let when = [
  "while riding a unicycle through a hailstorm",
  "during a dramatic slow-motion car chase scene",
  "while I was aggressively reading a self-help book",
  'right after I danced to "Stayin’ Alive" in the living room',
  "as I was trying to explain quantum physics to a cat",
  "during a seance, but it was very low-energy"
];

function generateExcuse() {
  let whoRandom = who[Math.floor(Math.random() * who.length)];
  let actionRandom = action[Math.floor(Math.random() * action.length)];
  let whatRandom = what[Math.floor(Math.random() * what.length)];
  let whenRandom = when[Math.floor(Math.random() * when.length)];

  let excuse = `My excuse: ${whoRandom} ${actionRandom} ${whatRandom} ${whenRandom}.`;

  document.getElementById("excuse").innerHTML = excuse;
}

window.onload = generateExcuse;

document
  .getElementById("generateBtn")
  .addEventListener("click", generateExcuse);
