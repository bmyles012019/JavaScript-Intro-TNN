/* 
    Part 1 - Objects and object properties
*/

// object literals (object literal notation)

// use curley braces to make a object literal (like json or python dict)
let user = {
    name: 'bradley',
    age: 36,
    email: 'bradley@gmail.com',
    location: 'florida',
    blogs: ['CECL models', 'Bayesian Credit']
};

console.log(user);

// to access the property using the "." notation (e.g., object.property)
console.log(user.age);
user.age = 35;
console.log(user.age);

// to access the property using "[]" notation (e.g., object['property'])
console.log(user['age']);
user['age'] = 36;   // changing the object property
console.log(user['age']);
console.log(user['email']);
console.log(user['name']);

// when accessing a property using a variable, use the "[]" notation
const key = 'name';
console.log(user[key]);

console.log(typeof user);  // get the type of the user object

/* 
    Part 2 - Attaching Functions/Methods to the object
*/

// Attaching functions/methods to an object

// const blogs = [{
//     title: 'CECL models',
//     title: 'Bayesian Credit Risk'
// }];

let user2 = {
    name: 'bradley',
    age: 36,
    email: 'bradley@gmail.com',
    location: 'florida',
    blogs: [
        {title: 'CECL models', likes: 30},
        {title: 'Bayesian Credit Risk', likes: 50}
    ],
    login: function(){
        console.log('the user logged in');
    },
    logout(){
        console.log('the user logged out');
    },
    logBlogs(){
        console.log(this.blogs);
        this.blogs.forEach(blog => {
            console.log(blog.title, blog.likes);
        })
    }
};

user2.login();
user2.logout();
user2.logBlogs();

// console.log(this);   // shows the window object and properties

/* 
    Part 3 - Math Object (JS built-in)
*/
console.log(Math);      //shows the Math objects and properties
console.log(Math.PI);   //shows the value of PI
console.log(Math.E);   //shows the value of e

console.log(Math.round(7.7));   //invokes the rounding function
console.log(Math.floor(7.7));   //invokes the floor function
console.log(Math.ceil(7.7));   //invokes the ceil function

const random = Math.random()
console.log(random);   //invokes the random function with a value between 0 and 1

const random2 = Math.random() * 100
console.log(random2);   //invokes the random function
