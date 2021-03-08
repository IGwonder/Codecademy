function lifePhase(age) {
  
  if (age) { // Om ett ålder ges när funktionen kallas
    console.log('Given age: ' + age);
    if (age <= 0 || age > 140) {return "This is not a valid age";} 
      else if (age < 3) {return 'baby';}
      else if(age < 13) {return 'child';}
      else if(age < 20) {return 'teen';}
      else if(age < 65) {return 'adult';}
      else if(age < 141) {return 'senior citizen';}
  } else { // Ett ålder väljs slumpmäsigt utan given ålder
    let age = Math.floor(Math.random() * 141);
    console.log('Random age: ' + age);  
    if (age <= 0 || age > 140) {return "This is not a valid age";} 
      else if (age < 3) {return 'baby';}
      else if(age < 13) {return 'child';}
      else if(age < 20) {return 'teen';}
      else if(age < 65) {return 'adult';}
      else if(age < 141) {return 'senior citizen';}
  }
};


console.log(lifePhase(50));
