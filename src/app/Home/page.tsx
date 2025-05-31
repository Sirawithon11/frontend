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

