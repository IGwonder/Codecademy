console.clear()

// Write your code here:

function greetAliens(array) {
    for (i=0; i<array.length; i++) {
        console.log(`Oh powerful ${array[i]}, we humans offer our unconditional surrender!`)
    };
};







// When you're ready to test your code, uncomment the below and run:

const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];

greetAliens(aliens);

// function groceries(array) {
//     let startArray = []
//     array.forEach(obj => startArray.push(obj.item))
//     console.log(startArray)
  
//     begArray = startArray.splice(0,startArray.length-1)
//     console.log(begArray)

//     let mutadedBegArray = []
//     begArray.forEach(el => mutadedBegArray.push(el + ','))
//     console.log(mutadedBegArray)

//     mutadedBegArray.pop()
//     mutadedBegArray.push(begArray[begArray.length-1])

//     endArray = startArray.slice(startArray.length-1)
//     if (array.length>1) {endArray.unshift('and')}
    
//     console.log(endArray)
  
//     endArray.forEach(el => {
//         mutadedBegArray.push(el)
//     })
//     console.log(mutadedBegArray)
    
//     return console.log(mutadedBegArray.join(' '))
  
//   }
  
  
//   groceries( [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}] );