

import AllBook from '@/components/AllBook' ;
import  getMe  from '@/lib/getMe' ;
import { isMee } from '../../../interface';
import Card from '@/components/Card';

export default async function Home  () {
  
  const isMe : isMee =await  getMe() ;
  
  return (
    
    <div>
      {
        isMe.role == "admin" ? 
          <AllBook/>:<Card/>
      }
        
    </div>
  )
};








// "use client"
// import AllBook from '@/components/AllBook' ;
// import  getMe  from '@/lib/getMe' ;
// import { isMee } from '../../../interface';
// import Card from '@/components/Card';
// import { useEffect } from 'react';
// import { useState } from 'react';

// export default function Home  () {
//   const [Mee, setMe] = useState<isMee>();

//   useEffect( () => {
//     const fetchDataa = async () => {
//     const isMe = await getMe();
//     setMe(isMe) ;
//   }
//     fetchDataa()
    
//   },[])

//   return (
//   <div>
//     {Mee === undefined ? (
//       <p>Loading...</p>
//     ) : Mee.role === "admin" ? (
//       <AllBook />
//     ) : (
//       <Card />
//     )}
//   </div>
// );

// }

