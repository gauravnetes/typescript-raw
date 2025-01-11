const User = {
    name: "gourav", 
    email: "gourav@gmail.com", 
    isActive: true
}

function createUser({name: string, isPaid: boolean}) {}
let newUser = {name: "gourav", isPaid: false, email: "example@gmail.com"}
createUser(newUser); 

 
createUser({name: "gourav", isPaid: "false"})

function createCourse():{name: string, price: number}{
    return {name: "backend", price: 0} 
}    // :{} in the middle is the return type of the function. 

export {}