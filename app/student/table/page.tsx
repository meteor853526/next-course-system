import { getServerSession } from 'next-auth';
import { options } from "../../api/auth/[...nextauth]/options"
import { redirect } from 'next/navigation';
export default async function usertable  () {
    const session = await getServerSession(options)

    console.log(session)
    if (!session) {
        redirect('/login');
    }
    return <div className="gap-4 bg-slate-50 h-screen w-screen">
                
                <h1>usertable</h1>
           </div>;
  };
