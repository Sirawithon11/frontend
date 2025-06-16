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
            credentials: 'include',//  เพื่อให้ cookie ติดไปด้วยจาก backend
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`API Error: ${errorText}`);
        }
        const data = await response.json();
        // const arrJson = [ data ];
        // const ndjsonString = arrJson.map(obj => JSON.stringify(obj)).join('\n');
        // console.log("ndJson : " + ndjsonString) 
        // await fetch(`http://127.0.0.1:7280/api/v1/auth_login/ingest`, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/ndjson',
        //     },
        //     body: ndjsonString,
        //     mode: "no-cors",
        // });
        // console.log("isSuccesfully")
        
        return data; // Return the booking data
    } catch (err) {
        console.error('login failed:', err);
        throw err; // Re-throw the error for caller to handle
    }
}
