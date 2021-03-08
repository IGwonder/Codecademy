console.clear()

let menu = {
    _courses: {
        appetizers: [], 
        mains: [], 
        desserts: []
    },

    get appetizers() {return this._courses.appetizers},       
    get mains() {return this._courses.mains},       
    get desserts() {return this._courses.desserts},
    get courses(){
        return {
            appetizers: this._courses.appetizers,
            mains: this._courses.mains,
            desserts: this._courses.desserts
        }
    },

    set appetizers(appetizersIn) {this.appetizers = appetizersIn},
    set mains(mainsIn) {this.mains = mainsIn},
    set desserts(dessertsIn) {this.desserts = dessertsIn},

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

menu.appetizers = [
    {name: 'skagen', price: 40}, 
    {name: 'sallad', price: 35}, 
    {name: 'macka', price: 20}];
menu.mains = [
    {name: 'tapas', price: 55}, 
    {name: 'pasta', price: 50}, 
    {name: 'soup', price: 40}];
menu.desserts = [
    {name: 'kaka', price: 30}, 
    {name: 'cake', price: 45}, 
    {name: 'ice cream', price: 35}
];

console.log(menu.courses)

let meal = menu.generateRandomMeal();
console.log(meal)

