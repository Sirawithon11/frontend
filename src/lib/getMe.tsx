import { isMee } from "../../interface";

export default async function getMe() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL_Backend}/api/auth/me`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include'
    });

    const data : isMee= await response.json();

    // ตรวจสอบ response.ok ก่อนค่อยใช้งานข้อมูล
    if (!response.ok) {
        console.error('Fetch error:', response.status, data);
        throw new Error('Failed to fetch Me');
    }

    console.log(data.role);
    return data;
}
