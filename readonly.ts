type User = {
    readonly _id: string; // no one could manipulate this data
    name: string; 
    email: string; 
    isActive: boolean;
    creditCardDetails?: number; // after declaring as optional with ? it's not mandatory to pass on this detail it became optional
}

let myUser: User = {
    _id: "1234",
    name: "gourav", 
    email: "example@gmail.com",
    isActive: true
}

type cardNumber = {
    cardnumber: string
}
type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}

myUser.email = "gourav@gmail.com"
// myUser._id = "9wgh3w4"  // readonly property

export {}