type User = {
    name: string; 
    email: string;  
    isActive: boolean

}

function createUser(user: User) {   // the parameter user to be passed here should be the type of User
    return {name: "", email: "", isActive: true}
}

createUser({name: "", email: "", isActive: true})  

export {}