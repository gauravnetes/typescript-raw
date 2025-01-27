let score: number | string = 33
score = 99
score = "99" // both are accepted


type User = {
    name: string; 
    id: number
}

type Admin = {
    username: string; 
    id: number
}

let gourav: User | Admin = {name: "gourav", id: 9275}
gourav = {username: "chandra", id: 942}       // both are accepted

// function getDBId(id: number | string) {
//     console.log(`DB id is ${id}`);
// }
// getDBId(4)
// getDBId("423")

function getDBId(id: number | string) {
    if (typeof id === "string") {
        id.toLowerCase()
    }
}

// array: 
const data: number[] = [1, 2, 3]  // array defined only for numbers
const data2: string[] = ["1", "2", "3"]
const data3: string[] | number[] = ["2", "2", "25", "2"] // either all the numbers or all the strings
const data4: (string | number) [] = [2, "4", "24", 242] // now it can be mixed with numbers and strings

let pi: 3.14 = 3.14 // now we can only allocate the only value 3.14 to pi
// pi = 242.32 // error

let seatAllotment: "aisle" | "middle" | "window" // only this three seat allotments are allowed
seatAllotment = "aisle"
// seatAllotment = "crew" // not allowed 