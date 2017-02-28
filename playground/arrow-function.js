// var square = (x) => {
//     return x * x;
// }

//var square = (x) => x * x;
var square = x => x * x;
console.log(square(9));

var user = () => {
    name = 'Remya',
    sayHi () => {
        console.log(`hi ${this.name}`); // will throw error
    },
    sayHiAlt () {
        console.log(`hi ${this.name}`);
    }
};

user.sayHiAlt();
