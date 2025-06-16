import { signUpSchema } from "../../interface";
export default async function signUpApi(isUser: string , isPassword : string , isRole : string) {

    let signUp : signUpSchema= {
        email :   isUser ,
        password : isPassword ,
        role : isRole
    }
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_URL_Backend}/api/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(signUp),
            credentials: 'include', // เพื่อให้ cookie ติดไปด้วยจาก backend
        });

        // console.log("isSuccesfully")
        const data = await response.json();
        return data; // Return the booking data
    } catch (err) {
        console.error('login failed:', err);
        throw err; // Re-throw the error for caller to handle
    }
}
