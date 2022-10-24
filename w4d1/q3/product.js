const products = [
    { name: "Mouse", description: "A4 tech mouse", price: 8 , quantity: 5},
    { name: "Keyboard", description: "A4 tech keybpoard", price: 10 , quantity: 10},
    { name: "Monitor", description: "Samsung Mouse", price: 200 , quantity: 100}
];

module.exports = class Product {
    constructor() {

    }
    static find(name) {
        let obj = null;
        console.log("name:"+name+"ddd");
        products.forEach(function (item) {
            console.log(item.name);
           if(item.name == name) obj = item;
        });
        console.log("name:"+obj+"ddd");
        return obj;
    }
    static getAll() {
        return products;
    }
}