interface User {
    readonly dbId: number,
    email: string, 
    userId: number, 
    googleId?: string,
    // startTrial: () => string // 1st way
    startTrial() : string       // 2nd way both works
    getCoupon(couponname: string, value: number): number 
}

interface User {
    github: string  
}   // reopening of interfaces


// inheritance:
interface Admin extends User{         // now the Admin has all the properties of the User
    role: "admin" | "ta" | "learner"
}

const gourav: Admin = {dbId: 222, email: "gourav@gmail.com", userId: 21423, googleId: "gourav", startTrial: () => {
    return "trial started"
}, 
github: "gouravnetes",  
role: "admin",
getCoupon: (name: "discount", value: 10) => {    // couponname & name are technically same
    return 10
}
}
gourav.email = "example@gmail.com"
// gourav.dbId = 24234 // can't manipulate readonlys



export {}