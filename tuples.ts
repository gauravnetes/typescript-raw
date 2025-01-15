const user: (string | number) [] = [23, "gc"]  // but if we want the string and number in the perfect order then how we can do that
const newUser: [string, number, boolean] = ["gc", 24, true]  // now the data also should be in proper order or format

let rgb: [number, number, number] = [245, 23, 2]

type User = [number, string] 
const anotherUser: User = [23, "gc"] // array of type User i.e. [number, string]

anotherUser[1] = "chandra" // will overwrite
// anotherUser.push(true) // not possible

