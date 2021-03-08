console.clear()

function reverseArray(array) {
    let reverseSentence = [];
    for (i=array.length-1; i>-1; i--) {
        let element = array.indexOf(array[i]);
        reverseSentence.push(array[element]);
    };
    return reverseSentence
};
  

  
  
  
// When you're ready to test your code, uncomment the below and run:
  
const sentence = ['sense.','make', 'all', 'will', 'This'];
  
console.log(reverseArray(sentence))
  
// Should print ['This', 'will', 'all', 'make', 'sense.'];

