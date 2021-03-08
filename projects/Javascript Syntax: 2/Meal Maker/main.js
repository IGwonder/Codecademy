console.clear()

let menu = {
    _courses: {
        appetizers: [], 
        mains: [], 
        desserts: []
    },
    get appetizers(){
        return this._courses.appetizers},
    get mains(){
        return this._courses.mains},
    get desserts(){
        return this._courses.desserts},
    get courses(){
        return {
            appetizers: this._courses.appetizers,
            mains: this._courses.mains,
            desserts: this._courses.desserts
        }
    },
    addDishToCourse(courseName, dishName, dishPrice){
        let dish = {
            name: dishName,
            price: dishPrice
        };
        newCourse = this._courses[courseName].push(dish)
    },
    getRandomDishFromCourse(courseName){
        const dishes = this._courses[courseName];
        const randomDishIndex= Math.floor(Math.random()*dishes.length);
        return {
            name: dishes[randomDishIndex].name,
            price: dishes[randomDishIndex].price
        }
    },
    generateRandomMeal(){
        const appetizer = this.getRandomDishFromCourse('appetizers');
        const main = this.getRandomDishFromCourse('mains');
        const dessert = this.getRandomDishFromCourse('desserts');
        const totalPrice = appetizer.price + main.price + dessert.price;
        return `Suggested meal: ${appetizer.name}, ${main.name} and ${dessert.name}. ${totalPrice}$`
    },
};

menu.addDishToCourse('mains', 'tapas', 55);
menu.addDishToCourse('mains', 'pasta', 50);
menu.addDishToCourse('mains', 'soup', 40);

menu.addDishToCourse('appetizers', 'skagen', 40);
menu.addDishToCourse('appetizers', 'sallad', 35);
menu.addDishToCourse('appetizers', 'macka', 20);

menu.addDishToCourse('desserts', 'kaka', 30);
menu.addDishToCourse('desserts', 'cake', 45);
menu.addDishToCourse('desserts', 'ice cream', 35);

console.log(menu.courses)


let meal = menu.generateRandomMeal();
console.log(meal)

