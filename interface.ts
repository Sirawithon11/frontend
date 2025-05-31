export interface loginSchema {
    email : string
    password : string
}

export interface isMee {
    user_id : string
	email :   string
	role  :  string
	token : string
}



export interface signUpSchema {
        email :   string
        password : string 
        role : string
}