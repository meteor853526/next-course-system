import { getServerSession } from 'next-auth';
import { options } from "../../api/auth/[...nextauth]/options"
import { redirect } from 'next/navigation';
export default async function usertable  () {



    return <div className="">
                
                <h1>usertable</h1>
           </div>;
  };
