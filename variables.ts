let greetings: string = "gourav"
console.log(greetings);

let mynum = 9
// mynum.toUppercase() // if we perform string operations on a number it'll throw error and won't let to do.
greetings.toLowerCase()

// number
let userId = 247593.5 // if we are assigning value to a variable in the same line typescript automatically detects it's datatype
console.log(userId);
userId.toFixed() // we can only perform number operations as typescript detected that number value is assigned to userId
// userId = "gourav" // you can't assign a string on a variable that is of type number


// userId.toFixed()

// boolean
// let isLoggedIn: boolean = false
// isLoggedIn.valueOf()
export {}