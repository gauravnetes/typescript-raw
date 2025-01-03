class User {
    public email: string
    name: string
    // #name: string // to make it private in js syntax, use # in the beginning
    private readonly city: string = "kolkata" // now I can't even access this value. But with only readonly I can access it without modifying
    constructor(email: string, name: string) {
        this.email = email; 
        this.name = name; 
        this.city // can use it in the class itself
        this.city = "suri"
    }
}
const gourav = new User("g@c.com", "gourav")
// gourav.city  // not able to access (private)

// class User {
//     readonly city: string = "kolkata" // now I can't even access this value. But with only readonly I can access it without modifying
//     constructor(public email: string, public name: string) {
        
//     }
// }
