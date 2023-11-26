import { getServerSession } from 'next-auth';
import { options } from "../../api/auth/[...nextauth]/options"
import { redirect } from 'next/navigation';
export default async function UserPage  () {
    const session = await getServerSession(options)

    return <div className="">
                
                <h1>userpage</h1>
           </div>;
  };
