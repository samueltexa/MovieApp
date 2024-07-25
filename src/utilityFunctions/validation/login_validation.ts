
let isValid = true;
const login_validation = (username:string, ) => {
    if(username){
        if(username.length <= 3){
            console.log('Username is too short')
            isValid = false;
        }else if (username.length >=8){
            console.log("User name is too long")

        }else{
            console.log("The user name is valid")
            isValid = false;
        }

    }else{
        console.log("Username cannot be left empty")
        
    }


}

export default login_validation
