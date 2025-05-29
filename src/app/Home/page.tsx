import AllBook from '@/components/AllBook' ;
import Cookie from 'js-cookie';

export default function Home  () {
  const session = Cookie.get('jwt');
  console.log(session)
  return (
    
    <div>
        <div className='uppercase text-3xl'>
          
        </div>
        <AllBook/>
    </div>
  )
};

