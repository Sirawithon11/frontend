import { loginSchema } from "../../interface";
export default async function login(user: string , password : string) {

    let login : loginSchema= {
        email :   user ,
        password : password
    }
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_URL_Backend}/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(login),
            credentials: 'include', // เพื่อให้ cookie ติดไปด้วยจาก backend
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`API Error: ${errorText}`);
        }
        // console.log("isSuccesfully")
        const data = await response.json();
        return data; // Return the booking data
    } catch (err) {
        console.error('login failed:', err);
        throw err; // Re-throw the error for caller to handle
    }
}
