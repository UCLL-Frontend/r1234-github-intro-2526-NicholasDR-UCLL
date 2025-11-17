let x = 10;
console.log(x);

let kwadraat = x*x;
console.log(kwadraat);

const tekst = 'hallo';

const waar = true;
let y = 11;

console.log(x == y);
console.log(x > y);

console.log("---")
let tien = "10";
console.log(x == tien);
console.log(x === tien);//vergelijkt dat variabelen dezelfde soort zijn

console.log("---");
console.log("appel" < "Appel");

if(x%2 === 0) console.log("even")
else console.log("oneven");
//kan ook als:
let result = x%2 === 0 ? "even" : "oneven";
console.log(result)

let a = 3, b = 4;
console.log(a === 3 || b === 0);
console.log(a < 10 && b > 0);

let word1 = "help";
let word2 = "me";
let word = word1 + " " + word2;
let wordDifferent = `${word1} ${word2}`;
console.log(wordDifferent);

function Sum(a,b){
  return a + b;
}

console.log(`De som van 4 en 5 is ${Sum(a, b)}`);
console.log(`Woorden samenvoegen: ${Sum("alfa", "beta")}`);

const Sum2 = (a, b) => {return a + b;}
const Sum3 = (a, b) => a + b;