console.clear()

const input = 'turpentine and turtles';
const vowels = ['i', 'a', 'o', 'u', 'e'];
let = resultArray = [];

for (let i = 0; i < input.length; i++) {
    // console.log(i);
    for (let j = 0; j < vowels.length; j++) {
        if (input[i] === vowels[j]) {
            // console.log(`Element ${j} identified in input: add ${vowels[j]} in resultArray`)
            resultArray.push(vowels[j])
            if (vowels[j] === 'e' || vowels[j] === 'u') {resultArray.push(vowels[j]);}
        };
    };
};
console.log(resultArray.join('').toUpperCase());