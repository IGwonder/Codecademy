console.clear()

const _ = {
    clamp(number, lower, upper) {
        let lowerClampedValue = Math.max(number, lower);
        let clampedValue = Math.min(lowerClampedValue, upper);
        return clampedValue;
    },
    inRange(number, start, end) {
        if (end === undefined) {end = start; start = 0;}
        else if (start > end) {let temp = end; end = start; start = temp;}
        let isInRange = (start <= number && number < end) ? true : false;
        return isInRange
    },
    words(string) {
        let strArray = string.split(' ');
        return strArray
    },
    pad(string,padNr,padCh) {
        if (padNr < string.length) {return string;}
        if (padNr > string.length) {
            let paddedString = '';
            let padTot = padNr - string.length;
            let isPadTotEven = (padTot % 2 === 0) ? true : false;
            let padHalf = padTot/2;
            if (isPadTotEven === true) {
                paddedString = string.padStart(string.length + padHalf,padCh);
                paddedString = paddedString.padEnd(paddedString.length + padHalf, padCh);
                return (paddedString)
            } else {
                let padNrStart = Math.floor(padHalf);
                let padNrEnd = Math.ceil(padHalf);
                paddedString = string.padStart(string.length + padNrStart, padCh);
                paddedString = paddedString.padEnd(paddedString.length + padNrEnd, padCh);
                return (paddedString)
            }
        }
    },
    has(object, key) {   
        console.log(key)    
        let hasValue = (object[key] != undefined) ? true : false 
        return hasValue
    },
    invert(object) {
        let invertedObject = {};
        let originalValue;
        for (let key in object) {
            originalValue = object[key];
            invertedObject[originalValue] = key;
        }
        return invertedObject
    },
    findKey(object, predicate) {
        for (key in object) {
            let value = object[key]
            let predicateReturnValue = predicate(value)
            if (predicateReturnValue) {return key} 
        }
    },
    drop(array, n){
        if (n>0) {newArray = array.slice(n); return newArray}
        else if (n== undefined) {newArray = array.slice(1); return newArray}
    },
    dropWhile(array, predicate) { // VAAAAAA????????
        let dropNumber = array.findIndex(function(element,index){
            return !(predicate(element, index, array));
            });
        let droppedArray = this.drop(array, dropNumber)
        return droppedArray
    },
    chunk(array,size) {
        if (size == undefined) {size = 1};
        let arrayChunks = [];
        for (i=0; i<array.length; i++) {
            let arrayChunk = array.slice(i,i+size)
            i++
            arrayChunks.push(arrayChunk)
        }   
        return arrayChunks
    }

}

// var users = {
//     'barney':  { 'age': 36, 'active': true },
//     'fred':    { 'age': 40, 'active': false },
//     'pebbles': { 'age': 1,  'active': true }
// };

// const func = (val) => val['age'] == 1; /// predicate funktion
// console.log(_.findKey(users,func))



// console.log(_.pad('hi',6,' '))

// let key = 'haa'
// let obj = {'haa': 'blaa'}
// console.log(obj[key])




// Do not write or modify code below this line.
module.exports = _;


